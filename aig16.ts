// Question 17
let guestList: string[] = [
    "Osama",
    "Akbar",
    "Ahmed",
    "Zaryab",
    "Humail",
    "Annas"
  ];
  
  console.log("Attention: Due to unforeseen circumstances, the dinner table won't arrive in time. We can only invite two people for dinner.");
  
  while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`);
  }
  
  for (let person of guestList) {
    console.log(`Dear ${person}, you're still invited to dinner. We look forward to having your company.`);
  }
  
  guestList = [];
  
  console.log("Guest list is now empty:", guestList);
  