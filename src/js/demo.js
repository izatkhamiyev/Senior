// const JeelizThreeHelper = require("./helpers/EyetoolThreejsHelper");

if(typeof exports == "undefined"){
	exports = this;
}

let THREECAMERA;
var THREEFACEOBJ3D, THREEFACEOBJ3DPIVOTED, VACANTIMG;
var LEFTEARTEMPLE, RIGHTEARTEMPLE;
var ISDETECTED=false, ISLOADED=false;


var SETTINGS={
    rotationOffsetX: 0, //negative -> look upper. in radians
    cameraFOV: 40,      //in degrees, 3D camera FOV
    pivotOffsetYZ: [0, 0], //XYZ of the distance between the center of the cube and the pivot
    detectionThreshold: 0.5, //sensibility, between 0 and 1. Less -> more sensitive
    detectionHysteresis: 0.1,
    scale: 0.6 //scale of the 3D cube, real =  9.4, prev = 0.6 
};

// callback : launched if a face is detected or lost. TODO : add a cool particle effect WoW !
function detect_callback(faceIndex, isDetected) {
    if (isDetected) {
        console.log('INFO in detect_callback() : DETECTED');
    } else {
        console.log('INFO in detect_callback() : LOST');
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
    
    const threeStuffs = JeelizThreeHelper.init(spec, detect_callback);
    
    THREEFACEOBJ3D=new THREE.Object3D();
    THREEFACEOBJ3D.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED=new THREE.Object3D();
    THREEFACEOBJ3DPIVOTED.frustumCulled=false;
    THREEFACEOBJ3DPIVOTED.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
    THREEFACEOBJ3DPIVOTED.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
    THREEFACEOBJ3D.add(THREEFACEOBJ3DPIVOTED);
    threeStuffs.faceObject.add(THREEFACEOBJ3D);
    
    load_model(pathToModel)

    // const aspecRatio=spec.canvasElement.width / spec.canvasElement.height;

    THREECAMERA = JeelizThreeHelper.create_camera();
    // THREECAMERA=new THREE.PerspectiveCamera(20, aspecRatio, 0.1, 100);

    var ambLight = new THREE.AmbientLight(0xffffff);
    
    threeStuffs.scene.add(ambLight);
} // end init_threeScene()

function adaptSize(){
    let canvas = document.getElementById('jeeFaceFilterCanvas');
    let loader = document.getElementById('loader');
    let logo = document.getElementById('logo');
    
    var positionInfo = canvas.getBoundingClientRect();
    let width = positionInfo.width;
    let heigh = positionInfo.height;
    console.log(width, heigh);

    let top = positionInfo.top, left = positionInfo.left;
    if(loader != null){
        loader.style.display = "block";
        var ld_size = ((width * 20) / 100);

        loader.style.width = ld_size + "px";
        loader.style.height = ld_size + "px";
        loader.style.top = (top + ((heigh - ld_size) / 2)) + "px";
        loader.style.left =(left + ((width - ld_size) / 2)) + "px";
        
    }
    if(logo != null){
        logo.style.top = top + "px";
        logo.style.left = left + "px";
        logo.style.width = (width / 6) + "px" ;
        logo.style.height = "auto" ;
        logo.style.display = "block";
    }
}

//launched by body.onload() :
function main(pathToModel, domain){
    // var pathToModel
    if(!permission(domain)){
        return "Error";
    }
        
    JeelizResizer.size_canvas({
        canvasId: 'jeeFaceFilterCanvas',
        callback: function(isError, bestVideoSettings){
            init_faceFilter(bestVideoSettings, pathToModel);
            adaptSize();
        }
    })
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
        canvasId: 'jeeFaceFilterCanvas',
        NNCpath: './dist/', // root of NNC.json file
        maxFacesDetected: 1,
        videoSettings : videoSettings,
        callbackReady: function(errCode, spec){
          if (errCode){
            console.log('AN ERROR HAPPENS. ERR =', errCode);
            
            return;
          }
          init_threeScene(spec, pathToModel);
          pupil.initialize(spec);
        }, //end callbackReady()

        //called at each render iteration (drawing loop) :
        callbackTrack: function(detectState){
            if (ISDETECTED && detectState.detected<SETTINGS.detectionThreshold-SETTINGS.detectionHysteresis){
                //DETECTION LOST
                detect_callback(false);
                ISDETECTED=false;
                ratio.predicted = false;
            } else if (!ISDETECTED && detectState.detected>SETTINGS.detectionThreshold+SETTINGS.detectionHysteresis){
                //FACE DETECTED 
                detect_callback(true);
                ISDETECTED=true;
            }
            

            if (ISDETECTED){
                THREEFACEOBJ3D.visible = true;
                if(ratio.predicted == false){
                    var pd_width, pd_height;
                    [pd_width, pd_height] = pupil.detect();
                    var W=detectState.s; 
                    ratio.display_data(pd_width, pd_height, W, document.getElementById('jeeFaceFilterCanvas'));
                    console.log("Predicted PD = " + ratio.predicted_pd);
                    resizeGlassesFromPD(ratio.predicted_pd);
                }
                var rx = detectState.rx, ry = detectState.ry, rz = detectState.rz;
                //move and rotate the cube
                THREEFACEOBJ3D.rotation.set((rx+SETTINGS.rotationOffsetX)  / 10, ry / 10, rz / 10, "XYZ");
                
                //Hide the earpieces
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
            JeelizThreeHelper.render(detectState, THREECAMERA);
        } //end callbackTrack()
    }); //end JEEFACEFILTERAPI.init call

    JEEFACEFILTERAPI.set_stabilizationSettings({
        translationFactorRange: [0.0005, 0.002],
        rotationFactorRange: [0.01, 0.1],
        qualityFactorRange: [0.92, 0.98],
        alphaRange: [0.15, 1]
    });
}



var permission = function(domain){
    // var url = (window.location != window.parent.location)
    //         ? document.referrer
    //         : document.location.href;
    // var regex = /:\/\/(.[^/]+)/;
    // url = url.match(regex)[1] ;
    // console.log(domain, url);

    // if(domain !== url){
    //     return false;
    // }
    return true;
}
