var guideButton = document.getElementById("guide-button");
var closeGuideButton = document.getElementById("close-guide-button");
closeGuideButton.hidden = true;

guideButton.onclick = ev => {
    document.getElementById("guide-desc").classList.remove("off-screen");
    closeGuideButton.hidden = false;
    guideButton.hidden = true;
}
closeGuideButton.onclick = ev => {
    document.getElementById("guide-desc").classList.add("off-screen");
    closeGuideButton.hidden = true; 
    guideButton.hidden = false;
}