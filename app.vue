<template>
    <v-app lang="de">
        <CookieBannerComponent />
        <div class="app-content">
            <NavComponent />
            <NuxtPage />
            <FooterComponent />
        </div>
    </v-app>
</template>

<script lang="js">
export default {
    setup() {
        if (!process.client)
            return;

        const runtimeconfig = useRuntimeConfig();
        const { $location, $url } = useNuxtApp();

        onMounted(async () => {
            const l = await $location();
            useSeoMeta({
                title: `${runtimeconfig.public.TITLE} ${l} für Gewerbe und Firmenkunden 24h`,
                ogTitle: `${runtimeconfig.public.TITLE} ${l} für Gewerbe und Firmenkunden 24h`,
                description: `${runtimeconfig.public.TITLE} ${l} 24h Service für Hausverwaltungen✓ Kommunen✓ Gastronomie✓ Lebensmittelindustrie✓ Hotels✓ und vieles mehr.`,
                ogDescription: `${runtimeconfig.public.TITLE} ${l} 24h Service für Hausverwaltungen✓ Kommunen✓ Gastronomie✓ Lebensmittelindustrie✓ Hotels✓ und vieles mehr.`,
                ogImage: `${$url()}/images/portrait-professional-exterminator-holding-sprayer-with-chemicals-pest-control.jpg`,
            });
        })

    }
}
</script>

<style lang="scss">

</style>