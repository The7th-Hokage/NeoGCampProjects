var synth = window.speechSynthesis; // For text to speech

var inputAreaController = document.querySelector(".inputArea");
var outputAreaController = document.querySelector(".outputArea");
var buttonController = document.querySelector(".translateButton");
var textToSpeechButtonController = document.querySelector("#T2S");

//function for text to speech
function speak(text){
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.0;
    utterance.rate = 1.2;
    synth.speak(utterance);
}

function makeURL(text){
    var URL = "https://api.funtranslations.com/translate/minion.json?text="+text;
    return URL;
}

buttonController.addEventListener('click', function(event){
    var userInput = inputAreaController.value;
    fetch(makeURL(userInput)).then(response => response.json()).then(data => outputAreaController.value = data.contents.translated);
});

textToSpeechButtonController.addEventListener('click', function(event){
    speak(outputAreaController.value);
});



