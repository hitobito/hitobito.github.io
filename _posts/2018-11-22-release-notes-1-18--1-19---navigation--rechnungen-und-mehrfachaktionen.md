---
title: Release Notes 1.18 / 1.19 - Navigation / Rechnungen und Mehrfachaktionen
authors:
  - roland
---

![](/uploads/desktopdekstop.png)
{: .present-before-paste}

Die Versionen 1.18 und 1.19 bringen einige grössere Änderungen mit sich: So können neu für die Schweiz Rechnungen erstellt werden. Weiter haben wir die Navigation überarbeitet, damit man auch auf Mobile besser navigieren kann und dank der Mehrfachselektion können für mehrere Personen gleichzeitig Rollen hinzugefügt, gelöscht und verschoben werden.
{: .present-before-paste}

## Rechnungswesen

Neu können Rollen, welche die `:finance` Berechtigung haben Rechnungen erstellen. Das wichtigste in Kürze:
{: .present-before-paste}

* Jede Ebene (Verband, Kanton, Region, Lokalgruppe) hat ihre eigenen (Stamm-)Daten. Ein Kassier vom Dachverband sieht nur die Rechnungen vom Dachverband.
* Rechnungen werden von Einzelpersonen/Personenlisten oder Teilnehmerlisten erstellt. Wenn du eine Rechnung erstellen willst, navigiere zur Person und klicke auf den Button `Rechnung erstellen`. Bei Personenlisten geht die Rechnung an alle ausgewählten Personen.

Vielen Dank an dieser Stelle der Pfadi Schweiz, Jungwacht Blauring, Insieme Schweiz und Cevi, welche die Entwicklung des Rechnungsmoduls ermöglicht haben.
{: .present-before-paste}

Es wäre toll, wenn uns jemand dabei unterstützen könnte, die Anleitung hierzu oder zu anderen Teilen von hitobito auszuarbeiten. Melde dich doch bei [roland@hitobito.com](roland@hitobito.com)
{: .present-before-paste}

## Navigation

![](/uploads/mobilemobile.png)
{: .present-before-paste}

Die Navigation funktioniert jetzt auch gut auf dem Handy. Dafür haben wir die Navigation oben und links kombiniert.
{: .present-before-paste}

## Mehrfachaktionen

![](/uploads/multi-actions.gif)
{: .present-before-paste}

Mehrere Personen können jetzt ausgewählt werden, um deren Rollen zu ändern (hinzufügen, löschen, verschieben). Auch kann man so mehrere ausgewählte Personen zu einem Anlass oder Kurs hinzufügen.
{: .present-before-paste}

Hat man Personen ausgewählt, werden auch nur diese exportiert und es werden nur zu den ausgewählten Personen Rechnung gestellt.
{: .present-before-paste}

## Haushalte zusammenfassen

![](https://content.screencast.com/users/RolandStuder/folders/hitobito/media/ad6850c1-6a3e-48ca-818b-23575421a501/00000036.png)
{: .present-before-paste}

Personen, die in einem Haushalt zusammenwohnen, können jetzt verknüpft werden. Beim Export kannst du dann wählen, ob du auf einer Zeile die Person oder den Haushalt haben möchtest.
{: .present-before-paste}

## Mailchimp Integration

Schön formatierte Newsletterversände können jetzt mit [Mailchimp](https://mailchimp.com/) realisiert werden, du kannst jetzt per Knopfdruck ein Abo mit Mailchimp abgleichen. Zu beachten:
{: .present-before-paste}

* Die MailChimp-Liste wird durch den Export überschrieben
* Die MailChimp-Liste wird auf Knopfdruck exportiert, nicht periodisch

Mehr Informationen findest du in der [Dokumentation](https://hitobito.readthedocs.io/de/latest/mailing_lists_mailchimp_export.html).
{: .present-before-paste}

## Weitere Änderungen

* Alle Personenfilter sind zusammengefasst und lassen sich abspeichern, so können auch Rollen- und Qualifikationsfilter jetzt kombiniert werden.
* Personenfilter erlauben den Gültigzeitszeitraum einer Rolle einzuschränken. Zu beachten: Aufgrund des Berechtigungssystems habt ihr in den meisten Fällen auf Personen mit abgelaufenen Rollen keinen Zugriff mehr.
* Es gibt eine neue Berechtigung `:impersonation`, mit dieser kann man sich als eine andere Person einloggen, praktisch zum Testen und für Support-Personen.
* Bei Mailinglisten kann man wählen, an welche E-Mail Adressen einer Person diese verschickt werden soll (basierend auf den vergebenen E-Mail Labels.
* ICAL Kalender Export für Anlässe
* PDF-Export für Personen
* Grosse Exports werden im Hintergrund heruntergeladen.
* In Teilnehmerlisten kann man jetzt direkt nach bestimmten Personen suchen.
* Technische Information: Ab Version 1.18.9 benötigt die Applikation mindestens Ruby 2.2