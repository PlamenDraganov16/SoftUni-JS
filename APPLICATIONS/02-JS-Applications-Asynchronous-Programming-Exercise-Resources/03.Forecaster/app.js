function attachEvents() {
    const locationInput = document.getElementById("location");
    const submitBtn = document.getElementById("submit");

    const forecastDiv = document.getElementById("forecast");
    const currentDiv = document.getElementById("current");
    const upcomingDiv = document.getElementById("upcoming");

    const BASE_URL = "http://localhost:3030/jsonstore/forecaster";

    const symbols = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast": "☁",
        "Rain": "☂",
        "Degrees": "°"
    };

    submitBtn.addEventListener("click", async () => {
        const locationName = locationInput.value.trim();

        currentDiv.innerHTML = '<div class="label">Current conditions</div>';
        upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';

        try {
            const locationsRes = await fetch(`${BASE_URL}/locations`);
            if (!locationsRes.ok) throw new Error("Failed to fetch locations");

            const locations = await locationsRes.json();
            const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());
            if (!location) throw new Error("Location not found");

            const todayRes = await fetch(`${BASE_URL}/today/${location.code}`);
            if (!todayRes.ok) throw new Error("Failed to fetch today forecast");
            const todayData = await todayRes.json();

            const upcomingRes = await fetch(`${BASE_URL}/upcoming/${location.code}`);
            if (!upcomingRes.ok) throw new Error("Failed to fetch upcoming forecast");
            const upcomingData = await upcomingRes.json();

            forecastDiv.style.display = "block";

            const forecastSpan = document.createElement("div");
            forecastSpan.className = "forecasts";

            const conditionSymbol = symbols[todayData.forecast.condition];
            const symbolSpan = document.createElement("span");
            symbolSpan.className = "condition symbol";
            symbolSpan.textContent = conditionSymbol;

            const conditionSpan = document.createElement("span");
            conditionSpan.className = "condition";

            const locationSpan = document.createElement("span");
            locationSpan.className = "forecast-data";
            locationSpan.textContent = todayData.name;

            const tempSpan = document.createElement("span");
            tempSpan.className = "forecast-data";
            tempSpan.textContent = `${todayData.forecast.low}${symbols.Degrees}/${todayData.forecast.high}${symbols.Degrees}`;

            const weatherSpan = document.createElement("span");
            weatherSpan.className = "forecast-data";
            weatherSpan.textContent = todayData.forecast.condition;

            conditionSpan.appendChild(locationSpan);
            conditionSpan.appendChild(tempSpan);
            conditionSpan.appendChild(weatherSpan);

            forecastSpan.appendChild(symbolSpan);
            forecastSpan.appendChild(conditionSpan);
            currentDiv.appendChild(forecastSpan);

            const upcomingWrapper = document.createElement("div");
            upcomingWrapper.className = "forecast-info";

            upcomingData.forecast.forEach(day => {
                const upcomingSpan = document.createElement("span");
                upcomingSpan.className = "upcoming";

                const sym = document.createElement("span");
                sym.className = "symbol";
                sym.textContent = symbols[day.condition];

                const temp = document.createElement("span");
                temp.className = "forecast-data";
                temp.textContent = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

                const cond = document.createElement("span");
                cond.className = "forecast-data";
                cond.textContent = day.condition;

                upcomingSpan.appendChild(sym);
                upcomingSpan.appendChild(temp);
                upcomingSpan.appendChild(cond);

                upcomingWrapper.appendChild(upcomingSpan);
            });

            upcomingDiv.appendChild(upcomingWrapper);

        } catch (error) {
            forecastDiv.style.display = "block";
            currentDiv.innerHTML = "<div class='label'>Error</div>";
            upcomingDiv.innerHTML = "";
        }
    });
}

attachEvents();
