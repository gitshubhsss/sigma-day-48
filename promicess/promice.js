function saveTodb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10);
    if (internetSpeed > 4) {
      resolve("data saved successfullly");
    } else {
      reject("unable to save the data");
    }
  });
}
saveTodb("shubham")
  .then((result) => {
    console.log("data 1 saved");
    console.log(`result of promice ${result}`);
    return saveTodb("shreya")
  })
  .then((result)=>{
    console.log("data 2 saved");
    console.log(`result of promice ${result}`);
  })
  .catch((error) => {
   
    console.log("promice was reject");
    console.log(`result of promice ${error}`);
  });
