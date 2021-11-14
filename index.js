let spacingRange = document.querySelector("#spacing")
let blurRange = document.querySelector("#blur")
let colorPick = document.querySelector("#base")
let root = document.documentElement;

root.style.setProperty('--spacing', spacingRange.value + "px");
spacingRange.addEventListener("change", function() {
    root.style.setProperty('--spacing', spacingRange.value + "px");
})

root.style.setProperty('--blur', blurRange.value + "px");
blurRange.addEventListener("change", function() {
    root.style.setProperty('--blur', blurRange.value + "px");
})

root.style.setProperty('--bgClr', colorPick.value);
colorPick.addEventListener("change", function() {
    root.style.setProperty('--bgClr', colorPick.value);
})

