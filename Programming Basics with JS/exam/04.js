function exam(array)
{ let average = 0;
  let numStudents = Number(array[0]);

  let group1 = 0;
  let group2 = 0;
  let group3 = 0;
  let group4 = 0;

  for(let i = 1; i <= numStudents; i++)
  {
    let student = Number(array[i]);

    if(student >= 5) group1++
    else if(student >= 4 && student <= 4.99) group2++;
    else if(student >=3 && student <= 3.99) group3++;
    else if(student <3) group4++;

    average += student;
  }

  let finalAverage = average / numStudents;

  let percentGroup1 = group1 / numStudents * 100
  let percentGroup2 = group2 / numStudents * 100
  let percentGroup3 = group3 / numStudents * 100
  let percentGroup4 = group4 / numStudents * 100


  console.log(`Top students: ${percentGroup1.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentGroup2.toFixed(2)}%`)
  console.log(`Between 3.00 and 3.99: ${percentGroup3.toFixed(2)}%`);
  console.log(`Fail: ${percentGroup4.toFixed(2)}%`)
  console.log(`Average: ${finalAverage.toFixed(2)}`);

}

exam([6,
    2,
    3,
    4,
    5,
    6,
    2.2
    ]);