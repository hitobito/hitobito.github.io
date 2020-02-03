---
published: true
title: Neue Mitgliederverwaltungslösung für den Schweizer Blasmusikverband SBV
---
Der Schweizer Blasmusikverband (SBV) ist ein Zusammenschluss von 32 Verbänden, welcher über 1900
Vereine und rund 67‘000 Musizierende umfasst. Anfang 2019 hat der SBV hitobito als neue
Verbandsverwaltungssoftware eingeführt. Dies mit dem Ziel, den Aufwand für die Datenpflege zu reduzieren, Redundanzen zu beseitigen und zusätzlichen Nutzen für die Anwender und die angegliederten Verbände zu generieren.

## Ausgangslage

Die wichtigsten Anwendungsfälle der Verbandssoftware stellen neben der Mitgliederverwaltung das
Erfassen der SUISA-Leistungen, die Kommunikation mit den Mitgliedern sowie Veranstaltungen und
Weiterbildungen dar (wobei letztere nicht Bestandteil der Ausschreibungen waren). Die Lösung sollte zudem die Mehrsprachigkeit innerhalb der Verbände sowie einen hohen Datenschutz berücksichtigen.

![SBV_Systemuebersicht.png]({{site.baseurl}}/_posts/SBV_Systemuebersicht.png)
{: .present-before-paste}


## Lösung/Projekt
Das Projekt wurde zusammen mit dem Projektteam des SBV und Puzzle ITC als Entwicklungspartner agil umgesetzt. Die Schwerpunkte bildeten das Grundpaket mit dem Abbilden der dezentralen
Organisationsstruktur sowie damit verbundenen Rollen und Berechtigungen, die SUISA-Erfassung, das
für die Mitgliederpflege wichtige Veteranenwesen sowie Anlässe.

### Schwerpunkt SUISA-Erfassung
Das SUISA-Modul wurde dabei gänzlich neu auf die Bedürfnisse des SBV umgesetzt. Die SUISA ist die
Genossenschaft der Urheber und Verleger von Musik. Über 37 000 Komponisten, Textautoren und
Musikverleger sind darin organisiert. Die SUISA zieht für sie Urheberrechtsentschädigungen ein, wenn jemand in der Schweiz und in Liechtenstein ihre Musik öffentlich nutzt. Der SBV gehört zu diesen Nutzern und liefert der SUISA einmal im Jahr eine Übersicht der gespielten Titel.

In den abgelösten Systemen wurden diese Titel mehrheitlich einmal im Jahr von den
Verantwortlichen in den Vereinen erfasst. Mit hitobito sollte dies einfacher und vor allem auch
über Mobile Geräte möglich werden, damit die gespielten Titel gleich nach einer Aufführung
erfasst werden können.

Für die neuen Anwendungsfälle wurden in einem ersten Schritt mit einfachen “Mockups“ Benutzer-
tests durchgeführt. Diese brachten wichtige Erkenntnisse mit sich, welche bei der Entwicklung
eingeflossen sind. Zudem konnte mit den Mockups die verschiedenen Sichten und Bedürfnisse der
unterschiedlichen Rollen anschaulich diskutiert werden.

![mobile.png]({{site.baseurl}}/_posts/mobile.png)


Neben dem Erfassen der Aufführungen wurde der Prozess für das Erinnern, Abschliessen und
Einreichen der Listen automatisiert und übersichtlich gestaltet.

Die umfangreichen Werkliste der SUISA wird aktuell noch redundant in hitobito geführt. Eine
Schnittstelle zum direkten Datenaustausch soll bei der SUISA in nächster Zeit zur Verfügung gestellt werden.

### Datenmigration und Einführung
Die Migration der bestehenden Daten stellte eine der grössten Herausforderungen im Projekt dar. Beim SBV waren vor der Ablösung zwei verschiedene Systeme mit mehreren Mandanten im Einsatz. Bei der Migration auf die zentrale Datenbank mussten dabei in mehreren Schritten möglichst viele redundante Personen, Vereine und Verbände sprachlich sowie inhaltlich bereinigt und auf die neuen Strukturen und Rollen angepasst werden.

In einem Verband mit rund 60‘000 Mitgliedern stellt auch die Planung der Einführung eine besondere
Herausforderung dar. Um die Benutzer auf die neue Lösung vorzubereiten, wurden mehrere Workshops
durchgeführt und Schulungsvideos für die einzelnen Anwendungsfälle erstellt.

Das Projekt konnte innerhalb des gegebenen zeitlichen- und finanziellen Rahmens erfolgreich umgesetzt und eingeführt werden. Da sich bereits weitere Verbände für die Lösung interessieren, wurde im Nachgang zur Einführung eine sogenannte “Superstruktur“ aufgebaut, damit sich diese mit
vergleichsweise wenig Aufwand anschliessen können.

Der generelle Einstieg für die Mitglieder präsentiert sich neu wie folgt (die Ansicht variiert je nach Rollen und Berechtigungen einer Person):

![SBV_Screen.png]({{site.baseurl}}/_posts/SBV_Screen.png)


## Fazit und Ausblick
Mit hitobito hat der SBV eine offene und zukunftsfähige Lösung aufgebaut. Am Beispiel des
Eidgenössischen Musikfests 2021 zeigt sich, dass eine vereinheitlichte Datenbank mit offenen
Schnittstellen ein grosses Bedürfnis für Verbände und Organisatoren darstellt. Mit dem lückenlosen Abbilden der verschiedenen Rollen (Mitglied, Vorstand, Kommissionen) besteht auch die Grundlage, um den heute noch in Papierform ausgestellten Musikerpass in Zukunft digital abzubilden. Weiter soll in Zukunft eine Schnittstelle zur SUISA aufgebaut werden, damit Redundanzen in den Werklisten eliminiert werden können.
