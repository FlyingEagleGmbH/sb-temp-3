<template>
    <v-snackbar :timeout="timeout" v-model="snackbar" :bottom="bottom" :right="right" color="#333" class="snackbar">
        <div class="cookie-banner">
            <p>Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis auf unserer Website zu bieten. Wenn Sie die Website
                weiter nutzen, gehen wir davon aus, dass Sie damit einverstanden sind. <router-link :to="'/datenschutz'">
                    Lesen Sie unsere Datenschutzerklärung.
                </router-link></p>
            <v-btn variant="tonal" color="white" class="cookie-btn" @click="activateCookies">
                Akzeptieren
            </v-btn>
        </div>
    </v-snackbar>
</template>

<script lang="js">
import { getAnalytics } from "firebase/analytics";
export default {
    data() {
        return {
            snackbar: true,
            timeout: 100000,
            bottom: true,
            right: true
        }
    },
    methods: {
        activateCookies() {
            this.snackbar = false;
            const { $firebase } = useNuxtApp();
            getAnalytics($firebase);
        },
    }
}
</script>
<style>
.v-snackbar__wrapper {
    max-width: none;
    bottom: 0;
    width: min(100vw, 1250px);
}

.cookie-banner {
    display: flex;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;

}

.cookie-banner {
    justify-content: space-between;
    align-items: flex-end;
}

.cookie-btn {
    font-size: max(.8rem, 12px);
}

.cookie-banner p {
    font-size: max(1rem, 16px);
    line-height: 120%;
    flex: 1;
}

@media screen and (max-width: 1250px) {
    .v-snackbar {
        margin: 0 !important;
    }

    .cookie-banner {
        padding: 8px;
    }
}

@media screen and (max-width: 800px) {
    .cookie-banner {
        flex-direction: column;
    }

    .cookie-btn {
        width: 100%;
    }
}
</style>
