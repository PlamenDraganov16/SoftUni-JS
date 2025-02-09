function solve(arr)
{
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b, undefined, { sensitivity: 'base' }));
    console.log(arr.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);