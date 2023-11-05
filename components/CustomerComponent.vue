<template>
    <div class="customer-container" id="customer">
        <h2 class="section-header">Privat- und Geschäftskunden</h2>
        <v-row align="center" justify="center" style="padding-top: 10px;">
            <v-col v-for="(service, i) in services" :key="service.key" :value="service.key" cols="auto">
                <v-card class="mx-auto" max-width="400" variant="flat">
                    <v-card-item>
                        <div>
                            <div >
                                <h2>{{ service.title }}</h2>
                            </div>
                            <div class="text-h6 mb-2">
                                <p>{{ service.subtitle }}</p>
                            </div>
                            <div class="text-caption">
                                <p>{{ service.text }}</p>
                            </div>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            services: [
                {
                    title: "Private Kunden",
                    subtitle: "Haushalte und private Einrichtungen",
                    image: "/privat_compressed.webp",
                    text: "Private Kunden Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 1,
                },
                {
                    title: "Handelsgewerbe",
                    subtitle: "Einzel- und Großhandel",
                    image: "/lebensmittelhandel_compressed.webp",
                    text: "Handelsgewerbe Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 2,
                },
                {
                    title: "Kommune",
                    subtitle: "Kommunale Einrichtungen",
                    image: "/kommune_compressed.webp",
                    text: "Kommune Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 3,
                },
                {
                    title: "Immobilien",
                    subtitle: "Häuser und Wohnungen",
                    image: "/immobilien_compressed.webp",
                    text: "Immobilien Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 4,
                },
                {
                    title: "Gastronomiegewerbe",
                    subtitle: "Restaurants, Gastätten und Hotels",
                    image: "/gastronomie_compressed.webp",
                    text: "Gastronomiegewerbe Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 5,
                },
                {
                    title: "Baugewerbe",
                    subtitle: "Planung und Prävention",
                    image: "/baugewerbe_compressed.webp",
                    text: "Baugewerbe Bietet umfassende Unterstützung für Geschäftskunden in verschiedenen Branchen.Unsere Konzepte zur Vorbeugung und Bekämpfung sind individuell auf die Bedürfnisse jeder Branche zugeschnitten Wir verfügen über umfassende Kenntnisse der gesetzlichen Anforderungen und sind mit de  relevanten Normen(z.B.HACCP, IFS, AIB) bestens vertraut.",
                    key: 6,
                },
            ],
        };
    },
    computed: {
        selectedService() {
            if (this.model !== null) {
                return this.services.find((service) => service.key === this.model);
            }
            return this.services[0];
        },
    },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

.customer-container {
    padding: 3%;
    background-color: $secondary;
}

.transition-text {
    padding: max(3%, 2rem);
    padding-bottom: 1rem;
}

.bg-primary {
    background-color: orange !important;

    color: black !important;
}

.slide-group-item-content {
    flex-direction: column;
    padding: 25px;
    display: flex;
    flex: 1;
    border: solid black 2px;

    h3,
    p {
        text-align: center;
    }
}
</style>
