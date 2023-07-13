// Question 3 (convert in to uppercase, lowercase, titlecase)
let names: string = "ShaiKh SahAaB"

 const toTitleCase = (str: string): string => {
    return str.toLowerCase().replace(/\b\w+/g, (match: string) => {
      return match.charAt(0).toUpperCase() + match.slice(1);
    });
  };

  let setword: string = toTitleCase(names)

console.log(names.toLowerCase())
console.log(names.toUpperCase())
console.log(setword)

export{}