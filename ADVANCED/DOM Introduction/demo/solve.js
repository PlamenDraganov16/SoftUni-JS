function solve()
{
    let result = confirm("Do you want to change the text?");
    let h1 = document.getElementsByTagName('h1')[0]; // get the first <h1> element

    if (result) {
        h1.textContent = "Visca Barcelona!";
    } else {
        h1.textContent = "Too bad...";
    }

}