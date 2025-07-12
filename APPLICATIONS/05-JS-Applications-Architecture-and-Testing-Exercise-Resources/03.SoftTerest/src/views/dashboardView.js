import { dataService } from "../api/dataService.js";


const section = document.querySelector("div[data-section='dashboard']");
let context = null;

export function showDashboardView(ctx) {

    context = ctx;
    ctx.main.replaceChildren(section);
    section.innerHTML = "";
    loadAllIdeas();
}

async function loadAllIdeas() {
    const data = await dataService.getAll();
    if (!data.length) {
        const h1 = document.createElement("h1");
        h1.textContent = "No ideas yet! Be the first one :)";
        section.replaceChildren(h1);
    }

    data.forEach(idea => renderIdea(idea))
}

function renderIdea(data) {
    const div = document.createElement("div");
    div.classList.add("card")
    div.classList.add("overflow-hidden")
    div.classList.add("current-card")
    div.classList.add("details")
    div.style.width = "20rem";
    div.style.height = "18rem";
    div.innerHTML = ` 
            <div class="card-body">
                <p class="card-text">${data.title}</p>
            </div>
            <img class="card-image" src="${data.img}" alt="Card image cap">
            <a class="btn" data-id=${data._id} href="">Details</a>
    `;
    div.querySelector("a").addEventListener("click", onDetails);
    section.appendChild(div);
}

function onDetails(e) {
    e.preventDefault();
    const id = e.target.dataset.id;

    context.goTo("/details", id)
}