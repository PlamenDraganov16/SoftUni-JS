function solve(arr)
{
    let heroes = []

    for(let heroNow of arr)
    {
        let [name, level, items] = heroNow.split(' / ');
        
        level = Number(level);

        let heroObj = {hero: name, level: level, items: items}
        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level)

    for(let heroObj of heroes)
    {
        console.log(`Hero: ${heroObj.hero}`)
        console.log(`level => ${heroObj.level}`)
        console.log(`items => ${heroObj.items}`);
    }
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])