function solve(input) {
    const templateRows = Number(input[0]);
    
    const template = input
      .slice(1, templateRows + 1)
      .map(line => line.split(" ").map(Number));
    
    const message = input
      .slice(templateRows + 1)
      .map(line => line.split(" ").map(Number));
    
    const wheel = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let decoded = "";
    
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < message[i].length; j++) {
        const tVal = template[i % template.length][j % template[0].length];
        
        const sum = message[i][j] + tVal;
        
        const letterIndex = sum % 27;
        
        decoded += wheel[letterIndex];
      }
    }
    
    console.log(decoded.trim());
  }
  

  solve([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
  ]);
  

  