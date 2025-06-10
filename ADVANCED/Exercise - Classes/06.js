class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary === undefined || salary === null) {
            throw new Error("Invalid input!");
        }
        if (typeof salary !== "number" || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        const employee = { name, salary, position };
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDept = null;
        let bestAvgSalary = 0;

        for (const dept in this.departments) {
            const employees = this.departments[dept];
            const totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
            const avgSalary = totalSalary / employees.length;

            if (avgSalary > bestAvgSalary) {
                bestAvgSalary = avgSalary;
                bestDept = dept;
            }
        }

        const bestDeptEmployees = this.departments[bestDept].slice();
        bestDeptEmployees.sort((a, b) => {
            if (b.salary === a.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary;
        });

        let result = `Best Department is: ${bestDept}\n`;
        result += `Average salary: ${bestAvgSalary.toFixed(2)}\n`;
        for (const emp of bestDeptEmployees) {
            result += `${emp.name} ${emp.salary} ${emp.position}\n`;
        }

        return result.trim(); 
    }
}
