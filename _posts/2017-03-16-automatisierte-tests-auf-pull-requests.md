---
title: Automatisierte Tests auf Pull Requests mit Travis
date: 2017-03-16 10:00:00 GMT
layout: post
authors:
    - Roland
---

Contributions für neuen Code werden in Open Source Projekten mit
Pull Requests gemacht. Damit wir wissen, dass mit dem neuen Code nichts vom
bisherigen kaputt gemacht wird, testen Entwickler jeweils den ganzen Code mit
verschiedenen Tests, die schauen ob immer noch alles so funktioniert wie bisher.

[Neu haben wir Github so eingerichtet](https://github.com/hitobito/hitobito/issues/153),
dass diese Tests automatisch durchgeführt
werden, wenn ein Entwickler einen Pull Request macht. So erhält ein Entwickler
direkt Feedback, ob es überhaupt in Frage kommt, dass wir diesen Pull Request
annehmen.

## Umgesetzt mit Travis

Github gibt uns mit Travis die Möglichkeit zu tun. Danke an
[@kronn](https://github.com/kronn) für die Umsetzung!
