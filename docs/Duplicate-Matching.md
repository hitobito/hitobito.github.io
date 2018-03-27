---
layout: docs
title: Duplicate Matching
wikiPageName: Duplicate-Matching
menu: wiki
---

Beim Import versucht hitobito bestehende Datensätze mit neu importierten abzugleichen.

Folgende Strategien werden darauf angewandt:

## Matching über E-Mailadresse oder Personennummer

- Wenn die primäre Email-Adresse übereinstimmt ist ein Duplikat
- Bei Insieme Wagon: Wenn die Personennummer / Adressnummer übereinstimmt ist es ein Duplikat

## Matching über Personendaten

Wenn Vorname, Nachname und Firmenname übereinstimmen... (Ist ein Feld leer, so wird ignoriert. Beispiel `Firmenname: 20min Vorname: Roland` matched mit `Firmenname: 20min: Vorname: ''` dass kann zu verwirrendem Verhalten fürhen, siehe [Issue 238](https://github.com/hitobito/hitobito/issues/238#issuecomment-301039255))

... dann wird geprüft, ob sich die PLZ oder das Geburtsdatum unterscheiden.

Findet hitobito keine Unterscheidung, so wird das als derselbe Datensatz interpretiert, auch wenn PLZ oder Geburtsdatum beim einem der vergleichenden Datensätze oder auch bei beiden fehlen.

-- Stand vom 12. Dezember 2017 siehe entsprechenden Code (https://github.com/hitobito/hitobito/blob/92db15a8e375d93f9634c3138335169e8dd6b76a/app/domain/import/person_doublette_finder.rb)
