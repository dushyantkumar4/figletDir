const figlet=require("figlet");

figlet("1 2 3 4 5 .", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });