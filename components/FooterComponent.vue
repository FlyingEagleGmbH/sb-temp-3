<template>
    <v-footer class="text-center d-flex flex-column" theme="dark" :elevation="3">

        <div class="footer-container">

            <div class="footer-container-image">
                <h3>{{ runtimeconfig.public.TITLE }}</h3>
                <p>Ihr zuverlässiger Partnter wenn es um Schädlingsbekämpfung geht. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Ratione, quae nulla architecto ex facere eveniet quasi sed maiores molestiae quisquam
                    impedit aperiam vitae excepturi recusandae consectetur magni corrupti molestias asperiores deserunt
                    quaerat esse consequuntur optio culpa delectus.</p>
            </div>

            <div class="footer-links">
                <NuxtLink to="./standorte">
                    <v-btn class="footer-links-btn" variant="tonal">
                        <v-icon>mdi-home-group</v-icon>
                        <span class="footer-btn-inner">Standorte</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink to="./impressum">
                    <v-btn class="footer-links-btn" variant="tonal">
                        <v-icon>mdi-information-outline</v-icon>
                        <span class="footer-btn-inner">Impressum</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink to="./datenschutz">
                    <v-btn class="footer-links-btn" variant="tonal">
                        <v-icon>mdi-security</v-icon>
                        <span class="footer-btn-inner">Datenschutz</span>
                    </v-btn>
                </NuxtLink>
            </div>
        </div>


        <v-divider></v-divider>

        <div class="copy">
            <p>{{ new Date().getFullYear() }} &copy; All rights reserved</p>
        </div>

        <div class="seo-text" style="display: none">
        </div>
    </v-footer>
</template>

<script lang="js">
export default {
    setup() {
        return {
            runtimeconfig: useRuntimeConfig()
        }
    },
    data: () => ({

    }),
}
</script>

<style lang="scss"></style>