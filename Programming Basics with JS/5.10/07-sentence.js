// •	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
function sentence(name, num) {
    let hours = num * 3 ;
    console.log(`The architect ${name} will need ${hours} hours to complete ${num} project/s.`)
}
sentence('Plamen', 4);