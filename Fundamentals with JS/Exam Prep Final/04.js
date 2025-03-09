function solve(arr)
{
    let stops = arr.shift();

    for (let command of arr) {
        if (command === "Travel") break;

        let [action, param1, param2] = command.split(":");

        if (action === "Add Stop") {
            let index = Number(param1);
            if (index >= 0 && index < stops.length) {
                stops = stops.slice(0, index) + param2 + stops.slice(index);
            }
        } else if (action === "Remove Stop") {
            let start = Number(param1);
            let end = Number(param2);
            if (start >= 0 && end < stops.length && start <= end) {
                stops = stops.slice(0, start) + stops.slice(end + 1);
            }
        } else if (action === "Switch") {
            let oldStr = param1, newStr = param2;
            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);
            }
        }

        console.log(stops);
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve(["Hawai::Cyprys-Greece",

    "Add Stop:7:Rome",
    
    "Remove Stop:11:16",
    
    "Switch:Hawai:Bulgaria",
    
    "Travel"])