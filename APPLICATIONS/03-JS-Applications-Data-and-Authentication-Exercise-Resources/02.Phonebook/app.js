function attachEvents() {

    const URL = 'http://localhost:3030/jsonstore/phonebook';
    const phonebookUl = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    document.getElementById('btnLoad').addEventListener("click", onLoad);
    document.getElementById('btnCreate').addEventListener("click", onCreate);

    async function onLoad(e) {


        const response = await fetch(URL);
        if (response.status !== 200) {
            return;
        }
        const data = await response.json();
        phonebookUl.innerHTML = "";

        Object.values(data).forEach(rec => createElement(rec));
    }

    async function onCreate(e) {
        const person = personInput.value;
        const phone = phoneInput.value;

        if(!person || !phone) {
            return;
        }

        personInput.value = "";
        phoneInput.value = ""

        const data = {
            person,
            phone
        }

        const option = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        await fetch(URL, option);
        onLoad()
    }

    async function onDelete(e) {
        const id = e.target.parentElement.dataset.id;

        await fetch(URL + `/${id}`, { method: "DELETE" });

        onLoad();
    }

    function createElement(data) {
        const li = document.createElement("li");
        li.textContent = `${data.person}: ${data.phone}`;
        li.dataset.id = data._id;

        const btn = document.createElement("button");
        btn.addEventListener("click", onDelete);
        btn.textContent = "Delete";

        li.appendChild(btn);
        phonebookUl.appendChild(li);
    }
}

attachEvents();
