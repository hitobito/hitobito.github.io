Die Partei 'Die Mitte' wandte sich an die Entwickler von Hitobito mit dem Wunsch, den Status von Spendenzahlungen abrufen zu können. Als Nils im August 2021 seine Festanstellung bei Puzzle antrat und Teil des Teams Hitobito wurde, startete er mit dem Projekt EBICS.

![](/uploads/EBICS Hitobito.png)

## Bessere Übersicht über Spenden als Wunsch
Die Mitte nutzt das Briefmodul innerhalb Hitobito, um Spendenaufrufe per Brief an seine Mitglieder zu versenden. Es fehlte jedoch die Möglichkeit der Überprüfung, ob und in welcher Höhe Spenden eingingen und von welcher Spenderin oder von welchem Spender diese eingereicht wurden. Um die Spenden automatisiert tracken zu können, war es an der Zeit, das Feature EBICS innerhalb der Community Softwarelösung Hitobito zu implementieren.

## EBICS als internationaler Standard
EBICS ist der internetbasierte, internationale Kommunikationsstandard im Zahlungsverkehr zwischen Unternehmen und Banken. Der "Electronic Banking Internet Communication Standard" wird im einheitlichen Euro-Zahlungsverkehrsraum verwendet. Der Standard kann als sicherer Kommunikationskanal für die Einleitung von SEPA-Lastschriften und SEPA-Überweisungen über das Internet genutzt werden. 
EBICS ist für die Verwendung durch deutsche Banken vorgeschrieben und wurde auch von Banken in Frankreich und der Schweiz übernommen.

## Anbindung der Banken durch die User
Dank der Implementation von EBICS kann der Hitobito User nun selbstständig die Bank anbinden. Diese muss zunächst um die Aushändigung der nötigen technischen Informationen angefragt werden. Sobald die Daten in Hitobito eingepflegt sind, kann die Briefvorlage ausgefüllt, mit der Hitobito Instanz gedruckt und wiederum an die Bank verschickt werden. Sobald die Bank die Anmeldung geprüft hat, ist der Kanal freigeschaltet. 

## Tägliche Prüfung auf Spendeneingänge
Für 'Die Mitte' wurde Hitobito so programmiert, dass nun die Möglichkeit besteht, täglich zu prüfen, ob Zahlungen eingegangen sind. Zahlungen werden der richtigen Rechnung zugeordnet und in Hitobito eingespeist. 

## Implementation und Benutzeranleitung
Die Implementation von EBICS in Hitobito verlief nicht ganz reibungslos. Besonders herausfordernd war, dass die Dokumentationen der Banken nicht lückenlos waren. Dazu kam bei der PostFinance die Differenz zwischen der EBICS Anbindung der Testplattform und der finalen Liveversion, welche für Verwirrung sorgte. Erst nach der Anbindung und der Liveschaltung wurden bisher unbemerkte Fehler entdeckt, die es zu lösen galt. Die Implementation dauerte länger als ursprünglich geplant. Nach mehreren Wochen intensivem Austausch zwischen dem Hitobito Team und der Mitte läuft das Feature bei der Partei seit Januar 2022 wie geplant. Die Kommunikation zwischen Hitobito und der Bank erfolgt seither einfach, direkt und standardisiert. 

Die Benutzeranleitung für alle Hitobito User befindet sich hier: <a href="https://hitobito.readthedocs.io/de/latest/ebics.html" target="_blank">https://hitobito.readthedocs.io/de/latest/ebics.html</a>

Registriert innerhalb Hitobito sind bis heute die PostFinance und die Raiffeisen Bank. Möchtest du auch deine Bank innerhalb Hitobito mit EBICS anbinden? Unsere Entwickler helfen dir gerne. 
