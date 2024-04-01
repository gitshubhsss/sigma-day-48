let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

changeColor("red", 1000).then(()=>{
   return changeColor("green",1000)
})
.then(()=>{
   return changeColor("orange",1000)
})
.then(()=>{
   console.log("this is green color");
})
.catch(()=>{
   console.log("eroor");
})