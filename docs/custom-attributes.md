---
layout: docs
title: custom attributes
wikiPageName: custom-attributes
menu: wiki
---

## Zustätzliche Personenattribute:

Folgende Angaben brauchen wir pro Personenattribut:

Bitte nur ein Github-Issue erstellen und dort alle Attribute festhalten! Für spätere Ergänzungen legen wir einzelne weitere Tickets an. Sowie falls es um spezielle Felder mit Autosuggest oder Relationen zu anderen Modellen geht.

### [Bezeichung des Attributes]
 
* **Darstellung**: Einzeiliges Textfeld / Mehrzeiliges Textfeld (wie viele Zeilen) / Radio-Buttons / Dropdown
* **Validierungsregeln**: Text / nur Zahl / Maximallänge? / E-Mailadresse?
* **Besonderheiten**:
* **Mehrsprachigkeit**: Übersetzen (geht nur wenn die Attribute eine fixierte Auswahl sind) / Nicht übersetzen (z. B. bei Anrede will ich, dass ich eine Anrede aus allen Sprachen auswählen kann).
* **Wo Berücksichtigen?:**
  * Export _Adressliste_ / Export _Abo_: Ja / Nein (Normale Adressliste)
  * Export _Alle Angaben_: Ja / Nein (Empfehlung: Immer Ja)
  * JSON API Index: Ja / Nein (Schnittstelle Auflistung von Personen, braucht es dort das Attribut?)
  * JSON API Index: Ja / Nein (Schnittstelle Detailinformation einer Personen, braucht es dort das Attribut? Empfehlung Ja)
  * Auffindbarkeit in Volltextsuche: Ja / Nein (Soll das Attribut berücksichtig werden, wenn ich die Volltextsuche oben rechts benutze?)

Template für copy&paste:
 
    ### Bezeichnung
    * **Darstellung**: Einzeiliges Textfeld / Mehrzeiliges Textfeld (wie viele Zeilen) / Radio-Buttons / Dropdown
    * **Validierungsregeln**: Text / nur Zahl / Maximallänge? / E-Mailadresse?
    * **Besonderheiten**: ?
    * **Mehrsprachigkeit**: Übersetzen (geht nur wenn die Attribute eine fixierte Auswahl sind) / Nicht übersetzen (z. B. bei Anrede will ich, dass ich eine Anrede aus allen Sprachen auswählen kann).
    * **Wo Berücksichtigen?:**
      * CSV Adressliste: Ja / Nein (Normale Adressliste)
      * CSV Export _Alle Angaben_: Ja / Nein (Empfehlung: Immer Ja)
      * CSV Export bei Abos: Ja/Nein (Nur aufnehmen, falls dies Info im Zusammenhang mit Newsletterversänden Sinn macht)
      * JSON API Index: Ja / Nein (Schnittstelle Auflistung von Personen, braucht es dort das Attribut?)
      * JSON API Index: Ja / Nein (Schnittstelle Detailinformation einer Personen, braucht es dort das Attribut? Empfehlung Ja)
      * Auffindbarkeit in Volltextsuche: Ja / Nein (Soll das Attribut berücksichtig werden, wenn ich die Volltextsuche oben rechts benutze?)

If an attribute is a relation to another model it should be treated as a feature not an attribute.
