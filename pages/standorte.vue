<template>
    <Head><Meta Name="robots" content="noindex" /> </Head>
    <v-container class="backlink-container" fluid>
        <div class="backlinks">
            <v-card class="backlink-card" :elevation="3">
                <v-card-title class="backlink-title">Einsatzgebiete</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="backlink-card-text">
                    <v-chip v-for="location in filteredLocations" :key="location[1]" @click="openLink(location[0])"
                        class="ma-1 backlink-chip">
                        <p>{{ location[1] }}</p>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="backlink-card-actions">
                    <v-text-field v-model="filterText" label="Filtern nach Standort" class="filter-field"
                        @input="filterLocations"></v-text-field>
                    <v-btn color="error" class="filter-btn" variant="text" @click="resetFilter">
                        <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<script lang="js">
export default {
    computed: {
        filteredLocations() {
            if (!this.filterText) {
                return this.items;
            }
            return this.items.filter(location =>
                location[0].toLowerCase().includes(this.filterText.toLowerCase())
            );
        }
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank');
        },
        filterLocations() {
            // Filterfunktion für die Standorte
            // Kann angepasst werden, um weitere Filterkriterien hinzuzufügen
        },
        resetFilter() {
            this.filterText = '';
        },
    },
    data: () => ({
        filterText: '',
        items: [],
    }),
    async mounted() {
        const { $url } = useNuxtApp();
        const locations = await fetch($url() + "/json/locations.json")
            .then(resp => resp.json());
        this.items = Object.entries(locations);
    }
}
</script>

<style>
.backlink-container {
    padding: 0;
}

.backlinks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
}

.backlink-card {
    padding: 25px;
    margin: 5%;
    width: 90%;
}

.backlink-title {
    font-size: max(2rem, 20px);
    padding-left: 0;
    margin-bottom: 10px;
}

.backlink-card-text {
    padding: 0;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
}

.backlink-chip {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-width: fit-content;
    max-width: 200px;
}

.backlink-chip p {
    font-size: 16px;
}

.backlink-card-actions {
    margin-top: 20px;
    padding: 0;
}

.filter-field .v-field__input {
    min-height: none !important;
    padding: 10px;
}

.filter-field .v-input__details {
    display: none;
}

.filter-btn {
    margin-left: 1rem;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>