//to overcome the problem of callback hell we use promices

function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}
saveToDb(
  "shubham",
  () => {
    console.log("success : data saved successfully");
  },
  () => {
    console.log("failure : poor internet connection please try again");
  }
);
