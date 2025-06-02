function carManager(commands) {
  if (!carManager.cars) {
    carManager.cars = {};
  }
  const cars = carManager.cars;

  for (let cmdLine of commands) {
    const parts = cmdLine.split(' ');
    const command = parts[0];

    if (command === 'create') {
      const name = parts[1];
      if (parts.length === 4 && parts[2] === 'inherit') {
        const parentName = parts[3];
        cars[name] = Object.create(cars[parentName]);
      } else {
        cars[name] = {};
      }
    } else if (command === 'set') {
      const name = parts[1];
      const key = parts[2];
      const value = parts[3];
      cars[name][key] = value;
    } else if (command === 'print') {
      const name = parts[1];
      let result = [];

      for (const key of Object.keys(cars[name])) {
        result.push(`${key}:${cars[name][key]}`);
      }

      for (const key in cars[name]) {
        if (!cars[name].hasOwnProperty(key)) {
          result.push(`${key}:${cars[name][key]}`);
        }
      }

      console.log(result.join(','));
    }
  }
}
