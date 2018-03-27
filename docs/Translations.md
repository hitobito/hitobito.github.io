---
layout: docs
title: Translations
wikiPageName: Translations
menu: wiki
---

Die Übersetzung erfolgt auf der Online Plattform Transifex.com.

Registrieren Sie sich auf der Plattform und beantragen Sie für die beiden Teilprojekte Zugriff diese zu übersetzen, wir werden Sie dann freigeben, damit Sie Übersetzungen eintragen können.
Für ein Projekt müssen jeweils zwei Teile übersetzt werden:

* https://www.transifex.com/projects/p/hitobito - dieser Teil wird von allen hitobito Projekten geteilt, er gilt also für alle gleich und darf KEINE organisationsspezifischen Ausdrücke enthalten.
* und https://www.transifex.com/projects/p/hitobito_[ORGANISATIONSNAME] - hier werden die spezifischen Texte hinterlegt, die nur für genau ihre Organisation gelten.

## Einige Hinweise:

Die Texte enthalten teilweise Platzhalter, welche mit Prozentzeichen und geschweiften Klammern eingefügt werden: %{placeholder}. Diese Platzhalter sind in der Regel englische Wörter und dürfen NICHT übersetzt werden, müssen also genau so in die anderen Sprachen übernommen werden. Ansonsten treten in der laufenden Applikation Fehler auf.

Gewisse Texte enthalten ebenfalls HTML Tags in eckigen Klammern: `<b>`. Diese dienen oft zur Formatierung der Texte und sollten bei den entsprechenden Teilen ebenfalls genau so übernommen werden. Auf jedes öffnende Tag (`<b>`) muss zwingend ein entsprechendes schliessendes Tag mit Schrägstrich folgen (`</b>`).

## Wie kann ich meine Übersetzungen kontrollieren.

Wenn alles richtig konfiguriert ist, werden die Übersetzungen von Transifex jeden Tag für die Testumgebung/Integrationsumgebung übernommmen. Falls nicht kontaktierst du. du support@hitobito.com
