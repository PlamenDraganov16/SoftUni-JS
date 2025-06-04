function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit);

    const taskNameRef = document.getElementById("task");
    const descRef = document.getElementById("description");
    const dateRef = document.getElementById("date");
    const [formRef, openSecRef, progressSecRef, completeSecRef] = document.querySelectorAll("section");
    const openRef = openSecRef.children[1];
    const progressRef = progressSecRef.children[1];
    const completeRef = completeSecRef.children[1];

    function onSubmit(event) {
        event.preventDefault();
        let task = taskNameRef.value;
        let desc = descRef.value;
        let date = dateRef.value;

        if (!task || !desc || !date) {
            return;
        }

        taskNameRef.value = "";
        descRef.value = "";
        dateRef.value = "";

        const article = createArticle(task, desc, date);
        openRef.appendChild(article);
    }

    function createArticle(name, desc, date) {
        const article = document.createElement("article");
        const h3 = document.createElement('h3');
        h3.textContent = name;
        const pDesc = document.createElement("p");
        pDesc.textContent = `Description: ${desc}`;
        const pDate = document.createElement("p");
        pDate.textContent = `Due Date: ${date}`;

        const container = document.createElement("div");
        container.classList.add("flex");

        const startBtn = createBtn("green", "Start", onStart);
        const delBtn = createBtn("red", "Delete", onDelete);

        container.appendChild(startBtn);
        container.appendChild(delBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(container);

        return article;
    }


    function createBtn(classList, text, handler) {
        const btn = document.createElement("button");

        btn.classList.add(classList);
        btn.textContent = text;
        btn.addEventListener("click", handler);

        return btn;
    }

    function onStart(event) {
        const container = event.target.parentElement;
        const article = container.parentElement;
        container.innerHTML = "";
        const delBtn = createBtn("red", "Delete", onDelete)
        const finishBtn = createBtn("orange", "Finish", onFinish);

        container.appendChild(delBtn);
        container.appendChild(finishBtn);

        progressRef.appendChild(article);
    }

    function onDelete(event) {
        event.target.parentElement.parentElement.remove();
    }

    function onFinish(event) {
        const container = event.target.parentElement;
        const article = container.parentElement;
        container.remove();
        completeRef.appendChild(article);
    }

}