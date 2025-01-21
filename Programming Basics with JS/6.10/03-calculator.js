/*От конзолата се четат 3 реда:

1. Депозирана сума – реално число в интервала [100.00 …

2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]
сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
*/

function calculator(depSum, depTime, annualPercent)
{
   let lihva = depSum * (annualPercent / 100); // procent vinagi se deli na 100 5.7 / 100
   let mesecLihva = lihva / 12;
   let total = depSum + depTime * mesecLihva;
   console.log(total);
}

calculator(200, 3, 5.7);
calculator(2350, 6, 7);