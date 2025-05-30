function solve() {

    const [generateBtn, buyBtn] = document.querySelectorAll("button");
    const [input, output] = document.querySelectorAll("textarea");
    const tableRef = document.querySelector("table tbody");

    generateBtn.addEventListener("click", generateTable);
    buyBtn.addEventListener("click", generateOrder);

    function generateTable(event) {
        const data = JSON.parse(input.value);

        for(let elData of data) {
            const trEl = createTableRow(elData)
            tableRef.appendChild(trEl);
        }
    }

    function createTableRow(data) {
        const tr = document.createElement("tr");
        const img = document.createElement("img");
        img.src = data.img;
        const name = document.createElement("p");
        name.textContent = data.name;
        const price = document.createElement("p");
        price.textContent = data.price;
        const decFactor = document.createElement("p");
        decFactor.textContent = data.decFactor;
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        tr.appendChild(createTD(img));
        tr.appendChild(createTD(name));
        tr.appendChild(createTD(price));
        tr.appendChild(createTD(decFactor));
        tr.appendChild(createTD(checkBox));

        
        return tr;
    }

    function createTD(children) {
      const td =  document.createElement("td");
      td.appendChild(children)
      return td;
    }

    function generateOrder(event) {
        const selectedCheckBox = document.querySelectorAll("input[type='checkbox']:checked");

        const nameArr = []
        let sumPrice = 0;
        let sumDecFactor = 0;


        for(let checkbox of selectedCheckBox) {
          const tr = checkbox.parentElement.parentElement;
          const [imgTD, nameTD, priceTD, decFactodTD] = tr.children;
          const name = nameTD.children[0].textContent;
          const price = priceTD.children[0].textContent;
          const decFactod = decFactodTD.children[0].textContent;

          nameArr.push(name);
          sumPrice += Number(price);
          sumDecFactor += Number(decFactod);

        }

        let buff = `Bought furniture: ${nameArr.join(", ")}\n`;
        buff += `Total price: ${sumPrice.toFixed(2)}\n`;
        buff += `Average decoration factor: ${(sumDecFactor / nameArr.length)}`;
        output.value = buff
    }

}