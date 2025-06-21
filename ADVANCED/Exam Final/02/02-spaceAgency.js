class SpaceAgency {
    constructor(agencyName, mission) {
        this.agencyName = agencyName;
        this.mission = mission;
        this.candidates = [];
    }

    acceptApplications(applications) {
        let newNames = new Set();

        for (let app of applications) {
            let [name, education, hours] = app.split("-");
            let flightHours = Number(hours);

            let existsCandidate = this.candidates.find(candidate => candidate.name === name);

            if (existsCandidate) {
                if (typeof existsCandidate.flightHours === "number" &&
                    flightHours > existsCandidate.flightHours) {

                    existsCandidate.flightHours = flightHours;
                }
            } else {
                this.candidates.push({ name, education, flightHours });
            }

            newNames.add(name);
        }

        return `You successfully added candidates: ${[...newNames].join(", ")}.`;
    }

    chooseForMission(candidateInfo) {
        let [name, hoursMins] = candidateInfo.split("-");
        let hoursInMins = Number(hoursMins);

        let candidate = this.candidates.find(candidate => candidate.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (typeof candidate.flightHours !== "number" ||
            candidate.flightHours < hoursInMins) {

            throw new Error(`${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${hoursInMins} hours.`);
        }

        candidate.flightHours = "selected";
        return `Congratulations, ${name} will participate in the ${this.mission} mission!`;
    }

    trainingBonus(name) {
        let candidate = this.candidates.find(candidate => candidate.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let bonus = 80000;
        if (candidate.education === "Pilot") {
            bonus = 100000;
        } else if (candidate.education === "Engineer") {
            bonus = 120000;
        }

        return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $${bonus.toLocaleString()}!`;
    }

    candidatesReport() {
        if (this.candidates.length === 0) {
            throw new Error("Candidate database is empty!");
        }

        const sorted = this.candidates
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(c => `${c.name}-${c.flightHours}`);

        return `Candidates list:\n${sorted.join("\n")}`;
    }
}