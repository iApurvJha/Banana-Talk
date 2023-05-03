var textarea = document.querySelector("#textarea")
var translate = document.querySelector("#btn-translate")
var output = document.querySelector("#output")

function UrlGen() {

    return "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + textarea.value

}

function errorHandler(error) {
    console.log("error", error)
    alert("some error occured try again after some time")
}

translate.addEventListener("click", function Eventhandler() {
    var url = UrlGen()
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            output.innerText = translatedtext
        })
        .catch(errorHandler)

})