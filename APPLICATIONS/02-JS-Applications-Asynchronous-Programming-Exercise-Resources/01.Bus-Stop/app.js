function getInfo() {
    const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/`
    const stopIdRef = document.getElementById("stopId");

    const stopNameRef = document.getElementById("stopName");
    const busInfoRef = document.getElementById("buses");

    const stopId = stopIdRef.value;
    stopIdRef.value = "";
    busInfoRef.textContent = "";

    if(!stopId) {
        return;
    }
    const response = fetch(BASE_URL + stopId);

    response.then(res => {
        res.json()
            .then(data => {
                stopNameRef.textContent = data.name;
                Object.entries(data.buses).forEach(bus => {
                    const li = document.createElement("li");
                    li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                    busInfoRef.appendChild(li);
                })
            }).catch(err => {
                stopNameRef.textContent = "Error";
            })
    }).catch(err => {
        stopNameRef.textContent = "Error";
    })

}