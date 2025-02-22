function solve()
{
    let needKey = "name";

    let obj =
    {   //key //value
        name: "Plamen",
        age: "21",
        town: "Kaspichan"
    }

    obj.town = "Sofia"; // prezapisvame
    console.log(obj);

    console.log(obj.name);
    console.log(obj["name"]);
    console.log(obj[needKey]);


    let objTwo = {
        sayHello: function (name) {
            console.log("Hello " + name);
        }
    }

    objTwo.sayHello("Plamen");

    objTwo.sayGoodbye = (name) => console.log(`Bye ${name}`)

    objTwo.sayGoodbye('Plamen')

    console.log(Object.keys(obj));
    console.log(Object.values(obj));

    // console.log(Object.entries(obj));

    for(let el of Object.keys(obj))
    {
        console.log(obj[el]) 
    }
}

//solve()

function solveTwo()
{
    let a = 6;
    let b = a;

    b += 1;

    console.log(a)
    console.log(b)

    let arr = [1, 2, 3, 4]
    let arr2 = arr; // arr2 ima sushtiq adres kato arr 

    arr2.push(5);

    console.log(arr);
    console.log(arr2);
}

//solveTwo()

function solveJSON()
{
    let obj = {
        "name": "Ivan",
        "age": 25,
        "grades": {
            "Math": [2.50, 3.50],
            "Chemistry": [4.50],
        }
    }

    console.log(obj)

    let myJSON = JSON.stringify(obj)

    console.log(myJSON)

    let obj2 = JSON.parse(myJSON)

    console.log(typeof obj2)
}

//solveJSON()

function solveClasses()
{
    class Person {
        constructor(name, age, town) {
            this.name = name;
            this.age = age;
            this.town = town;
        }

        sayHello(){
            console.log(`Hello ${this.name}`);
        }
    }

    let myPerson = new Person('Plamen', 20, 'Yambol')
    let myPersonTwo = new Person('Sasho', 22, 'Sofia')

    console.log(myPerson)
    console.log(myPersonTwo.name)
    myPerson.sayHello();
    
}

solveClasses()
