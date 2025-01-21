function projectGreen(totalObject) 
{
let firstPrice = totalObject * 7.61;
let discountPrice = firstPrice * 0.18;
let totalPrice = firstPrice - discountPrice;
console.log(`The final price is: ${totalPrice} lv.`);
console.log(`The discount is: ${discountPrice} lv.`);
}
projectGreen(550);
projectGreen(150);