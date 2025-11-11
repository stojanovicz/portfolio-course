window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script2 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script3 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script4 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script5 = function()
{
  // A/B image & video comparison slider script for Articulate Storyline 360
// Author: PJ Palomaki
// Liscence: MIT
// Version: 1.0

// Define slider variable and layer accessability text value
var mySliderVar = 'slider_4'; 		// Change this to the variable that the slider effects
var elementAccText = 'back';   // Change this to the accessibility text value of the layer being cropped (image, video, etc)

// Get Storyline player
storyline = GetPlayer();

// Get Slider element
mySliderValue = storyline.GetVar(mySliderVar);

// Get Storyline crop layer element
var cropElementString = "[data-acc-text='" + elementAccText + "']";
var cropElement = document.querySelector(cropElementString);
var cropElementChild = cropElement.children[0];

// Get element original size
var originalSize;
  // Get width
  originalSize = parseFloat(cropElement.style.width);

// Set size style
cropElementChild.style.overflow = "hidden";
  // Set width
  if (mySliderValue < 0.5) 
  cropElementChild.style.width = originalSize * mySliderValue + 5 + 'px';
  else 
  cropElementChild.style.width = originalSize * mySliderValue - 5 + 'px';

}

window.Script6 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script7 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script8 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script9 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script10 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script11 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script12 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script13 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script14 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script15 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script16 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script17 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script18 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script19 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script20 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script21 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script22 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script23 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script24 = function()
{
  const player = GetPlayer();

let mcq = 'mcqText';

if (mcq = "") {
mcq = mcq + "Good communicator, " 
}
else {
mcq = mcq + ", good communicator"
}
}

window.Script25 = function()
{
  const player = GetPlayer();

let mcq = 'mcqText';

if (mcq = "") {
mcq = mcq + "Respect the deadlines, " 
}
else {
mcq = mcq + ", respect the deadlines"
}
}

window.Script26 = function()
{
  const player = GetPlayer();

let mcq = 'mcqText';

if (mcq = "") {
mcq = mcq + "Bring the new ideas, " 
}
else {
mcq = mcq + ", bring the new ideas"
}
}

window.Script27 = function()
{
  const player = GetPlayer();

let mcq = 'mcqText';

if (mcq = "") {
mcq = mcq + "Being skilled with the working tools, " 
}
else {
mcq = mcq + ", being skilled with the working tools"
}
}

window.Script28 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script29 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script30 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script31 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script32 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script33 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

};
