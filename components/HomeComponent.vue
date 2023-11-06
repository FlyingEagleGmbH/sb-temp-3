<template>
    <v-container fluid class="container" id="home">
        <div class="content-box">
            <div class="content">
                <h1>{{ runtimeconfig.public.TITLE }}</h1>
                <p>
                Ihr Partner, wenn es um professionelle Bekämpfung von Schädlingen geht.
                </p>
                <ul class="feature-list desktop">
                    <li>
                        <v-icon>mdi-check</v-icon>
                        <span>24 Stunden Notdienst</span>
                    </li>
                    <li>
                        <v-icon>mdi-check</v-icon>
                        <span>Faire Festpreise für alle Arbeiten</span>
                    </li>
                    <li>
                        <v-icon>mdi-check</v-icon>
                        <span>Keine Anfahrtskosten</span>
                    </li>
                    <li>
                        <v-icon>mdi-check</v-icon>
                        <span>Preise nach Verbraucherschutz</span>
                    </li>
                    <li>
                        <v-icon>mdi-check</v-icon>
                        <span>Kurzfristige Termine in dringenden Fällen</span>
                    </li>
                </ul>
                <v-btn class="phone-button">
                    {{ runtimeconfig.public.PHONE }}
                </v-btn>
                <v-chip class="home-chip mobile" prepend-icon="mdi-check">
                    <p>24 Stunden Notdienst</p>
                </v-chip>
                <v-chip class="home-chip mobile" prepend-icon="mdi-check">
                    <p>Faire Festpreise für alle Arbeiten</p>
                </v-chip>
                <v-chip class="home-chip mobile" prepend-icon="mdi-check">
                    <p>Keine Anfahrtskosten</p>
                </v-chip>
                <v-chip class="home-chip mobile" prepend-icon="mdi-check">
                    <p>Preise nach Verbraucherschutz</p>
                </v-chip>
                <v-chip class="home-chip mobile" prepend-icon="mdi-check">
                    <p>Kurzfristige Termine in dringenden Fällen</p>
                </v-chip>
            </div>
        </div>
        <v-img :src="'/images/portrait-professional-exterminator-holding-sprayer-with-chemicals-pest-control.jpg'"
            id="home-img" cover />
    </v-container>
</template>
<script lang="js">
export default {
    setup() {
        return {
            runtimeconfig: useRuntimeConfig()
        }
    },
    data() {
        return {
            location: ref("")
        }
    },
    async mounted() {
        const { $location } = useNuxtApp();
        const l = await $location();
        this.location = l !== "" ? "für " + l : ""
    }
}
</script>
<style lang="scss">
@import "/assets/scss/variables.scss";


.container {
    padding: 0;
    position: relative;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
}

.content-box {
    z-index: 1;
    display: flex;
    width: 100%;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
}

.content {
    text-align: center;
    padding: max(5%, 30px);
    width: 50%;
    min-width: 500px;
    color: $fontsecondary;
    row-gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#home-img {
    width: 100%;
    height: 100%;
}

.mobile {
    display: none;
}

@media screen and (max-width: 800px) {
    .container {
        height: fit-content;
    }

    .content {
        width: 100%;
        min-width: auto;
        color: $primary;
        background: $primary;
    }

    .content-box {
        position: initial;

        height: fit-content;
        background-color: $secondary;


        h1,
        p {
            color: white;
        }

        .v-icon {
            color: orange;
        }
    }

    #home-img {
        height: 200px;
    }

    .desktop {
        display: none !important;
    }

    .mobile {
        display: flex;
    }
}

.content h1 {
    padding-bottom: 10px;
}

.content p {
    font-size: 1rem;
}


.phone-button {
    margin: 10px 20px;
    background-color: orange;
    border: 2px solid #000000;
}

.phone-button:hover {
    background-color: $primary;
    color: $fontsecondary;
    transition: background-color 0.3s, color 0.3s;
}

.feature-list {
    list-style: none;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.feature-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.feature-list span {
    font-size: 1rem;
    font-weight: bold;
}

.home-chip {
    width: fit-content;
    height: fit-content;
}
</style>