Im Frühling 2021 entwickelten die Lernenden unseres Partners Puzzle ITC den Mail Client für Hitobito. Mit diesem Feature wird es möglich, Mails aus verschiedenen Mailboxen direkt aus der Hitobito Web-Applikation zu verwalten. [Luca Brügger](https://www.puzzle.ch/de/blog/articles/author/lbruegger) erzählt, wie es dazu gekommen ist und wie er die Entwicklung erlebt hat.

## Mailings als wichtiges Feature in Hitobito
Mithilfe von Mailinglisten ermöglicht Hitobito, Mails an verschiedene Benutzergruppen zu versenden. Der Newsletter eines Regionalvereins wird beispielsweise monatlich an 500 Adressaten verschickt. Dazu wird eine E-Mail an eine definierte Zieladresse verschickt, welche wiederum an eine Mailingliste gekoppelt ist. Sobald dieses Mail versendet wird, landet es in einem sogenannten Catch-All Konto. Im Catch-All Konto werden alle Mails gesammelt und danach an die Empfänger der jeweiligen Mailingliste gesendet. Mails werden in Batches verschickt (diese Batches kann man sich als Päckchen von jeweils z.B. 15 Mails vorstellen, wobei die Grösse der Päckchen definiert werden kann).

In seltenen Fällen kann es vorkommen, dass ein Fehler während der Verarbeitung auftritt und folglich nur ein Teil an die Mailingliste versendet wird. Ein solcher Fehler kann auftreten, wenn der Verarbeitungsjob unerwartet gestoppt wird. Dies kann passieren, wenn ein Wartungsfenster alle Prozesse stoppt, ein neues Deployment durchgeführt wird oder wenn der Arbeitsspeicher nicht ausreicht. In diesem Fall müssten die Ressourcen innerhalb der Applikation erhöht werden.

## Wie der Mail Client hilft
Um dem Fehler rasch auf die Spur zu kommen und ohne die Hilfe des Support-Teams handeln zu können, soll der Mail Client weiterhelfen. Dank dem Mail Client erhalten Benutzerinnen und Benutzer eine Status-Übersicht über bereits versendete Mails, fehlgeschlagene Mails und Mails, die im Spam Ordner gelandet sind. Mails, die in der Inbox oder im Spam liegen, können gelöscht werden. Mails, welche in der Failed Mailbox liegen, können bewusst nicht mehr verschoben werden. Der Prozess des Fehlerfindens kann so vereinfacht werden und fehlgeschlagene Versände können rasch und genau untersucht werden.

![](/uploads/Mails_Navigation.png)

## Prozess bis zum fertigen Feature
Die Entwicklung des Features war eine grosse Herausforderung, da ich die Applikation nur wenig kannte. Dank einer guten Einführung erhielt ich einen besseren Überblick über die Zusammenhänge und wir kamen immer besser voran. Zuerst begannen wir damit, die separate Ansicht zum Mail Client zu erstellen. Zunächst wurde der Eintrag „Mails“ in der Seitennavigation als weiterer Menüpunkt hinzugefügt. Danach konnten wir die Ansicht erstellen und diese mit den verschiedenen Funktionen ausstatten. Fürs Wechseln zwischen der Mailbox haben wir uns für ein Menü mit drei nebeneinanderliegenden Buttons entschieden. Für die Darstellung der Mails nutzen wir eine Tabelle mit den Spalten Betreff, Absender, Status und Datum. Damit konnten wir die wichtigsten Mail-Eigenschaften abdecken.  

![](/uploads/Mails_Uebersicht.png)

Neben der separaten Ansicht mussten wir auch den technischen Teil entwickeln. Dafür mussten wir die Schnittstelle zum Mailserver ausbauen. Somit können die Mails geladen, verschoben und gelöscht werden. Ebenfalls passten wir die Berechtigungen an, damit nur entsprechende Personen Zugriff auf die Mailverwaltung haben.

Die Freude war gross, als wir das Feature nach Abschluss an einen laufenden Puzzle Mailserver anbinden konnten. Wir waren erleichtert, als nach der nötigen Konfiguration alles funktionierte wie erhofft. Die Mails wurden im Mail Client angezeigt und es konnte mit diesen wie geplant interagiert werden.

## Um eine Erfahrung reicher
Trotz den Sorgen zu Beginn der Entwicklung konnten wir den Mail Client nach einigen Herausforderungen erfolgreich abschliessen. Für mich war es lehrreich, verschiedene Teile des Features zu implementieren, diese Schritt für Schritt zusammenzufügen um danach ein funktionierendes Feature zu erhalten. Ich konnte viele Erkenntnisse mitnehmen und am meisten freue ich mich nun, dass die Hitobito Benutzerinnen und Benutzer ihre Mails benutzerfreundlich verwalten können.
