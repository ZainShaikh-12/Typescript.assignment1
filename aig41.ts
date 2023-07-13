// Question 42

const show_magicians = (magicians: string[]): void => {
    for (let magician of magicians) {
      console.log(magician);
    }
  };
  
  const make_great = (magicians: string[]): void => {
    for (let magicianIndex in magicians) {
      magicians[magicianIndex] = `${magicians[magicianIndex]} the Great`;
    }
  };
  
  // Creating an array of magician names
  const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller"];
  
  // Calling show_magicians() to print the original list of magicians
  console.log("Original List:");
  show_magicians(magicians);
  
  // Modifying the array of magicians using make_great()
  make_great(magicians);
  
  // Calling show_magicians() again to see the modified list of magicians
  console.log("Modified List:");
  show_magicians(magicians);
  