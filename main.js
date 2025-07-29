function getParams() {

    // Get the query string from the URL, only expected to have one parameter
    var param = new URLSearchParams(window.location.search);
    return param.get("value");
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the parameter from the URL
    var param = getParams();

    // If the parameter exists, set it as the model-viewer src
    if (param) {
        var modelViewer = document.getElementById("content");
        modelViewer.innerHTML = `<div class="sketchfab-embed-wrapper"> <iframe title="Cartoon Race Track Barcelona" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/eac5143c95a3482aab24a7e0ade79417/embed?autostart=1&dnt=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/cartoon-race-track-barcelona-eac5143c95a3482aab24a7e0ade79417?utm_medium=embed&utm_campaign=share-popup&utm_content=eac5143c95a3482aab24a7e0ade79417" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Cartoon Race Track Barcelona </a> by <a href="https://sketchfab.com/rccdesign?utm_medium=embed&utm_campaign=share-popup&utm_content=eac5143c95a3482aab24a7e0ade79417" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> RCC Design </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=eac5143c95a3482aab24a7e0ade79417" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`;
        console.log("Cargo model loaded: " + param);
    } else {
        console.error("No model URL provided in the query string.");
    }
});