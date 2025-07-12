import { userService } from "./src/api/userService.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showHomeView } from "./src/views/homeView.js";
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";
import { showDetailsView} from "./src/views/detailsView.js"
import { showCreateView } from "./src/views/createView.js";
import { userUtils } from "./src/utils/userUtils.js";

Array.from(document.querySelectorAll("div[data-section]")).forEach(section => section.remove());
const main = document.querySelector("main");
document.querySelector("nav").addEventListener("click", onNavigate);

const routes = {
    "/": showHomeView,
    "/login": showLoginView,
    "/register": showRegisterView,
    "/dashboard": showDashboardView,
    "/details": showDetailsView,
    "/create": showCreateView,
    "/logout": onLogout,
}

async function onLogout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function updateNav () {
    const hasUser = userUtils.hasUser();

    if(hasUser) {
        document.querySelectorAll("a[data-nav='user']").forEach(a => a.style.display = 'block');
        document.querySelectorAll("a[data-nav='guest']").forEach(a => a.style.display = 'none');
    } else {
        document.querySelectorAll("a[data-nav='user']").forEach(a => a.style.display = 'none');
        document.querySelectorAll("a[data-nav='guest']").forEach(a => a.style.display = 'block');
    }
}

function onNavigate(e) {
    e.preventDefault();
    let target = e.target;

    if (target.tagName === "IMG") {
        target = target.parentElement;
    }

    if (target.tagName !== "A") {
        return;
    }

    if (!target.href) {
        return;
    }

    const url = new URL(target.href);
    const viewName = url.pathname;

    goTo(viewName);
}

const ctx = {
    main,
    goTo,
    updateNav
}

function goTo(name, ...params) {
    const handler = routes[name];
    handler(ctx, params)
}

//start app;
updateNav();
goTo("/");

