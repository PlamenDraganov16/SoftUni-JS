function pieceOfPie(pies, startFlavor, endFlavor) {
    const startIndex = pies.indexOf(startFlavor);
    const endIndex = pies.indexOf(endFlavor);
    return pies.slice(startIndex, endIndex + 1);
}
