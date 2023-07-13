// Question 43

const show_magicians = (magicians: string[]): void => {
    for (let magician of magicians) {
      console.log(magician);
    }
  };
  
  const make_great = (magicians: string[]): string[] => {
    let modifiedMagicians: string[] = [];
  
    for (let magician of magicians) {
      modifiedMagicians.push(`${magician} the Great`);
    }
  
    return modifiedMagicians;
  };
  
  // Creating an array of magician names
  const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller"];
  
  // Calling make_great() with a copy of the magicians array
  const modifiedMagicians: string[] = make_great([...magicians]);
  
  // Calling show_magicians() with the original and modified arrays
  console.log("Original List:");
  show_magicians(magicians);
  
  console.log("Modified List:");
  show_magicians(modifiedMagicians);
  