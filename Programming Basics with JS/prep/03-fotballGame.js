function footballGames(firstGame, secondGame, thirdGame)
{
    let drawnMatches = 0;
    let wonMathes = 0;
    let lostMatches = 0;

    score1 = Number(firstGame[0])
    score2 = Number(firstGame[2]);

    if(score1 > score2)
        wonMathes++
    else if(score1 < score2)
        lostMatches++;
    else
        drawnMatches++;

    score3 = Number(secondGame[0])
    score4 = Number(secondGame[2]);

    if(score3 > score4)
        wonMathes++
    else if(score3 < score4)
        lostMatches++;
    else
        drawnMatches++;

    score5 = Number(thirdGame[0])
    score6 = Number(thirdGame[2]);

    if(score5 > score6)
        wonMathes++
    else if(score5 < score6)
        lostMatches++;
    else
        drawnMatches++;

    console.log(`Team won ${wonMathes} games.`);
    console.log(`Team lost ${lostMatches} games.`)
    console.log(`Drawn games: ${drawnMatches}`);

}

footballGames('3:1', '0:2', '0:0')