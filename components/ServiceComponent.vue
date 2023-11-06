<template>
    <v-container fluid class="service-container" id="service">
        <v-row justify="center">
            <v-col v-for="(service, index) in services" :key="index" cols="12" md="4" lg="3">
                <v-card class="service-card" elevation="2">
                    <v-img v-if="service.image" :alt="service.text + '-Sticker'" :src="'/images/' + service.image"
                        class="sticker" />
                    <h2>{{ service.title }}</h2>
                    <p>{{ service.description }}</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            services: [
                {
                    title: "Wespen",
                    image: "wespe_sticker.png",
                    color: "primary",
                    description: "Professionelle Wespenbekämpfung für ein wespenfreies Zuhause oder Geschäft.",
                },
                {
                    title: "Schaben & Kakerlaken",
                    image: "kakerlake_sticker.png",
                    color: "secondary",
                    description: "Effektive Bekämpfung von Schaben und Kakerlaken.",
                },
                {
                    title: "Milben",
                    image: "zecke_sticker.png",
                    color: "accent",
                    description: "Effektive Milbenbekämpfung für ein milbenfreies Zuhause oder Büro.",
                },
                {
                    title: "Motten",
                    image: "motte_sticker.png",
                    color: "accent",
                    description: "Effektive Mottenbekämpfung für ein mottenfreies Zuhause.",
                },
                {
                    title: "Käfer",
                    image: "feuerkäfer_sticker.png",
                    color: "accent",
                    description: "Schnelle und professionelle Käferbekämpfung.",
                },
                {
                    title: "Flöhe",
                    image: "floh_sticker.png",
                    color: "accent",
                    description: "Effektive Flohbekämpfung für ein flohfreies Zuhause.",
                },
                {
                    title: "Ameisen",
                    image: "ameise_sticker.png",
                    color: "accent",
                    description: "Professionelle Ameisenbekämpfung für ein ameisenfreies Zuhause oder Geschäft.",
                },
                {
                    title: "Bettwanzen",
                    image: "bettwanzen_sticker.png",
                    color: "accent",
                    description: "Effektive Bettwanzenbekämpfung für ein bettwanzenfreies Zuhause.",
                },
                // Add more services as needed
            ],
        };
    },
};
</script>
  
<style lang="scss">
@import "~/assets/scss/variables.scss";

.service-container {
    padding: max(3%, 2rem);
    background-color: $primary ;
}

.service-card {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    text-align: center;
    padding: 20px;
    padding-top: 30px;
    margin: 10px;
    text-overflow: ellipsis;
    height: 320px;
    justify-content: center;
    align-items: center;

    .sticker {
        width: 3rem;
        max-height: 5rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>