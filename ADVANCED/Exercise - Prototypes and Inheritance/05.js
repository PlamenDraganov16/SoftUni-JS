function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate abstract class Employee directly.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this._currentTask = 0;
        }

        work() {
            const task = this.tasks[this._currentTask];
            console.log(`${this.name} ${task}`);
            this._currentTask = (this._currentTask + 1) % this.tasks.length;
        }

        collectSalary() {
            let totalSalary = this.salary;
            if (this.dividend) {
                totalSalary += this.dividend;
            }
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a simple task.");
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(
                "is working on a complicated task.",
                "is taking time off work.",
                "is supervising junior workers."
            );
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(
                "scheduled a meeting.",
                "is preparing a quarterly report."
            );
        }
    }

    return { Employee, Junior, Senior, Manager };
}