function runProgram(input) {
    var input=input.trim().split("\n");
    var n = +input[0].trim();
    console.log(fb(n));
    function fb(n){
        if(n === 1){
            return n;
        }if(n <=0){
            return 0;
        }
        else  return fb(n-1)+fb(n-3)+fb(n-4);
    }
        
  }
  if (process.env.USERNAME === "NITIN GUPTA") {
    runProgram(`5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }