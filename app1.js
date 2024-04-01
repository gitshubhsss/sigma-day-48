function x(y){
    console.log("in funtion x");
    y();
}

x(function y() {
    console.log("in funtion y");
})