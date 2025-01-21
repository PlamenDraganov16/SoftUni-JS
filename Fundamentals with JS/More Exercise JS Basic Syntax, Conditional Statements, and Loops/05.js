function solve(n1, z1, n2, z2)
{
    let dn = n2 - n1;
    let dz = z2 - z1;

    let distance = Math.sqrt(dn ** 2 + dz ** 2);

    console.log(distance);
}

solve(2, 4, 5, 0)