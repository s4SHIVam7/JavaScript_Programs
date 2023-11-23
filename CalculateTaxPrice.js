/*
You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Noodles Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
Dish: Italian pasta Price (incl.tax): $ 9.55
Dish: Rice with veggies Price (incl.tax): $ 8.65
Dish: Noodles Price (incl.tax): $ 15.55
Dish: Vegetarian Pizza Price (incl.tax): $ 6.45
*/


function calculatePrice(includeTax) {
  
  const dishesh = [
    {name: 'Italian Pasta', Price : 9.55 },
    {name: 'Rice with veggies', Price: 8.65 },
    {name: 'Noodles', Price: 15.55 },
    {name: 'Vegetarian Pizza', Price: 6.45 }
  ];

  if(includeTax) {
    console.log('Prices with 20% tax:');
  } else {
    console.log('Prices withOUT tax:');
  }

  dishesh.forEach((dish) =>{
    const taxPrice = includeTax ? 1.2 : 1;
    const totalBill = taxPrice* dish.Price;
    console.log(`Dish: ${dish.name}, Price (incl.tax): $${totalBill}`);
  });
}

//calculatePrice(true);
//calculatePrice(false);
