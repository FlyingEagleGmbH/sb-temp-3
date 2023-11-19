<template>
    <v-container fluid class="about-container" id="about">
        <h2 class="section-header">Über uns</h2>
        <v-card class="about-content">
            <v-img cover :src="'/images/people-disinfecting-biohazard-area.jpg'" class="fill-height" style="flex: 1; max-height: 300px" />
            <p class="about-text">
                Kammerjäger Franz - Ihr verlässlicher Partner gegen Schädlinge!
<br>
Wir sind Ihre Experten für Schädlingsbekämpfung in Baden-Württemberg. Mit unserer langjährigen Erfahrung und einem hochqualifizierten Team bieten wir effektive und umweltfreundliche Lösungen gegen Schädlinge. Schützen Sie Ihre Gesundheit und Ihr Zuhause - kontaktieren Sie uns noch heute für schnelle und professionelle Hilfe!
            </p>
        </v-card>
    </v-container>
</template>
<script lang="js">
export default {

}
</script>
<style lang="scss">
@import "/assets/scss/variables.scss";

.about-container {
    overflow: hidden;
    position: relative;
    background-color: $secondary;
    padding: 3%;
    padding-top: 0;
}

.about-content {
    padding: 20px;
    color: $secondary;
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;
    row-gap: 2rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
}

.about-text {
    color: $primary;
    flex: 1;
}

</style>