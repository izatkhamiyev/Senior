var NAME_INPUT_ID = "#inputModelName", BUTTON_ID = "#uploadBtn", UPLOAD_FORM = "#uploadForm", FILE_INPUT = "#formFile";
var API_KEY = "None", MODAL = "#mainModal", MODAL_TITLE = "#modalTitle", MODAL_BODY = "#modalBody";
var MODEL_LIST = null;

function showModal(title, text, is_error){
    $(MODAL).modal('show');
    $(MODAL_TITLE).html(title);
    if(is_error){
        $(MODAL_TITLE).css('color', 'red');
    }else{
        $(MODAL_TITLE).css('color', 'green');
    }
    $(MODAL_BODY).html(text);
}

function post(model_name){
    var formData = new FormData();
    // formData.append('name', model_name);
    var file = $(FILE_INPUT)[0].files[0];
    if(file === undefined){
        showModal("Error", "You did not choose a file !", true);
        return;
    }
    var blob = file.slice(0, file.size); 
    newFile = new File([blob], model_name + ".glb");
    formData.append('file', newFile);
    console.log(formData.get('file'));
    $.ajax({
            url : `/upload?api_key=${API_KEY}`,
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                showModal("Uploaded", "The model was successfully uploaded. You can check it in the model list", false);
                $(FILE_INPUT).val('');
                $(NAME_INPUT_ID).val('');
                getModels();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                showModal("Error", xhr.responseJSON.message, true);
            }
    });
}

function upload(){
    console.log("clicked");
    if(MODEL_LIST == null){
        return;
    }
    var model_name = $(NAME_INPUT_ID).val();
    if(MODEL_LIST.includes(model_name)){
        console.log("Exists");
        var r = confirm("This model already exists. You are trying to overwrite the file.\nAre You Sure ?");
        if(r){
            console.log("Overwrite");
            post(model_name);
        }else{
            console.log("Cancelled");
        }
    }else{
        post(model_name);
    }

    
}

function getModels(){
    
    $.get( `/upload/models?api_key=${API_KEY}`,
        function( data ) {
            console.log( typeof data );
            data = data.map(element => {
                return element.split(".")[0];
            });
            console.log( data );
            MODEL_LIST = data;
            $('#listOfModels').empty();
            data.forEach(element => {
                var thelink = $('<a>',{
                    text: element,
                    href: `/?api_key=${API_KEY}&model=${element}`,
                    target: "_blank"
                }).appendTo('#listOfModels');
            });
        });

}

$(document).ready(function() {
    var params = (new URL(document.location)).searchParams;
    API_KEY = params.get("api_key");
    $(BUTTON_ID).click(upload); 
    $("#listOfModels").load(getModels());
});