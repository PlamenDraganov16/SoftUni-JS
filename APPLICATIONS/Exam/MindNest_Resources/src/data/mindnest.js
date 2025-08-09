import { get, post, put, del } from "./request.js";

const endpoints = {
    recent: '/data/mindfultips?sortBy=_createdOn%20desc',
    create: '/data/mindfultips',
    byId: '/data/mindfultips/',
}

export async function getAllTips() {
    return get(endpoints.recent);
}

export async function getTipsById(id) {
    return get(endpoints.byId + id);
}

export async function createTip({
    title,
    imageUrl,
    type,
    difficulty,
    description,
}) {
    return post(endpoints.create, {
        title,
        imageUrl,
        type,
        difficulty,
        description,
    });
}

export async function updateTip(id, {
    title,
    imageUrl,
    type,
    difficulty,
    description,
}) {
    return put(endpoints.byId + id, {
        title,
        imageUrl,
        type,
        difficulty,
        description,
    });
}

export async function removeTip(id) {
    return del(endpoints.byId + id);
}