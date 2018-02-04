document.addEventListener("DOMContentLoaded", () => {
    const link = document.querySelector("#link");

    const longUrl = getQueryVariable("long-url");
    const shortUrl = shorten(longUrl);

    link.href = shortUrl;

    window.setTimeout(() => {
        window.location = shortUrl;
    }, 3500);
});

function shorten(longUrl) {
    let result = longUrl.split("%20and%20then%20a%20new%20character%20came%20along%20");
    result.shift(); // Remove the preamble/first item
    result = result.join(""); // Array -> string
    return result;
}

// From https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable)
{
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}