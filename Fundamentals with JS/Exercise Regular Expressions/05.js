function netherRealms(input) {
    let demons = input.split(/[, ]+/g).filter(x => x !== ''); 

    let demonStats = [];

    demons.forEach(demon => {
        let healthPattern = /[^0-9+\-*/.]/g;
        let health = (demon.match(healthPattern) || []).reduce((sum, char) => sum + char.charCodeAt(0), 0);

        let damagePattern = /[+-]?\d+(\.\d+)?/g;
        let damage = (demon.match(damagePattern) || []).reduce((sum, num) => sum + Number(num), 0);

        let modifierPattern = /[*\/]/g;
        let modifiers = demon.match(modifierPattern) || [];
        modifiers.forEach(mod => {
            if (mod === '*') damage *= 2;
            if (mod === '/') damage /= 2;
        });

        demonStats.push({ name: demon, health, damage });
    });

    demonStats.sort((a, b) => a.name.localeCompare(b.name));

    demonStats.forEach(d => console.log(`${d.name} - ${d.health} health, ${d.damage.toFixed(2)} damage`));
}

netherRealms("M3ph-0.5s-0.5t0.0**, Azazel"); 
netherRealms("M3ph1st0**, Azazel");
netherRealms("Gos/ho");
