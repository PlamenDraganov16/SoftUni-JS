function melrahShake(text, pattern) {
    while (true) {
        let firstIndex = text.indexOf(pattern);
        let lastIndex = text.lastIndexOf(pattern);

        if (firstIndex === -1 || lastIndex === -1 || firstIndex === lastIndex) {
            console.log("No shake.");
            console.log(text);
            break;
        }

        text = text.substring(0, firstIndex) + text.substring(firstIndex + pattern.length);
        lastIndex = text.lastIndexOf(pattern);
        text = text.substring(0, lastIndex) + text.substring(lastIndex + pattern.length);

        console.log("Shaked it.");

        let middleIndex = Math.floor(pattern.length / 2);
        pattern = pattern.slice(0, middleIndex) + pattern.slice(middleIndex + 1);

        if (pattern.length === 0) {
            console.log("No shake.");
            console.log(text);
            break;
        }
    }
}

melrahShake("astalavista baby", "sta");