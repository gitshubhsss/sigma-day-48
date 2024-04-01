function saveMyName(name, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 5) {
    success();
  } else {
    failure();
  }
}
saveMyName(
  "shubham",
  () => {
    console.log("success : your name has stored succesfully in the database");
    saveMyName(
      "pavan",
      () => {
        console.log("success 2 : your name has stored successfully in the database");
        saveMyName(
            "ashish",
            () => {
              console.log(
                "success 3: you name has stored successfully in the database"
              );
            },
            () => {
              console.log("failure 3: weak connection ");
            }
          );
      },
      () => {
        console.log("failure 2 weak connection");
      }
    );
  },
  () => {
    console.log("failure : poor internet connection cant save the name");
  }
);
