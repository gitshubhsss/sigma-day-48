let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color="green";
// }, 2000);

// setTimeout(() => {
//     h1.style.color="purple";
// }, 3000);

//if we wants to add multimple colors for h1 so this might be the tough task for us to write a funtions for each color

function changeColor(color, timeout, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, timeout);
}

changeColor("green", 1000, () => {
  changeColor("red", 1000,()=>{
    changeColor("purple",1000);
  });
});
