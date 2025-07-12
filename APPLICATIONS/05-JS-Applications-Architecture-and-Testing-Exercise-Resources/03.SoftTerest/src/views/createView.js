import { dataService } from "../api/dataService.js";


const section = document.querySelector("div[data-section='create']");


let context = null
export function showCreateView(ctx) {
    ctx.main.replaceChildren(section);
    document.querySelector("form").addEventListener("submit", onSubmit);
    context = ctx
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const {title, description, imageURL} = Object.fromEntries(formData);

    if(title.length < 6 || description.length < 10 || imageURL.length < 5) {
        alert("error");
        return;
    }

    await dataService.createIdea({title, description, img: imageURL});
    e.target.reset();
    context.goTo("/dashboard");
}