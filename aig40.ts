// Question 41

const show_magicians = (magicians: string[]): void => {
    for (let magician of magicians) {
      console.log(magician);
    }
  };
  
  // Array of magician's names
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Call the show_magicians function with the magicians array
  show_magicians(magicians);
  