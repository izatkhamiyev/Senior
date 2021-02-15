
if(typeof exports == "undefined"){
	exports = this;
}

var THREECAMERA;
var THREEFACEOBJ3D, THREEFACEOBJ3DPIVOTED;
var LEFTEARTEMPLE, RIGHTEARTEMPLE;
var ISDETECTED=false, ISLOADED=false;
var CVD = null;

var SETTINGS={
    rotationOffsetX: 0,
    cameraFOV: 40,
    pivotOffsetYZ: [0, 0], //XYZ of the distance between the center of the cube and the pivot
    detectionThreshold: 0.5, //sensibility, between 0 and 1. Less -> more sensitive
    detectionHysteresis: 0.1,
    scale: 0.6 //real = 9.4 && previos = 0.6
};


function load_model(pathToModel){
    var path = './assets/envmap/';
    var envMap = new THREE.CubeTextureLoader().load([
        path + 'posx.jpg', path + 'negx.jpg',
        path + 'posy.jpg', path + 'negy.jpg',
        path + 'posz.jpg', path + 'negz.jpg'
    ]);
    var loader = new THREE.GLTFLoader();

    loader.load(
        pathToModel.concat('.glb'),
        function(gltf){
            var i = 0;
            for(i = 0; i < gltf.scene.children.length; i++){
                var firstLetter = gltf.scene.children[i].name.charAt(0);
                
                if (firstLetter == 'l'){
                    LEFTEARTEMPLE = gltf.scene.children[i];
                }
                else if(firstLetter == 'r'){
                    RIGHTEARTEMPLE = gltf.scene.children[i];
                }
                gltf.scene.children[i].traverse( 
                    function ( child ) {
                        if ( child instanceof THREE.Mesh ) {
                            child.material.envMap = envMap;
                        }
                
                    }
                );
            }

            THREEFACEOBJ3D.children = [];
            THREEFACEOBJ3DPIVOTED=new THREE.Object3D();
            THREEFACEOBJ3DPIVOTED.frustumCulled=false;
            THREEFACEOBJ3DPIVOTED.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
            THREEFACEOBJ3DPIVOTED.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
            THREEFACEOBJ3D.add(THREEFACEOBJ3DPIVOTED);
            THREEFACEOBJ3DPIVOTED.add( gltf.scene );

            // remove loader after it was loaded
            if(document.getElementById('loader')) 
                document.getElementById('loader').remove();
        }
    );
    return loader;
}

// build the 3D. called once when Eyetool Face Filter is OK
function init_threeScene(spec, pathToModel) {
    
    var threeStuffs = JeelizThreeHelper.init(spec /*, detect callback function */);
    
    THREEFACEOBJ3D=new THREE.Object3D();
    THREEFACEOBJ3D.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED=new THREE.Object3D();
    THREEFACEOBJ3DPIVOTED.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
    THREEFACEOBJ3DPIVOTED.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
    THREEFACEOBJ3D.add(THREEFACEOBJ3DPIVOTED);
    
    // threeStuffs.faceObject.add(THREEFACEOBJ3D);
    
    var loader = load_model(pathToModel);
    
    // Create the camera
    var aspecRatio=spec.canvasElement.width / spec.canvasElement.height;
    THREECAMERA=new THREE.PerspectiveCamera(20, aspecRatio, 0.1, 100);

    // Add light
    var ambLight = new THREE.AmbientLight(0xffffff);
    
    threeStuffs.scene.add(ambLight);
} // end init_threeScene()

//launched by body.onload() :
function main(pathToModel, domain){
    if(!permission(domain)){
        return "Error";
    }
    JeelizResizer.size_canvas({
        canvasId: 'jeeFaceFilterCanvas',
        callback: function(isError, bestVideoSettings){
            init_faceFilter(bestVideoSettings, pathToModel);
            adaptSize();
        }
    });
} //end main()


function init_faceFilter(videoSettings, pathToModel){
    JEEFACEFILTERAPI.init({
        followZRot: true,
        canvasId: 'jeeFaceFilterCanvas',
        NNCpath: './dist/', // root of NNC.json file
        maxFacesDetected: 1,
        videoSettings: videoSettings,
        alpha: true,
        callbackReady: function(errCode, spec){
          if (errCode){
            console.log('AN ERROR HAPPENS. ERR =', errCode);
            return;
          }
          CVD = JeelizCanvas2DHelper(spec);
          pupil.initialize(spec);
          init_threeScene(spec, pathToModel);
        }, //end callbackReady()

        //called at each render iteration (drawing loop) :
        callbackTrack: function(detectState){
            if (ISDETECTED && detectState.detected<SETTINGS.detectionThreshold-SETTINGS.detectionHysteresis){
                //DETECTION LOST
                ISDETECTED=false;
            } else if (!ISDETECTED && detectState.detected>SETTINGS.detectionThreshold+SETTINGS.detectionHysteresis){
                //FACE DETECTED 
                ISDETECTED=true;
            }
            

            if (ISDETECTED){
                THREEFACEOBJ3D.visible = true;

                
                // CVD.ctx.clearRect(0,0,CVD.canvas.width, CVD.canvas.height);
                
                var pd_width, pd_height;
                [pd_width, pd_height] = pupil.detect(CVD);
                var W=detectState.s; 
                ratio.display_data(pd_width, pd_height, W, CVD.canvas);
                
                // CVD.ctx.strokeStyle = 'yellow';
                // CVD.ctx.lineWidth = 3;
                // CVD.ctx.strokeRect(faceCoo.x, faceCoo.y, faceCoo.w, faceCoo.h);
                // CVD.update_canvasTexture();
                

                var rx = detectState.rx, ry = detectState.ry, rz = detectState.rz;
                
                if (typeof LEFTEARTEMPLE != "undefined" && typeof RIGHTEARTEMPLE != "undefined") {
                    LEFTEARTEMPLE.visible = false;
                    RIGHTEARTEMPLE.visible = false;
                    if(ry > -0.1){
                        RIGHTEARTEMPLE.visible = true;
                    }
                    if(ry < 0.1){
                        LEFTEARTEMPLE.visible = true;
                    }
                }
            }
            else{
                THREEFACEOBJ3D.visible = false;
            }
            
            CVD.draw();
            JeelizThreeHelper.render(detectState, THREECAMERA);

        } //end callbackTrack()
    }); //end JEEFACEFILTERAPI.init call

    // JEEFACEFILTERAPI.set_stabilizationSettings({
    //     translationFactorRange: [0.001, 0.002],
    //     rotationFactorRange: [0.0002, 0.005],
    //     qualityFactorRange: [0.92, 0.98],
    //     alphaRange: [0.1, 1]
    // });

    JEEFACEFILTERAPI.set_stabilizationSettings({
        translationFactorRange: [0.001, 0.008],
        rotationFactorRange: [0.0002, 0.008],
        qualityFactorRange: [0.92, 0.98],
        alphaRange: [0.15, 1]
    });
}



var permission = function(domain){
    return true;

    var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
    var regex = /:\/\/(.[^/]+)/;
    url = url.match(regex)[1] ;
    console.log(domain, url);

    if(domain !== url){
        return false;
    }
    return true;
}
