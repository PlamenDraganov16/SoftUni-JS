function deserializeString(lines) {
    let result = [];
    
    for (let line of lines) {
        if (line === "end") break;
        
        let [char, indexes] = line.split(":");
        indexes.split("/").forEach(idx => result[parseInt(idx)] = char);
    }
    
    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);