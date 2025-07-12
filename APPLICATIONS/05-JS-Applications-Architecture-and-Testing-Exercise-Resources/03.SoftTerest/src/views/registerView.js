import { userService } from "../api/userService.js";

const section = document.querySelector("div[data-section='register']");
let context = null;

export function showRegisterView(ctx) {
    ctx.main.replaceChildren(section);
    context = ctx;
    document.querySelector("form").addEventListener("submit", onSubmit);


}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(email.length < 3 || password.length < 3 || password !== repeatPassword) {
        alert("OOOOOOPS");
        return;
    }

    await userService.register({email, password})
    e.target.reset();
    context.updateNav();
    context.goTo("/");
}