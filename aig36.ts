// Question 37

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it will have the message "${message}" printed on it.`);
  }
  
  // Make a large shirt with the default message
  make_shirt();
  
  // Make a medium shirt with the default message
  make_shirt("medium");
  
  // Make a small shirt with a custom message
  make_shirt("small", "Hello World!");
  