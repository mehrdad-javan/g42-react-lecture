import React, { useEffect, useState } from "react";

const Car = () => {
  const initCarData = { id: 0, brand: "Test", model: "Test" };

  const [car, setCar] = useState(initCarData);

  useEffect( ()=> {
    console.log('#### useEffect function has been executed! ####');
    // call api - fetch car data from backend api
    setCar({ id: 1, brand: "Volvo", model: "V60", gearBox: 'Automat' });
  }  ,  [] );

  return (
  <div>
    <b>Car Info: {car.brand} {car.model}</b>
  </div>
  );
};

export default Car;
