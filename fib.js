function runProgram(input) {
    var input=input.trim().split("\n");
    var n = +input[0].trim();

    console.log(fibonacciBottomsUp(n));
    function fibonacciBottomsUp(n)
{
    var dp=[];
    // Base Case
    dp[0] = 0
    dp[1] = 1
    for(let i = 2 ; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-4]+dp[i-3];
    }

    return dp[n];

}   
  }
  if (process.env.USERNAME === "NITIN GUPTA") {
    runProgram(`6`);
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