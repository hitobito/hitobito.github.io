---
layout: docs
title: SSL Zertifikate
wikiPageName: SSL-Zertifikate
menu: wiki
---

Für Kunde:

- Zertifikat bei https://www.rapidssl.com/ bestellen.
- Auf sicherer Weise an uns schicken
- komplettes Email vom SSL Zertifikatsprovider an Sys weiterschicken.

Für /sys:

- kunde liefert crt, csr, key
- sicherstellen, das intermediate Zertifikate auch stimmen.
- alle 3 auf puppetmaster /etc/puppet/ssl_filestore ablegen
- in vhostkonfig puppetisieren
