Um Hitobito vor potentiellen Angreifern zu schützen, wurde die Zwei-Faktor-Authentifizierung (2FA) in den Login-Prozess von Hitobito integriert. Das Absichern des Logins mit einem zweiten Faktor erschwert den unberechtigten Zugriff mit geklauten Anmeldedaten. Nils beschäftigte sich mit dem Projekt als Teil seiner IPA im April 2021.

## Höhere Sicherheit dank zweitem Faktor
Softwaresicherheit ist ein wichtiges Thema, auf welches wir auch bei Hitobito grossen Wert legen. Die Softwaresicherheit schützt Anwender oder Unternehmen vor Risiken, die im Umgang mit der Nutzung von Software entstehen können. Um sichere Software zu realisieren, sind angepasste Entwicklungsprozesse notwendig.

Die Zwei-Faktor-Authentifizierung ist eine Sicherheitsprozedur, bei der ein Anwender zwei unterschiedliche und insbesondere unabhängige Merkmale bereitstellt, um sich zu identifizieren. Ein typisches Beispiel beim Geldautomaten ist die Bankkarte und ein PIN, den sich der/die Nutzerin merken muss. Bei den beiden Merkmalen wird gelegentlich von etwas, das „man hat“ und etwas, das „man weiss” gesprochen. Die Kombination beider Merkmale macht es einer fremden Person schwieriger, auf das Bankkonto der Nutzerin zuzugreifen, weil dazu beide Elemente benötigt werden, also der physische Gegenstand sowie die PIN.

![](/uploads/Hitobito2FA.png)

Bis zum Beginn des Projekts geschah die Authentifizierung in Hitobito mittels Login per E-Mail Adresse und Passwort. Diese Daten wurden in der Datenbank von Hitobito abgespeichert und die Logik mit dem Gems "Devise" bereitgestellt. Neu sollte der/die Nutzerin zusätzlich mit dem Smartphone eine App verwenden. Durch das Scannen eines QR-Codes wird ein sechsstelliger Code generiert, welcher in Hitobito zur Authentifizierung eingegeben werden muss.

## Integration im Rahmen einer Projektarbeit
Ziel war es, den zweiten Faktor reibungslos in die bestehende Architektur von Hitobito integrieren zu können. Der geschriebene Code wurde mittels verschiedener Testmethoden automatisiert überprüft und abgesichert. Die Änderungen wurden im Core Projekt vorgenommen und somit wird der zweite Faktor mit den neueren Hitobito Versionen direkt mitgeliefert.

Das Resultat bietet Hitobito und den Kunden mit seiner freiwilligen aber sicherheitsverbessernden Funktionalitäten einen grossen Mehrwert. Die Migration ist klein und der zweite Faktor ist schnell im Betrieb. Erste Gespräche zeigen, dass die GLP, die Mitte sowie die Pfadi planen, die Zwei-Faktor-Authentifizierung in ihrem Verband unter den Usern einzuführen.

Nils beschreibt die Umsetzung des Projekts als Highlight seiner IPA: "Ich konnte ein Feature umsetzen, welches nicht gerade alltäglich ist. Zudem war alleine das Einbauen eines zweiten Gerätes sehr spannend für mich. Der Moment, indem die Authentifizierung endlich funktionierte und ich auf meinem Telefon einen Code erhielt, welcher mich korrekt im Hitobito authentifizierte, war für mich der beste Moment in dieser gesamten Arbeit."

Nils hat seine IPA natürlich mit Bravur bestanden. Herzlichen Glückwunsch, Nils! 

Die Benutzeranleitung zu 2FA findest du hier: <a href=https://hitobito.readthedocs.io/de/latest/two_factor_authentication.html" target="_blank">https://hitobito.readthedocs.io/de/latest/two_factor_authentication.html</a>
