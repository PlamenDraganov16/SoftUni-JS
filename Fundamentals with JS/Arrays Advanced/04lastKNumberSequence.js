function lastKNumberSequence(n, k)
{
    let sequence = [1];

    for(let i = 1; i < n; i++)
    {
        let sum  = sequence.slice(-k).reduce((acc,num) => acc + num, 0);
        sequence.push(sum);
    }

    console.log(sequence.join(' '))
}

lastKNumberSequence(6, 3);