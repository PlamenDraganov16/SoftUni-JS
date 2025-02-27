function serializeString(arr) {
    let str = arr[0];
    let result = {};
    
    for (let i = 0; i < str.length; i++) {
        if (!result[str[i]]) {
            result[str[i]] = [];
        }
        result[str[i]].push(i);
    }

    for (let key in result) {
        console.log(`${key}:${result[key].join('/')}`);
    }
}

serializeString(["abababa"]);