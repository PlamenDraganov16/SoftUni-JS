import { userUtils } from "../utils/userUtils.js"

async function requester(method, endpoint, data) {
    const options = {
        method,
        headers: {},

    }

    if(userUtils.hasUser()) {
        options.headers["X-Authorization"] = userUtils.getUserData().accessToken;
    }
    if(data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(endpoint, options);
        if(!response.ok) {
            if(response.status === 403) {
                userUtils.clear();
            }
            const error = await response.json();
            throw new Error(error.message)
        }

        if (response.status === 204) {
            return response;
        }

        return response.json();
    } catch (error) {
        alert(error);
    }
}

function get(endpoint) {
    return requester("GET", endpoint);
}

function post(endpoint, data) {
    return requester("POST", endpoint, data);
}

function update(endpoint, data) {
    return requester("PUT", endpoint, data);
}

function del(endpoint) {
    return requester("DELETE", endpoint);
}

export const api = {
    get,
    post,
    update,
    del
}