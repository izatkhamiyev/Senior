// Reposition and Resize UI elements
function adaptSize(){
    let canvas = document.getElementById('jeeFaceFilterCanvas');
    let loader = document.getElementById('loader');
    
    let width = canvas.offsetWidth;
    let heigh = canvas.offsetHeight;
    let top = canvas.offsetTop, left = canvas.offsetLeft;
    if(loader != null){
        loader.style.display = "block";
        let ld_width = loader.offsetWidth;
        let ld_height = loader.offsetHeight;
        loader.style.top = (top + ((heigh - ld_height) / 2)) + "px";
        loader.style.left =(left + ((width - ld_width) / 2)) + "px";
        
    }

    var h =  Math.min(100, window.innerHeight - (heigh + top));
    var eyetool_check_block = document.getElementById('eyetoolCheckBlock');
    if(eyetool_check_block != null){
        eyetool_check_block.style.top = heigh + top + "px";
        console.log(h);
        eyetool_check_block.style.height = h + 'px';
        eyetool_check_block.style.width = width + "px";
        eyetool_check_block.style.left = left + "px";
    }
}

function resizeGlasses(){

    // Get Value
    var sz_input = document.getElementById('size-input');
    var sz_value = parseFloat(sz_input.value);
    
    // Resize Glasses
    THREEFACEOBJ3DPIVOTED.scale.set(sz_value / 100, sz_value / 100, sz_value / 100);
}

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}