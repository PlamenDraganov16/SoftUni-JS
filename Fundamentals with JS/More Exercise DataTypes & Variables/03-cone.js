function learnAreaOfCone(radius, height)
{
    let pi = Math.PI;
    
    let volume = (1/3) * pi * radius ** 2 * height;

    let slanthHeight = Math.sqrt(radius ** 2 + height ** 2)
    let surfaceArea = pi * radius * (radius + slanthHeight)

    console.log(`volume = ${(volume.toFixed(4))}`);
    console.log(`area = ${(surfaceArea.toFixed(4))}`);
    
}

learnAreaOfCone(3, 5)