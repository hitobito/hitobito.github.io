# Release-Notes: Übersicht über eigene Abos, Hilfetexte & mehr

Wir haben für die SaaS-Version von hitobito eine neue Version ausgeliefert. Neben kleineren Änderungen, die ihr im Link auf die Release-Notes im Footer eurer Applikation findet, möchten wir folgende Updates etwas ausführlicher beleuchten:

## Liste "Meine Abos" auf der Person
Als Benutzer hatte ich bis heute keine Übersicht, für welche Abos ich mich überhaupt anmelden kann und welche davon ich abonniert habe. Neu findet ihr auf eurem Benutzerprofil einen Tab "Abos" mit jeweils einer Liste von bereits abonnierten Newslettern und einer weiteren mit Newslettern, die ihr zusätzlich abonnieren könnt.

![](/uploads/MeineAbos.png)

## Hilfetexte für Seiten und Formulare
Die Umsetzung dieses Features zeigt, wie aus der Community Neuerungen selber initiert und mit professioneller Hilfe schliesslich im Core von hitobito landen und somit für alle Nutzergruppen zugänglich werden: 
Im Rahmen eines Zivi-Einsatzes für die PBS wurde ein erster Wurf einer dynamischen Hilfestellung für Seiten und Felder implementiert. Diese Version wurde danach von den Puzzle-Entwicklern geprüft und nach einem kurzen Austausch und einigen Verbesserungen ausgeliefert. Im Issue auf (Github)[https://github.com/hitobito/hitobito/issues/811] seht ihr die Details dazu und eine kurze Anleitung, wie ihr die Hilfetexte für eure Bedürfnisse anwenden und abfüllen könnt.
Ein grosses Merci an dieser Stelle an die beteiligten Organisationen!

## Stack-Upgrade und Ausbau der Schnittstellen
Weiter haben wir bereits in einem früheren Release das Framework von hitobito aktualisiert. Neu basiert hitobito auf Ruby 2.5 und Rails 6. Mit dem aktuellen Release gibt es zudem kleinere Verbesserung der Mailchimp Integration und am Rechnungsmodul sowie Erweiterungen an den API's und der Authentifizierung via OAuth:
- Neue API-Endpoints für Gruppen-Hierarchie und Abos
- Berechtigungen werden im OAuth-Profil mitgeliefert
- Eigene OAuth-Autorisierungen können entfernt werden
- OIDC für Oauth
- Mehr Daten in der JSON-API
