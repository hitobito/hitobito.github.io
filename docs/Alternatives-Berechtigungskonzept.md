---
layout: docs
title: Alternatives Berechtigungskonzept
wikiPageName: Alternatives-Berechtigungskonzept
menu: wiki
---

Das bestehende Berechtigungskonzept ist oft schwierig nachzuvollziehen, und zwingt Personen auf eine bestimmte Art zu organisieren. Hier ein Entwurf für eine Alternative. Dies hier ist ein früher Draft von etwas, was mir schon immer im Kopf herumgeistern. Ist eigentlich eher etwas was es zu diskutieren gilt, weniger etwas was fix im Wiki drin sein soll. Aber es ist mir noch zu unreif und zu früh das als Issue oder im Forum in die Diskussion zu geben.

## Vorteile des aktuellen Gruppen / Rollenkonzept

Die Vorteile des Systems sind, dass hierarchisch Untergruppen selbst organisiseren können, z. B. bei Arbeitsgruppen, welche sich selbst aktualisieren können, oder Stufengruppen mit Stufenleitern wo das gut klappt.

* Wir geben eine innere Struktur vor.
* Durch die Rollenzuteilung erhalte ich automatisch die korrekten Rechte, bei einer Umteilung verändern sich die korrekt nach.
* Konzept wie Arbeitsgruppen mit lokaler Berechtigung für genau diese Arbeitsgruppe sind schwieriger abzubilden, oder es braucht ein separates Konzept dafür.

## Nachteile des aktuellen Konzepts

Das System beinhaltete dadurch relativ grosse Komplexität. Wer hat auf wen Zugriff wieso. 

* Wer hat auf wen wieso Zugriff? Scheint manchmal überkompliziert herauszufinden was jetzt eigentlich gilt.
* Ich bin gezwungene eine innere Struktur zu finden.
* Das Konzept, dass ich meine Rolle nur innerhalb einer bestimmten Gruppe haben kann ist nicht immer nachvollziehbar.
* Es ist auch schwierig für Verschiebungen von Liste zu Liste das sicherzustellen.
* Bei einigen Situationen kommt man an die Grenze, wo man dann doch nicht abbilden kann was man will.

## Neues Konzept

Ein einfacheres Konzept wäre die Hierachie innerhalb der Ebene zu ignorieren und stattdessen voll auf Rollen zu setzen, was gesehen werden kann.

Beispiel einer Rolle:

````
name: Präsident
layer: Kanton
lesezugriff:
 - dachverband [Geschäftsstellen_Leitung, Geschäftsstellen_Mitglied, Vorstand, ...]
 - dieser_kanton [:all]
 - andere_kantone [Präsident, Geschäftsstellen_Leitung, Geschäftsstellen_Mitglied]
 - ortsgruppen_von_kanton [:all, :not(mitglieder, externe Kontakte)]
 - ortsgrupppen_ausserhalb_kanton [Leitung]
...

````

Das wäre natürlich eine Steuern, die viel feingranularer wäre, damit auch mehr Aufwand am Anfang bedeuten würde. Vielleicht geht sie auch zu weit, ob man Nachbarn und so auch einschliesst ist fraglich. Aber zum Beispiel hat heute ein Stufenleiter in einer Ortsgruppe unter Umständen gar keinen Zugriff auf seinen Abteilungsleiter, was eigentlich ziemlich absurd ist.

Einfacheres Beispiel:

````
rolle: Stufenleiter Wölfli
layer: Abteilung
lesezugriff:
  - übergeordnetem_kanton [Geschäftsstellen_Leitung, Geschäftsstellen_Mitglied]
  - diese_ortsgruppe [leiter, teilnehmer]
schreibzugriff:
  - diese_ortsgruppe [Stufenleiter_Wöfli, Wölfli]
````

Das zweite Beispiel zeigt auch gleich den Nachteil des neuen Konzepts, ich verliere den Scope, so kann ich das nicht auf eine bestimmte Gruppe sondern nur noch auf Rollen einschränken.

Letzteres liesse sich aber vielleicht eben anders abwickeln. Indem ich Personen zusätzlich in Untergruppen zuteile, wo ich ihnen eine Berechtigung erteile (du darfst in dieser Gruppe Personen verändern), die unabhängig von der zugeteilten Rolle sind, mit dem Risiko, dass ich dann bei einer Änderung vielleicht vergessen, dass er dort noch zugeteilt ist.

Interessant wäre natürlich, wenn ich dann lokal meine Rechte anpassen könnte. Überschreiben könnte, aber das ist wohl Luxus.

## Teilabdeckung durch konfigurierbare Listen

Man könnte natürlich auch mit Listen gewisse Dinge abdecken, z. B. statt all die :contact_data zu verwenden, könnte ein Kanton eine Liste anlegen mit allen "Abteilungsleitern" und dann festlegen, dass diese für alle Teilnehmer eingesehen werden kann.

## Ein Hauptaspekt: Ebenen stärken / Untergruppen freier

* Ebenen und Rollen mit Berechtigungen, dass muss sein und das passt auch.
* Untergruppenkonzept ist aber oft holprig
* Problematik ist vielleicht, dass Ebenen / Untergruppen zu eng verbandelt sind. Eine Arbeitsgruppe braucht eigentlich nicht wirklich einen Ort in der Hierarchie, sie dürfte ausserhalb bestehen.
* Dinge ausserhalb der Hierarchie gibt es eigentlich nicht, ausser mit :contact_data.
