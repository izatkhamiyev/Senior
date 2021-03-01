pupil = {};

pupil.do_puploc = function(r, c, s, nperturbs, pixels, nrows, ncols, ldim) {return [-1.0, -1.0];};
pupil.facefinder_classify_region = function(r, c, s, pixels, ldim) {return -1.0;};
pupil.update_memory = null;

pupil.initialized = false;
pupil.fb = null;
pupil.gl = null;
pupil.canRead = false;
pupil.width = 0;
pupil.height = 0;

function rgba_to_grayscale(rgba, nrows, ncols) {
    var gray = new Uint8Array(nrows*ncols);
    for(var r=0; r<nrows; ++r)
        for(var c=0; c<ncols; ++c)
            gray[r*ncols + c] = (2*rgba[r*4*ncols+4*c+0]+7*rgba[r*4*ncols+4*c+1]+1*rgba[r*4*ncols+4*c+2])/10;
    return gray;
}

pupil.initialize = function(spec){
    // make a framebuffer
    var gl = spec.GL;
    fb = gl.createFramebuffer();
    // make this the current frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    // attach the texture to the framebuffer.
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D, spec.videoTexture, 0);
    // check if you can read from this type of texture.
    pupil.canRead = (gl.checkFramebufferStatus(gl.FRAMEBUFFER) == gl.FRAMEBUFFER_COMPLETE);
    pupil.fb = fb;
    pupil.width = gl.drawingBufferWidth;
    pupil.height = gl.drawingBufferHeight;
    // Unbind the framebuffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // get width, height
    pupil.gl = gl;

    var puplocurl = 'https://drone.nenadmarkus.com/data/blog-stuff/puploc.bin'
    fetch(puplocurl).then(function(response) {
        response.arrayBuffer().then(function(buffer) {
            var bytes = new Int8Array(buffer);
            pupil.do_puploc = lploc.unpack_localizer(bytes);
            console.log('puploc loaded');
        });
    });

    pupil.update_memory = pico.instantiate_detection_memory(5); // we will use the detecions of the last 5 frames
    
    var cascadeurl = 'https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder';
    fetch(cascadeurl).then(function(response) {
        response.arrayBuffer().then(function(buffer) {
            var bytes = new Int8Array(buffer);
            pupil.facefinder_classify_region = pico.unpack_cascade(bytes);
            console.log('* facefinder loaded');
        });
    });
};

pupil.detect = function(){

    var width = pupil.width;
    var height = pupil.height;
    
    var rgba = new Uint8Array(width * height * 4);
    var gl = pupil.gl;
    if (pupil.canRead) {
        // bind the framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, pupil.fb);
        
        // read the pixels
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, rgba);
     
        // Unbind the framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    image = {
        "pixels": rgba_to_grayscale(rgba, height, width),
        "nrows": height,
        "ncols": width,
        "ldim": width
    };

    params = {
        "shiftfactor": 0.1, // move the detection window by 10% of its size
        "minsize": 100,     // minimum size of a face
        "maxsize": 1000,    // maximum size of a face
        "scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
    };

    dets = pico.run_cascade(image, pupil.facefinder_classify_region, params);
    dets = pupil.update_memory(dets);
    dets = pico.cluster_detections(dets, 0.2); 

    eyes = {
        "width":width,
        "height":height,
    };

    for(i=0; i<dets.length; ++i){
        if(dets[i][3]>50.0){
            var r, c, s;
            // var ctx = CVD.ctx;
            // first eye
            r = dets[i][0] - 0.075*dets[i][2];
            c = dets[i][1] - 0.175*dets[i][2];
            s = 0.35*dets[i][2];
            [r, c] = pupil.do_puploc(r, c, s, 63, image);
            eyes.x1 = c;
            eyes.y1 = r;
            // if(r>=0 && c>=0)
            // {
            //     ctx.beginPath();
            //     ctx.arc(c, r, 1, 0, 2*Math.PI, false);
            //     ctx.lineWidth = 3;
            //     ctx.strokeStyle = 'red';
            //     ctx.stroke();
            // }
            // second eye
            r = dets[i][0] - 0.075*dets[i][2];
            c = dets[i][1] + 0.175*dets[i][2];
            s = 0.35*dets[i][2];
            [r, c] = pupil.do_puploc(r, c, s, 63, image);
            eyes.x2 = c;
            eyes.y2 = r;
            // if(r>=0 && c>=0)
            // {
            //     ctx.beginPath();
            //     ctx.arc(c, r, 1, 0, 2*Math.PI, false);
            //     ctx.lineWidth = 3;
            //     ctx.strokeStyle = 'red';
            //     ctx.stroke();
            // }
            break;
        }
    }

    return [Math.abs(eyes.x2 - eyes.x1) / width, Math.abs(eyes.y2 - eyes.y1) / height];
};