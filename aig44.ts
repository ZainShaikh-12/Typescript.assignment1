// Question 45

const createCar = (manufacturer: string, model: string, ...options: [string, any][]): object => {
    const car: any = {
      manufacturer,
      model,
    };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  };
  
  // Calling createCar with required information and additional options
  const car1 = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
  const car2 = createCar("Honda", "Accord", ["color", "red"], ["features", ["Navigation", "Sunroof"]]);
  
  console.log(car1);
  console.log(car2);
  