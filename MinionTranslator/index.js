var synth = window.speechSynthesis; // For text to speech

var inputAreaController = document.querySelector(".inputArea");
var outputAreaController = document.querySelector(".outputArea");
var buttonController = document.querySelector(".translateButton");
var textToSpeechButtonController = document.querySelector("#T2S");

var defaultText = "";

outputAreaController.value = defaultText;

//function for text to speech
function speak(text){
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.0;
    utterance.rate = 1.2;
    synth.speak(utterance);
}

//sleep function, for the value to appear in outputAreaTextBox
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

//function that uses "sleep" function to delay

async function delay()
{
    await sleep(3000);
    if(outputAreaController.value == defaultText)
    {
        alert("The API limits the API calls to 5 per hour, which has exceeded, kindly try later.");
    }
}

function makeURL(text){
    var URL = "https://api.funtranslations.com/translate/minion.json?text="+text;
    return URL;
}

buttonController.addEventListener('click', function(event){
    var userInput = inputAreaController.value;    
    fetch(makeURL(userInput)).then(response => response.json()).then(data => outputAreaController.value = data.contents.translated);
    defaultText = outputAreaController.value;
    delay(); // separate function because await only works for async functions
});

textToSpeechButtonController.addEventListener('click', function(event){
    speak(outputAreaController.value);
});



