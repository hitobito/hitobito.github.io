---
layout: docs
title: Zugriffskonzept
wikiPageName: Zugriffskonzept
menu: wiki
---

# Strukturbasierte Zugriffsrechte

## Karin ist Geschäftsleiter direkt im Dachverband
_technisch: layer_and_below_full direkt in Dachverband, inkl. contactData_
### Karin sieht: 
Karin hat vollen Zugriff auf ihrer Ebene und alle darunter liegenden Ebenen. Dadurch kann sie alle Personen im Dachverband, in Regionen und auf oberster Ebene der Ortsgruppen sehen und ändern. 
Nicht sichtbar und änderbar sind für sie alle Personen, die innerhalb einer Ortsgruppe, also in einer Untergruppe unter der Ortsgruppe, aufgehängt sind. 
Da Karin's Rolle als kontaktrelevant geführt ist (sog. ContactData-Flag, siehe unten), kann sie alle anderen Personen mit Kontaktrelevanz sehen, unabhängig von deren Position innerhalb der Struktur. 
 
### Karin sehen:  
Karin ist für alle anderen Personen mit Rechte innerhalb der Ebene des Dachverbands sichtbar. 
Auf Grund der Kontaktrelevanz von Karin's Rolle ist sie ebenfalls für alle anderen kontaktrelevanten Rollen sichtbar. 

## Luca ist ein Mitglied in einem Gremium im Dachverband
_technisch: group_read in Gremium ohne ContactData_
### Luca sieht: 
Luca sieht alle Mitglieder und Leitung innerhalb des Gremiums. Sonst sieht er niemanden ausserhalb des Gremiums. 
### Luca sehen:
Luca ist für Personen mit vollen Rechten (_layer_full_ oder _layer_and_below_full_) für die Dachverbandsebene sicht- und änderbar. Zusätzlich kann die Leitung innerhalb seines Gremiums seine Daten einsehen und ändern (_group_full_). Seine Kollegen mit gleicher Rolle im Gremium sehen seine Daten, können diese aber nicht ändern (_group_read_)

## Maria hat eine einfache Rolle in der Region
_technisch: group_read inkl. ContactData_
### Maria sieht
Maria kann alle Mitglieder ihrer Gruppe sehen, also alle Mitarbeitenden auf Regionsebene. 
Da Maria's Rolle als kontaktrelevant geführt ist (sog. ContactData-Flag, siehe unten), kann sie alle anderen Personen mit Kontaktrelevanz sehen, unabhängig von deren Position innerhalb der Struktur. 
### Maria sehen
Maria ist für alle anderen Personen mit Rechte innerhalb der Ebene des Dachverbands sichtbar. 
Auf Grund der Kontaktrelevanz von Maria's Rolle ist sie ebenfalls für alle anderen kontaktrelevanten Rollen sichtbar. 

## Petra leitet ein Gremium in der Region
_technisch: layer_read inkl. ContactData_
### Petra sieht: 
Petra sieht alle Personen in der Region inkl. Personen in allfälligen Untergruppen. Sie sieht jedoch keine Personen in Ortsgruppen, welche der Region angehängt sind. 
Da Petra's Rolle als kontaktrelevant geführt ist (sog. ContactData-Flag, siehe unten), kann sie alle anderen Personen mit Kontaktrelevanz sehen, unabhängig von deren Position innerhalb der Struktur. 

### Petra sehen
Petra ist für Personen auf Kantonaler oder Dachverbandsebene sichtbar, welche über eine Rolle mit Zugriff auf untergeordnete Ebenen besitzen (layer_and_below). Zudem sehen alle Personen in der Region ihre Daten, die über Rechte innerhalb der Gruppe oder innerhalb der Ebene besitzen. 
Auf Grund der Kontaktrelevanz von Petra's Rolle ist sie ebenfalls für alle anderen kontaktrelevanten Rollen sichtbar. 

## Anna leitet eine Ortsgruppe
_technisch: layer_full incl. ContactData_
### Anna sieht
Anna sieht alle Personen innerhalb der Ortsgruppe. 
Da Anna's Rolle als kontaktrelevant geführt ist (sog. ContactData-Flag, siehe unten), kann sie alle anderen Personen mit Kontaktrelevanz sehen, unabhängig von deren Position innerhalb der Struktur. 
### Anna sehen
Anna ist für Personen oberhalb der Ortsgruppe sichtbar, falls diese über das Recht besitzen, Personen unterhalb ihrer Ebene zu sehen.  
Zudem können ihre Kolleginnen und Kollegen innerhalb der Ortsgruppe ihre Daten sehen, falls sie über das Recht für die Gruppe oder die Ebene besitzen. 
Auf Grund der Kontaktrelevanz von Anna's Rolle ist sie ebenfalls für alle anderen kontaktrelevanten Rollen sichtbar. 

## Franz leitet eine Einheit innerhalb einer Ortsgruppe
_technisch: layer_read (ohne ContactData)_
### Franz sieht
Franz sieht alle Personen innerhalb der Ortsgruppe, kann diese aber nicht ändern. 
### Franz sehen
Franz ist für Personen in der Ortsgruppe sichtbar, falls diese das Recht besitzen, Personen innerhalb der ganzen Ebene zu sehen. Personen oberhalb der Ortsgruppe können Franz nicht sehen. 

## Jonas ist Mitglied innerhalb einer Gruppe in der Ortsgruppe
_technisch: none_
### Jonas sieht
Jonas sieht keine weiteren Personen. 
### Jonas sehen
Jonas ist für Personen in der Ortsgruppe sichtbar, falls diese das Recht besitzen, Personen innerhalb der ganzen Ebene zu sehen. Personen oberhalb der Ortsgruppe können Jonas nicht sehen. 

# Kumulierung von Rollen innerhalb der Struktur
Die Zugriffe durch mehrere Rollen kumulieren sich. So ist ein Mitglied einer Ortsgruppe, das gleichzeitig in der Region aktiv ist, trotzdem für die Regionsleitung sichtbar,. 

# Daten in Anlässen (Lagern, Kursen)
Teilnehmer in einem Anlass können die Teilnehmerliste einsehen und sehen dort ihre gegenseitigen Kontaktdaten. Die Daten sind nur im Kontext "Anlass" sichtbar, wenn über die Teilnehmerliste zur Person navigiert wird. 
Im Kontext einer "Gruppe", wenn über die Gruppenhierarchie zur Person navigiert wird, gelten die Zugriffsrechte gemäss den strukturbasierten Rechten oben. 

# Spezialfall Contact_Data
Ist die Rolle einer Person als kontaktrelevant markiert, so hat diese Person auf alle anderen Personen mit kontaktrelevanten Rollen Zugriff. Gleichzeitig ist sie auch für alle anderen Personen mit kontaktrelevanten Rollen sichtbar. 
Dies umfasst Rollen, welche häufig im Austausch mit Personen aus anderen Ortsgruppen stehen. 

# Rollenübersicht
--> Mandatenspezifisch
