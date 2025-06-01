function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let pattern = input.value;

    let rows = Array.from(document.querySelector('tbody').children);

    let found = false;

    for(let row of rows) {
        if(row.children[1].textContent == pattern) {
            row.remove();
            found= true;
        }
    }

    let output = document.getElementById("result");

    if(found) {
        output.textContent = "Deleted.";
    }
    else {
        output.textContent = "Not found.";
    }


    input.value = "";
}