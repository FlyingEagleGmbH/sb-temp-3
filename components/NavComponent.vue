<template>
    <v-navigation-drawer v-model="drawer" theme="dark" location="left" temporary class="drawer">
        <v-list dense class="drawer-items">
            <span v-for="(item, index) in items" key=index>
                <a :href="'#' + item.value">
                    <v-list-item>
                        <v-btn variant="tonal" style="width: 100%;">
                            <p>{{ item.title }}</p>
                        </v-btn>
                    </v-list-item>
                </a>
            </span>
            <v-list-item class="drawer-phone">
                <a :href="'tel:' + runtimeconfig.public.PHONE" style="width: 100%;">
                    <v-btn prepend-icon="mdi-phone" variant="outlined" color="orange" style="width: 100%;">
                        <p>{{ runtimeconfig.public.PHONE }}</p>
                    </v-btn>
                </a>
            </v-list-item>
            <v-list-item class="drawer-mail">
                <a :href="'mailto:' + runtimeconfig.public.MAIL" style="width: 100%;">
                    <v-btn prepend-icon="mdi-email" variant="outlined" color="orange" style="width: 100%;">
                        <p>{{ runtimeconfig.public.MAIL }}</p>
                    </v-btn>
                </a>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar theme="dark" class="navigation-bar" :elevation="0">
        <v-app-bar-title style="min-width: fit-content">
            <NuxtLink to="./" class="nav-title">
                <div class="logo-title">
                    <h4 style="font-size: 1.2rem">{{ runtimeconfig.public.TITLE }}</h4>
                </div>
            </NuxtLink>
        </v-app-bar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="burger mobile" v-if="menu"></v-app-bar-nav-icon>
        <a v-for="(item, index) in items" :href="'#' + item.value" v-if="menu" style="margin: 10px;" class="desktop">
            <v-btn variant="text">
                <p>{{ item.title }}</p>
            </v-btn>
        </a>
        <NuxtLink v-if="!menu" to="./" class="nav-back">
            <v-icon>mdi-arrow-left</v-icon>
        </NuxtLink>
    </v-app-bar>
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
            drawer: false,
            group: null,
            menu: true,
            items: [
                { title: 'Start', value: 'home' },
                { title: 'Schädlinge', value: 'service' },
                { title: 'Kunden', value: 'customer' },
                { title: 'Über uns', value: 'about' },
                { title: 'Kontakt', value: 'contact' },
            ],
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
        $route: {
            handler(to, from) {
                this.menu = to.name === '' || to.name === 'index';
            }, immediate: true
        }
    }
}
</script>

<style lang="scss">
a {
    color: white;
}

h4 {
    font-weight: normal;
}

.v-navigation-drawer__content {
    overflow-y: initial;
    overflow-x: initial;
    display: flex !important;
    flex-direction: column !important;

    p {
        font-size: 12px;
        color: #fff;
    }
}

.drawer-phone,
.drawer-mail {
    cursor: pointer;
}

.logo-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;
    font-size: 1.5rem;
    /* Adjust the font size as needed */
    font-weight: bold;
    /* Apply a bold font weight, if desired */
}
</style>