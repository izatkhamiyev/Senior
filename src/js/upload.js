var NAME_INPUT_ID = "#inputModelName", FILE_INPUT_ID = "#formFile", UPDATE_CHECK_ID = "#checkUpdate", BUTTON_ID = "#uploadBtn";
var API_KEY = "None";

function upload(){
    console.log("clicked");
    $(BUTTON_ID).prop('disabled', true);
}

function getModels(){
    $.get( `/upload/models?api_key=${API_KEY}`,
        function( data ) {
            console.log( typeof data );
            data = data.map(element => {
                return element.split(".")[0];
            });
            console.log( data );

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