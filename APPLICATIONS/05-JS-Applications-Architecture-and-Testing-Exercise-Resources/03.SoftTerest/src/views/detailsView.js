import { dataService } from "../api/dataService.js";
import { userUtils } from "../utils/userUtils.js";


const section = document.querySelector("div[data-section='details']");

let context = null
export async function showDetailsView(ctx, params) {
    const id = params[0];
    ctx.main.replaceChildren(section);
    context = ctx;
    const idea = await dataService.getIdea(id);
    renderIdea(idea);
}

function renderIdea(data) {
    section.innerHTML = `
    <img class="det-img" src="${data.img}" />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
        ${userUtils.hasOwner(data._ownerId) ? `<a class="btn detb" data-id=${data._id} href="">Delete</a>` : ""}
        </div>
    `;

    const deleteBtn = section.querySelector("a");
    if (deleteBtn) {
        
        deleteBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            await dataService.deleteIdea(data._id);
            context.goTo("/dashboard");
        })
    }
}