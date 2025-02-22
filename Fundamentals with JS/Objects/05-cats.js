function solve(arr)
{
    class Cat {
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }

        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let result = [];

    for(let el of arr)
    {
        let [name, age] = el.split(' ')
        let cat = new Cat(name, age)
        result.push(cat)
    }

    result.forEach(cat => cat.sayMeow());

}

solve(['Mellow 2', 'Tom 5'])