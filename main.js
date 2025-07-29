function getParams() {

    // Get the query string from the URL, only expected to have one parameter
    var param = new URLSearchParams(window.location.search);
    return param.get("value");
}

async function requestUrl(URL) {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return null;
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    // Get the parameter from the URL
    var param = getParams();

    // If the parameter exists, set it as the model-viewer src
    if (param) {

        const request = await requestUrl("https://soyuzcode.github.io/f1_race_models/embed_" + param + ".html")

        if (!request) {
            console.error("Failed to load the model from the URL.");
            return;
        }

        const modelViewer = document.getElementById("content");
        console.log("Loading cargo model with URL: " + request);
        modelViewer.innerHTML = request;
        console.log("Cargo model loaded: " + param);
    } else {
        console.error("No model URL provided in the query string.");
    }
});