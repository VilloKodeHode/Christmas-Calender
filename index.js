//? Hvordan få tak i alle lukene uten å lage checkbox1-24? Hvis det kan gjøres enkelt, hvordan kan jeg da gi hver enkelt en individuell effekt?

const checkBox1 = document.getElementById("inputBox1");
const checkBox2 = document.getElementById("inputBox2");
const image = document.getElementsByTagName("img");
const body = document.getElementById("body");

const jingleSound = new Audio("./sound/jingle-bells.wav");

imageArray = [];

imageArray.push(image);

console.log(image);

// console.log(button);
// console.log(button2);
//! kanskje må html flyttes til html.index?

checkBox1.addEventListener("click", () => {
  if (image[0].style.display === "inline") {
    image[0].style.display = "none";
  } else {
    image[0].style.display = "inline";
  }
  console.log(image[0].style.display);
});
// button2.addEventListener("click", console.log("click2"));
//*
checkBox2.addEventListener("click", () => {
  if (checkBox2.checked) {
    image[1].style.transition = "2s ease";
    setTimeout(() => {
      jingleSound.play();
      image[1].style.transform =
        "translateY(-500px) translateX(1000px) rotate(40deg)";
    }, 500);
    setTimeout(() => {
      image[1].style.transform = "translateX(-800px) rotate(-90deg)";
    }, 2000);
    setTimeout(() => {
      image[1].style.transform = "translateY(600px) rotate(120deg)";
    }, 3500);
    setTimeout(() => {
      image[1].style.transform = "translateX(700px)";
    }, 5000);
    setTimeout(() => {
      image[1].style.transform = "translateX(500px) translateY(700px)";
    }, 6500);
    setTimeout(() => {
      image[1].style.transform =
        "translateX(-2000px) translateY(-300px) rotate(500deg)";
    }, 8000);
    setTimeout(() => {
      image[1].style.transform =
        "translateX(0) translateY(0px) rotate(-10800deg)";
      //? rotasjonen fungerer ikke som jeg vil når jingleSound.pause eller .currentTime er med...Hvorfor?
      //! Fungerer plutselig allikevel. NVM! Men sjekk om det allikevel kan skje av og til...
    }, 10000);
    setTimeout(() => {
      jingleSound.pause();
      jingleSound.currentTime = 0;
    }, 12000);
  }
  console.log(image[1].style.display);
  console.log(checkBox2.checked);
});

// <div class="luke jul">
//   <label>
//     <input type="checkbox" />
//     <div class="cover"><p>God Jul<br>alle sammen!</p></div>
//     <div class="inside">
//     <img
//   src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/merry-christmas-wishes-greeting-video-cats-ad-design-template-14114ed0a30602feca713c7187ab2158_screen.jpg?ts=1574593470"
// />
//     </div>

// const inputName = document.getElementById("inputName");
// const nameButton = document.getElementById("nameButton");
// const greet = document.getElementById("greet");

// nameButton.addEventListener("click", greeting);

// function greeting() {
//   greet.textContent = `Hello there ${inputName.value}!`;
// }

// Function to reset image dimensions
// function resetImg() {
//   content2.style.width = "40%";
//   content2.style.height = "auto";
//   content2.style.transition = "width 0.5s ease";
// }
