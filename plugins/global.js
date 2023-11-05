const grepDomainOrigin = () => {
    if (!process.client)
        return;
    const url = new URL(window.location.href);
    return url.origin;
}

const grepLocationFromJson = async () => {
    if (!process.client)
        return;
    var url = grepDomainOrigin().replace("www", "");
    url = url.replace("www", "");
    const location = await fetch(url + "/json/locations.json").then(resp => resp.json()).then(data => data[url]);
    return location !== undefined ? location : "";
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.provide('url', grepDomainOrigin)
    nuxtApp.provide('url', grepDomainOrigin)

    nuxtApp.vueApp.provide('location', grepLocationFromJson)
    nuxtApp.provide('location', grepLocationFromJson)
})