// Question 15

let guestList: string[] = ["Ahmed", "Akbar", "Osama"];


let guestNotAvailable: string = "Osama";
guestList = guestList.filter((guest) => guest !== guestNotAvailable);

let newGuest: string = "Humail";
guestList.push(newGuest);

for (let person of guestList) {
  console.log(`Dear ${person}, you are cordially invited to dinner. We would be honored to have your presence.`);
}