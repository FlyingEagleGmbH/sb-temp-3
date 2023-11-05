<template>
    <Head>
        <Meta name="robots" content="noindex"/>
    </Head>
    <v-container class="impressum-container" fluid>
        <div class="impressum">
            <v-card class="impressum-card" :elevation="1">
                <h3>Impressum</h3>
                <p>
                    Diese Webseite ist ein Angebot der Firma:
                    <br><br>
                    Flying Eagle GmbH (Gesellschaft mit beschränkter Haftung, Stammkapital: 25.000€)<br>
                    Geschäftssitz: Höhenweg 7, 35452 Heuchelheim
                    <br><br>
                    Telefon: <a :href="'tel:' + runtimeconfig.public.PHONE">{{ runtimeconfig.public.PHONE }}</a>
                    <br>
                    E-Mail: <a :href="'mailto:' + runtimeconfig.public.MAIL">{{ runtimeconfig.public.MAIL }}</a>
                    <br><br>
                    Vertretungsberechtigte Geschäftsführer: Herr Patrick Michael Seck
                    <br><br>
                    Registergericht: Amtsgericht Gießen<br>
                    Registernummer: HRB 10567<br>
                    Umsatzsteueridentifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE344929540
                </p>
                <h3>Kundeninformationen</h3>
                <p>
                    Verbraucherinformation gemäß Verordnung (EU) Nr. 524/2013: Zur außergerichtlichen Streitbeilegung
                    von
                    verbraucherrechtlichen Streitigkeiten hat die Europäische Kommission eine Plattform zur
                    Online-Streitbeilegung (OS) eingerichtet. Die Plattform finden Sie unter
                    <client-only>
                        <a href=" https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                            target="_blank">ec.europa.eu.</a>
                    </client-only>
                    <br><br>
                    Hinweis gemäß §36 Verbraucherstreitbeilegungsgesetz (VSBG): Wir werden nicht an einem
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle im Sinne des VSBG teilnehmen und
                    sind
                    hierzu auch nicht verpflichtet.
                </p>
                <h3>Haftung für Inhalte</h3>
                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                    Vollständigkeit
                    und
                    Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                    § 7
                    Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
                    8
                    bis
                    10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                    einer
                    konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                    wir
                    diese
                    Inhalte umgehend entfernen.
                </p>
                <h3>Haftung für Links</h3>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                    haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                    Seiten
                    wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren
                    zum
                    Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                    Seiten
                    ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <h3>Urheberecht</h3>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                    der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                    Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit
                    die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                    beachtet.
                    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                    Bekanntwerden
                    von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </v-card>
        </div>
    </v-container>
</template>

<script lang="js">
export default {
    setup() {

        return {
            runtimeconfig: useRuntimeConfig()
        }
    }
}
</script>

<style lang="scss"></style>