function getParams(){

    // Get the query string from the URL, only expected to have one parameter
    var param = new URLSearchParams(window.location.search);
    return param.get("value");
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the parameter from the URL
    var param = getParams();

    // If the parameter exists, set it as the model-viewer src
    if (param) {
        var modelViewer = document.querySelector('model-viewer');
        modelViewer.src = "https://soyuzcode.github.io/models/" + "model_" + param + ".glb";
        console.log("Cargo model loaded: " + modelViewer.src);
    } else {
        console.error("No model URL provided in the query string.");
    }
});