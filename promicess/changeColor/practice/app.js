// function saveToDb(data, success, failure) {
//   //here success and failures are the call back funtions
//   let internetSpeed = Math.floor(Math.random() * 10);
//   if (internetSpeed > 5) {
//     success();
//   } else {
//     failure();
//   }
// }
// saveToDb(
//   "shubham",
//   () => {
//     console.log("success : data1 saved");
//     saveToDb(
//       "pavan",
//       () => {
//         console.log("succss : data2 saved");
//       },
//       () => {
//         console.log("error 2");
//       }
//     );
//   },
//   () => {
//     console.log("failure : error1");
//   }
// );

//to solve this problems will use promices
function saveToDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10);
        if (internetSpeed > 5) {
          resolve();
        } else {
          reject();
        }
    })
 }

 saveToDb("pavan")