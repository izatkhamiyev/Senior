
if(typeof exports == "undefined"){
	exports = this;
}

var THREECAMERA;
var THREEFACEOBJ3D, THREEFACEOBJ3DPIVOTED, VACANTIMG;
var LEFTEARTEMPLE, RIGHTEARTEMPLE;
var ISDETECTED=false, ISLOADED=false;


var SETTINGS={
    rotationOffsetX: 0, //negative -> look upper. in radians
    cameraFOV: 40,      //in degrees, 3D camera FOV
    pivotOffsetYZ: [0, 0], //XYZ of the distance between the center of the cube and the pivot
    detectionThreshold: 0.5, //sensibility, between 0 and 1. Less -> more sensitive
    detectionHysteresis: 0.1,
    scale: 0.6 //scale of the 3D cube, real = 9.4 && previos = 0.6
};

// callback : launched if a face is detected or lost. TODO : add a cool particle effect WoW !
function detect_callback(faceIndex, isDetected) {
    if (isDetected) {
        // console.log('INFO in detect_callback() : DETECTED');
    } else {
        // console.log('INFO in detect_callback() : LOST');
    }
}

function load_model(pathToModel){
    
    let path = './assets/envmap/';
    var envMap = new THREE.CubeTextureLoader().load([
        path + 'posx.jpg', path + 'negx.jpg',
        path + 'posy.jpg', path + 'negy.jpg',
        path + 'posz.jpg', path + 'negz.jpg'
    ]);
    var loader = new THREE.GLTFLoader()
    loader.load(
        pathToModel.concat('.glb'),
        function(gltf){
            let i = 0;
            for(i = 0; i < gltf.scene.children.length; i++){
                var firstLetter = gltf.scene.children[i].name.charAt(0);
                
                if (firstLetter == 'l'){
                    LEFTEARTEMPLE = gltf.scene.children[i];
                }
                else if(firstLetter == 'r'){
                    RIGHTEARTEMPLE = gltf.scene.children[i];
                }
                gltf.scene.children[i].traverse( function ( child ) {

                    if ( child instanceof THREE.Mesh ) {
                        child.material.envMap = envMap;
                        // add any other properties you want here. check the docs.
                    }
          
                } );
            }
            THREEFACEOBJ3D.children = []
            THREEFACEOBJ3DPIVOTED=new THREE.Object3D();
            THREEFACEOBJ3DPIVOTED.frustumCulled=false;
            THREEFACEOBJ3DPIVOTED.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
            THREEFACEOBJ3DPIVOTED.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
            THREEFACEOBJ3D.add(THREEFACEOBJ3DPIVOTED);
            
            THREEFACEOBJ3DPIVOTED.add( gltf.scene );

            
            if(document.getElementById('loader')) 
                document.getElementById('loader').remove();
        }
    )
    return loader;
}

// build the 3D. called once when Eyetool Face Filter is OK
function init_threeScene(spec, pathToModel) {
    
    const threeStuffs = THREE.EyetoolHelper.init(spec, detect_callback);
    
    THREEFACEOBJ3D=new THREE.Object3D();
    THREEFACEOBJ3D.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED=new THREE.Object3D();
    THREEFACEOBJ3DPIVOTED.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
    THREEFACEOBJ3DPIVOTED.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
    THREEFACEOBJ3D.add(THREEFACEOBJ3DPIVOTED);
    
    
    threeStuffs.faceObject.add(THREEFACEOBJ3D);
    
    var loader = load_model(pathToModel);
    
    //CREATE THE CAMERA
    const aspecRatio=spec.canvasElement.width / spec.canvasElement.height;
    THREECAMERA=new THREE.PerspectiveCamera(20, aspecRatio, 0.1, 100);

    // var light = new THREE.PointLight( 0xffffff, 0.05, 0 );
    // light.position.set( 0, 0, 0 )
    
    // threeStuffs.scene.add(light)

    var ambLight = new THREE.AmbientLight(0xffffff);
    
    threeStuffs.scene.add(ambLight);
} // end init_threeScene()

//launched by body.onload() :
function main(pathToModel, domain){
    // var pathToModel
    if(!permission(domain)){
        return "Error";
    }
        
    EyetoolResizer.size_canvas({
        canvasId: 'jeeFaceFilterCanvas',
        callback: function(isError, bestVideoSettings){
            init_faceFilter(bestVideoSettings, pathToModel);
            adaptSize();
        }
    });
} //end main()

function create_mat2d(threeTexture, isTransparent){ //MT216 : we put the creation of the video material in a func because we will also use it for the frame
    return new THREE.RawShaderMaterial({
        depthWrite: false,
        depthTest: false,
        transparent: isTransparent,
        vertexShader: "attribute vec2 position;\n\
            varying vec2 vUV;\n\
            void main(void){\n\
                gl_Position=vec4(position, 0., 1.);\n\
                vUV=0.5+0.5*position;\n\
            }",
        fragmentShader: "precision lowp float;\n\
            uniform sampler2D samplerVideo;\n\
            varying vec2 vUV;\n\
            void main(void){\n\
                gl_FragColor=texture2D(samplerVideo, vUV);\n\
            }",
         uniforms:{
            samplerVideo: { value: threeTexture }
         }
    });
}



function init_faceFilter(videoSettings, pathToModel){
    JEEFACEFILTERAPI.init({
        followZRot: true,
        canvasId: 'jeeFaceFilterCanvas',
        NNCpath: './dist/', // root of NNC.json file
        maxFacesDetected: 1,
        alpha: true,
        callbackReady: function(errCode, spec){
          if (errCode){
            console.log('AN ERROR HAPPENS. ERR =', errCode);
            
            return;
          }
          init_threeScene(spec, pathToModel);
        }, //end callbackReady()

        //called at each render iteration (drawing loop) :
        callbackTrack: function(detectState){
            if (ISDETECTED && detectState.detected<SETTINGS.detectionThreshold-SETTINGS.detectionHysteresis){
                //DETECTION LOST
                detect_callback(false);
                ISDETECTED=false;
            } else if (!ISDETECTED && detectState.detected>SETTINGS.detectionThreshold+SETTINGS.detectionHysteresis){
                //FACE DETECTED 
                detect_callback(true);
                ISDETECTED=true;
            }
            

            if (ISDETECTED){
                THREEFACEOBJ3D.visible = true;
                // VACANTIMG.visible = false;
                // var position = new THREE.Vector3();
                // position.getPositionFromMatrix( THREEFACEOBJ3D.matrixWorld );
                // console.log(position.x + ',' + position.y + ',' + position.z);
                //move the cube in order to fit the head
                var tanFOV=Math.tan(THREECAMERA.aspect*THREECAMERA.fov*Math.PI/360); //tan(FOV/2), in radians
                var W=detectState.s;  //relative width of the detection window (1-> whole width of the detection window)
                var D=1/(2*W*tanFOV); //distance between the front face of the cube and the camera
                
                //coords in 2D of the center of the detection window in the viewport :
                var xv=detectState.x;
                var yv=detectState.y;
                
                //coords in 3D of the center of the cube (in the view coordinates system)
                var z=-D;   // minus because view coordinate system Z goes backward. -0.5 because z is the coord of the center of the cube (not the front face)
                var x=xv*D*tanFOV;
                var y=yv*D*tanFOV/THREECAMERA.aspect;
                // console.log(x, y, z);
                var rx = detectState.rx, ry = detectState.ry, rz = detectState.rz;
                //move and rotate the cube
                // THREEFACEOBJ3D.position.set(x, y+SETTINGS.pivotOffsetYZ[0],z+SETTINGS.pivotOffsetYZ[1]);
                THREEFACEOBJ3D.rotation.set((rx+SETTINGS.rotationOffsetX)  / 10, ry / 10, rz / 10, "XYZ");
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
                // VACANTIMG.visible = true;
            }
            
            
            THREE.EyetoolHelper.render(detectState, THREECAMERA);
        } //end callbackTrack()
    }); //end JEEFACEFILTERAPI.init call
    // JEEFACEFILTERAPI.set_stabilizationSettings({
    //     translationFactorRange: [0.001, 0.002],
    //     rotationFactorRange: [0.0002, 0.005],
    //     qualityFactorRange: [0.92, 0.98],
    //     alphaRange: [0.1, 1]
    // });

    JEEFACEFILTERAPI.set_stabilizationSettings({
        translationFactorRange: [0.001, 0.003],
        rotationFactorRange: [0.02, 0.2],
        qualityFactorRange: [0.92, 0.98],
        alphaRange: [0.15, 1]
    });
}



var permission = function(domain){
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
