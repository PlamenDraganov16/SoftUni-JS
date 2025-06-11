function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName
    };

    Object.defineProperty(person, "fullName", {
        configurable: true,
        enumerable: true,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            let [firstName, lastName] = value.split(" ");

            if(!firstName || !lastName) {
                return;
            }

            this.firstName = firstName;
            this.lastName = lastName;
        }
    });

    return person;
}

let myPerson = createPerson("John", "Dow");

