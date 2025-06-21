window.addEventListener('load', solve);

function solve() {
    
    const pickUpInput = document.getElementById("pick-up-location");
    const dropOffInput = document.getElementById("drop-off-location");
    const passengersInput = document.getElementById("number-of-passengers");
    const dateTimeInput = document.getElementById("date-time");
    const taxiTypeSelect = document.getElementById("taxi-type");

    const orderButton = document.getElementById("order-btn");
    const orderInfo = document.querySelector(".order-info-list");
    const confirmOrder = document.querySelector(".confirm-order-list");

    const status = document.getElementById("status");

    orderButton.addEventListener("click", function(event) {
        event.preventDefault();

        const pickUp = pickUpInput.value.trim();
        const dropOff = dropOffInput.value.trim();
        const passengers = passengersInput.value.trim();
        const dateTime = dateTimeInput.value.trim();
        const taxiType = taxiTypeSelect.value.trim();

        if (!pickUp || !dropOff || !passengers || !dateTime || !taxiType) {
            return;
        }

        const li = document.createElement("li");
        li.className = "info-item";

        const article = document.createElement("article");

        const pOne = document.createElement("p");
        pOne.textContent = `From: ${pickUp}`;
        article.appendChild(pOne);

        const pTwo = document.createElement("p");
        pTwo.textContent = `To: ${dropOff}`;
        article.appendChild(pTwo);

        const pThree = document.createElement("p");
        pThree.textContent = `For: ${passengers} people`;
        article.appendChild(pThree);
        
        const pFour = document.createElement("p");
        pFour.textContent = `When: ${dateTime}`;
        article.appendChild(pFour);

        const pFive = document.createElement("p");
        pFive.textContent = `Type: ${taxiType}`;
        article.appendChild(pFive);

        li.appendChild(article);

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        const continueButton = document.createElement("button");
        continueButton.className = "continue-btn";
        continueButton.textContent = "Continue";

        li.appendChild(editButton);
        li.appendChild(continueButton);

        orderInfo.appendChild(li);

        pickUpInput.value = "";
        dropOffInput.value = "";
        passengersInput.value = "";
        dateTimeInput.value = "";
        taxiTypeSelect.value = "";

        orderButton.disabled = true;

        editButton.addEventListener("click", () => {
            pickUpInput.value = pickUp;
            dropOffInput.value = dropOff;
            passengersInput.value = passengers;
            dateTimeInput.value = dateTime;
            taxiTypeSelect.value = taxiType;

            li.remove();
            orderButton.disabled = false;
        });

        continueButton.addEventListener("click", () => {
            li.remove();

            const confirmPurchase = document.createElement("li");
            confirmPurchase.className = "confirm-item";

            confirmPurchase.appendChild(article);

            const confirmButton = document.createElement("button");
            confirmButton.className = "confirm-btn";
            confirmButton.textContent = "Confirm";

            const cancelButton = document.createElement("button");
            cancelButton.className = "cancel-btn";
            cancelButton.textContent = "Cancel";

            confirmPurchase.appendChild(confirmButton);
            confirmPurchase.appendChild(cancelButton);

            confirmOrder.appendChild(confirmPurchase);

            confirmButton.addEventListener("click", () => {
                confirmPurchase.remove();
                orderButton.disabled = false;
                status.className = "taxi-ordered";
                status.textContent = "Taxi has been successfully ordered.";
            });

            cancelButton.addEventListener("click", () => {
                confirmPurchase.remove();
                orderButton.disabled = false;
                status.className = "taxi-not-complete";
                status.textContent = "Taxi request was not completed.";
            });
        });
    });

    const clickArea = document.getElementById("click");
    clickArea.addEventListener("click", () => {
        location.reload();
    })
}


