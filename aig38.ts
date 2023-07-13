// Question 39

const city_country = (city: string, country: string): string => {
    return `${city}, ${country}`;
  }
  
  // Calling the function with city-country pairs
  const location1 = city_country("Lahore", "Pakistan");
  const location2 = city_country("London", "United Kingdom");
  const location3 = city_country("Sydney", "Australia");
  
  console.log(location1);
  console.log(location2);
  console.log(location3);
  