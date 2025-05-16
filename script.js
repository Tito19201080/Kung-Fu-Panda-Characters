// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("themebtn").addEventListener("click", themeBtn);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();
  // If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML =
      "I am Tigress, Tigress the monster! A monster no one wants.";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML =
      "It's not the size of an insect in the fight, but the size of the fight in the insect.";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML =
      "We cannot give up hope. Po would want us to remain strong, hardcore. Right, Tigress?";
    charImgEl.src = "img/monkey.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "I don't want to be more; I like who I am.";
    charImgEl.src = "img/crane.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I dont need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "master oogway" || name === "oogway") {
    charNameEl.innerHTML = "Master Oogway";
    charQuoteEl.innerHTML =
      "If you only do what you can do, you will never be more than what you are.";
    charImgEl.src = "img/oogway.png";
  } else if (
    name === "wolf boss" ||
    name === "wolf" ||
    name === "wolf leader" ||
    name === "boss wolf"
  ) {
    charNameEl.innerHTML = "Wolf Boss";
    charQuoteEl.innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "-------";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "It took me 500 years to take Oogway's chi. I will have yours if it takes me 500 more!";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "My father's throne. He used to let me play here at his side, promising one day this throne would be mine...";
    charImgEl.src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "I have always been proud of you. From the first moment I've been proud of you. And it was my pride that blinded me. I loved you too much to see what you were becoming, what I was turning you into. I'm... I'm sorry.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "soothsayer" || name === "goat") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox" || name === "master ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Whatever I did, I did to make you proud! Tell me how proud you are, Shifu! Tell me! TELL ME!!";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "??????";
    charQuoteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}

function themeBtn() {
  let themeName = document.getElementById("theme-in").value.toLowerCase();
  if (themeName === "dark" || themeName === "black") {
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("h1").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("char-quote").style.color = "white";
  } else if (themeName === "light" || themeName === "white") {
    document.getElementById("body").style.background = "rgba(255,255,255, 0.7)";
    document.getElementById("h1").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("char-quote").style.color = "black";
  } else if (themeName === "random") {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var rgbString = `rgb(${r},${g},${b})`;
    document.getElementById("body").style.background = rgbString;
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    var rgbStringTxt = `rgb(${red},${green},${blue})`;
    document.getElementById("h1").style.color = rgbStringTxt;
    document.getElementById("char-name").style.color = rgbStringTxt;
    document.getElementById("char-quote").style.color = rgbStringTxt;
  }
}
