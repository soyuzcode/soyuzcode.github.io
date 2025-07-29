function getParams() {

    // Get the query string from the URL, only expected to have one parameter
    var param = new URLSearchParams(window.location.search);
    return param.get("value");
}

function requestUrl(URL){
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL
    xhr.open('GET', URL, true);

    // Send the request over the network
    xhr.send();

    // This will be called after the response is received
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP response status
            console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            console.log(xhr.responseText); // response is the server
            return xhr.responseText; // return the response text
        }
    };
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the parameter from the URL
    var param = getParams();

    // If the parameter exists, set it as the model-viewer src
    if (param) {
        var modelViewer = document.getElementById("content");
        modelViewer.innerHTML = requestUrl("https://soyuzcode.github.io/f1_race_models/" + "embed_" + param + ".html");
        console.log("Cargo model loaded: " + param);
    } else {
        console.error("No model URL provided in the query string.");
    }
});