function filterEmployees(data, criteria) {
  const employees = JSON.parse(data);

  if (criteria === 'all') {
    employees.forEach((e, i) => {
      console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
    });
    return;
  }

  const [prop, value] = criteria.split('-');

  employees
    .filter(e => e[prop] === value)
    .forEach((e, i) => {
      console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
    });
}
