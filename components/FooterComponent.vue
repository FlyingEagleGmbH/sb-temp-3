<template>
    <v-footer class="text-center d-flex flex-column" theme="dark" :elevation="3">

        <div class="footer-container">

            <div class="footer-container-image">
                <h3>{{ runtimeconfig.public.TITLE }}</h3>
                <p>Kundenorientierung steht bei uns an erster Stelle. Wir bieten schnelle Reaktionszeiten, flexible Terminvereinbarungen und faire Preise. Unser Ziel ist es, Ihnen eine sorgenfreie Umgebung zu bieten, indem wir Schädlinge effektiv beseitigen und Rückfälle verhindern.
</p>
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
            <h2>Kammerjäger Baden-Württemberg - Ihre Experten für Schädlingsbekämpfung</h2>

    <p>Willkommen bei Kammerjäger Baden-Württemberg, Ihrer vertrauenswürdigen Anlaufstelle für professionelle Schädlingsbekämpfung in der Region. Unser engagiertes Team von Kammerjägern ist spezialisiert auf die Beseitigung verschiedenster Schädlinge und bietet Lösungen für Probleme mit Schädlingen wie Wespen, Bettwanzen, Mäuse und vieles mehr.</p>

    <h3>Schädlingsbekämpfung in Baden-Württemberg: Wir sind Ihre erste Wahl</h3>

    <p>Unser Fokus liegt auf effizienter Schädlingsbekämpfung, um Ihre Umgebung sicher und schädlingsfrei zu halten. Unser umfassendes Leistungsspektrum umfasst:</p>

    <ol>
        <li>Kammerjäger-Service: Unsere zertifizierten Kammerjäger sind bestens ausgebildet und verfügen über das notwendige Know-how, um Schädlinge in Ihrem Zuhause oder Geschäft erfolgreich zu bekämpfen.</li>
        <li>Wespenbekämpfung: Wenn Wespen Ihr Leben beeinträchtigen, stehen wir Ihnen mit schnellen und effektiven Lösungen zur Verfügung. Unsere Wespenbekämpfer sorgen dafür, dass Sie sich wieder sicher fühlen können.</li>
        <li>Bettwanzenbekämpfung: Bettwanzen sind lästig und schwer loszuwerden. Mit unserer professionellen Bettwanzenbekämpfung sind Sie Bettwanzen schnell los und können wieder ungestört schlafen.</li>
        <li>Kammerjäger für Mäuse: Mäuse können erhebliche Schäden anrichten und gesundheitliche Risiken darstellen. Unsere Kammerjäger sind darauf spezialisiert, Mäuse effektiv zu beseitigen.</li>
    </ol>

    <p>Unsere Dienstleistungen stehen Ihnen in ganz Baden-Württemberg zur Verfügung. Wir verstehen, wie belastend Schädlingsprobleme sein können, und sind bestrebt, Ihnen schnell und zuverlässig zu helfen.</p>

    <p>Verlassen Sie sich auf Kammerjäger Baden-Württemberg, um Schädlinge in den Griff zu bekommen. Kontaktieren Sie uns noch heute für eine schädlingsfreie Umgebung und erleben Sie, wie einfach Schädlingsbekämpfung sein kann. Unser Team steht Ihnen zur Verfügung, um alle Ihre Schädlingsprobleme effektiv zu lösen.</p>
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