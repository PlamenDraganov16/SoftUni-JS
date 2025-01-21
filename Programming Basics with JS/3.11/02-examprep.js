function examPreparation(array)
{
    let strikes = Number(array[0]); // maks kusaniya
    let sumOfGrades = 0; // obshto predmeti
    let lastExamName = ''; // prazen string za ime
    
    let numStrikes = 0; // za sega strike
    let totalGrade = 0; // obshto sbor ot ocenk
    let currentGrade = 0; // segashna ocenka

    let i = 1; // broyach

    while(i < array.length) // dokato broyacha e po malko ot duljinata na masiva
    {
        let currentProblem = array[i] // segashniq predmet priema tazi chast ot masiva
        let currentGrade = Number(array[i+1]); // i ocenkata se priema

        if(currentProblem === 'Enough') // ako problema e enough printirame
        {  let avgGrade = totalGrade / sumOfGrades; // smqtame srednata ocenka
            console.log(`Average score: ${avgGrade.toFixed(2)}`)
            console.log(`Number of problems: ${sumOfGrades}`);
            console.log(`Last problem: ${lastExamName}`)
        }
        if(currentGrade <=4) // ako segashnata ocenka e po malka ili 4
        {
            numStrikes++; //uvelichavame strikes
            if(numStrikes === strikes) // ako strikes e ravno na maks strikes
            {
                console.log(`You need a break, ${numStrikes} poor grades.`); // slabak
            }
        }
        totalGrade+=currentGrade; // subirame ocenkite
        sumOfGrades++ // uvelichavame broq na predmetite
        lastExamName = currentProblem; // priema posledniq predmet
        i += 2; // smenqme na sledvashtiq predmet
    }
}

examPreparation((["3", "Money","6", "Story","4",
    "Spring Time",
    
    "5",
    
    "Bus",
    
    "6",
    
    "Enough"]));