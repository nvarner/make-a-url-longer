document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.querySelector("#url");
    const resultOutput = document.querySelector("#long-url");

    document.querySelector("#submit").addEventListener("click", (e) => {
        e.preventDefault();
        resultOutput.value = lengthen(urlInput.value);
    });
});

function lengthen(shortUrl) {
    let result = "http://make-a-url-longer.nathanvarner.com/redirect-to-new-url/index.html?long-url=";
    result += "First%20there%20was%20nothing";
    for (let i = 0; i < shortUrl.length; i++) {
        let char = shortUrl.charAt(i);
        result += "%20and%20then%20a%20new%20character%20came%20along%20" + char;
    }
    return result;
}
