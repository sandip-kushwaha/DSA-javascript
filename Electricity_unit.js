
function calculateElectricityBill(units) {
  let bill = 0;

  if (units <= 20) {
    // 0–20 units
    bill = 30;

  } else if (units <= 30) {
    // 21–30 units
    bill =50+(20 * 3) + ((units - 20) * 6.5);

  } else if (units <= 50) {
    // 31–50 units
    bill =50+(20 * 3) + (10 * 6.5) + ((units - 30) * 8);

  } else if (units <= 100) {
    // 51–100 units
    bill =75+(20 * 3) + (10 * 6.5) + (20 * 8) + ((units - 50) * 9.5);

  }else if(units <= 250){
    //101-250 units
      bill = 100+(20 * 3) + (10 * 6.5) + (20 * 8)+ ((50+(units - 100)) * 9.5);
  }
   else {
    // Above 250 units
    bill =150+(20 * 3) + (10 * 6.5) + (20 * 8) + ((50+150)*9.5)+(units-250)*11;
  }

  return bill;
}

let units = 150;
let amount = calculateElectricityBill(units);

console.log("Units:", units);
console.log("Electricity Bill: ", amount);
