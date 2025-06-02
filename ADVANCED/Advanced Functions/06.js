// function listProcessor() {
//   let collection = [];

//   return function(commands) {
//      collection = []; 

//     for (let i = 0; i < commands.length; i++) {
//       const commandLine = commands[i];
//       const [cmd, ...args] = commandLine.split(' ');
//       const argStr = args.join(' ');

//       if (cmd === 'add') {
//         collection.push(argStr);
//       } else if (cmd === 'remove') {
//         for (let j = collection.length - 1; j >= 0; j--) {
//           if (collection[j] === argStr) {
//             collection.splice(j, 1);
//           }
//         }
//       } else if (cmd === 'print') {
//         console.log(collection.join(','));
//       }
//     }
//   }
// }

// let processCommands = listProcessor();

// processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// processCommands(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

function listProcessorTwo(commands) {
  if (!listProcessorTwo.collection) {
    listProcessorTwo.collection = [];
  }
  const collection = listProcessor.collection;

  for (let commandLine of commands) {
    const [cmd, ...args] = commandLine.split(' ');
    const argStr = args.join(' ');

    if (cmd === 'add') {
      collection.push(argStr);
    } else if (cmd === 'remove') {
      for (let i = collection.length - 1; i >= 0; i--) {
        if (collection[i] === argStr) {
          collection.splice(i, 1);
        }
      }
    } else if (cmd === 'print') {
      console.log(collection.join(','));
    }
  }
}

