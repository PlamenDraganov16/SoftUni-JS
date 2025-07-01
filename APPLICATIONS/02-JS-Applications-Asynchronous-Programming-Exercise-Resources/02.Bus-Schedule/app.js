function solve() {
    const infoBox = document.querySelector(".info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
    let currentStop = {
        name: '',
        next: 'depot' 
    };

    async function depart() {
        try {
            const response = await fetch(BASE_URL + currentStop.next);
            if (!response.ok) {
                throw new Error("Stop not found");
            }

            const data = await response.json();
            currentStop = data;

            infoBox.textContent = `Next stop ${currentStop.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            infoBox.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currentStop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

const result = solve();
