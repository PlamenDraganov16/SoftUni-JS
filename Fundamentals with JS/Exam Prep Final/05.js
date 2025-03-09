function solve(input)
{
    let n = Number(input.shift());
    let pattern = /^@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+$/;

    for (let i = 0; i < n; i++) {
        let barcode = input[i];
        let match = barcode.match(pattern);

        if (match) {
            let productGroup = match[1].replace(/\D/g, "") || "00";
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

solve(["3",

    "@#FreshFisH@#",
    
    "@###Brea0D@###",
    
    "@##Che4s6E@##"])