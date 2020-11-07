// Reposition and Resize UI elements
function adaptSize(){
    let canvas = document.getElementById('jeeFaceFilterCanvas');
    let loader = document.getElementById('loader');
    let logo = document.getElementById('logo');
    
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
    if(logo != null){
        logo.style.top = top + "px";
        logo.style.left = left + "px";
        logo.style.width = (width / 6) + "px" ;
        logo.style.height = "auto" ;
        logo.style.display = "block";
    }

    // Change the position of distance input form
    // var size_form = document.getElementById("size-form");
    // if(size_form != null){
    //     var sf_width = size_form.offsetWidth;
    //     size_form.style.top = top + "px";
    //     size_form.style.left = ((left + width) - sf_width) + "px";
    // }

    var h =  Math.min(100, window.innerHeight - (heigh + top));
    var eyetool_check_block = document.getElementById('eyetoolCheckBlock');
    if(eyetool_check_block != null){
        eyetool_check_block.style.top = heigh + top + "px";
        console.log(h);
        eyetool_check_block.style.height = h + 'px';
        eyetool_check_block.style.width = width + "px";
        eyetool_check_block.style.left = left + "px";
    }
    // var eyetool_icon_blocks = document.getElementsByClassName('eyetoolCheckInnerIcon')
    // for(let i = 0; i < eyetool_icon_blocks.length; i++){
    //     eyetool_icon_blocks[i].style.fontSize =  h*0.3  + 'px';
    // }
    // var eyetool_text_block = document.getElementById('eyetoolCheckInnerText');
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