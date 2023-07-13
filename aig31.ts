// Question 32

let current_users: string[] = ['john', 'emma', 'david', 'sarah', 'michael'];
let new_users: string[] = ['emma', 'alex', 'sophia', 'daniel', 'michael'];

for (let new_username of new_users) {
  let lowercase_new_username = new_username.toLowerCase();
  
  if (current_users.some(username => username.toLowerCase() === lowercase_new_username)) {
    console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_username}' is available.`);
  }
}
