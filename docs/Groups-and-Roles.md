---
layout: docs
title: Groups and Roles
wikiPageName: Groups-and-Roles
menu: wiki
---

If you are new to hitobito the organization around groups and roles can feel pretty complex.

We think this works best to describe the structure for hitobito:

### Layer-Identifier as Layer-Display-Name (layer)

- Allowed-Role-Identifier as Role-Display-Name [:abilities]
- Allowed-Role-Identifier ...
- Allowed-Role-Identifier ...
- **Allowed-Subgroup-Identifier** as Group-Display-Name
  - Allowed-Role-Identifier as Role-Display-Name [:abilities]
  - Allowed-Role-Identifier ...
  - **Allowed-Subgroup-Identifier**
    - ...

The abilities are only described in the first instance. If the same role-type or group-type should be allowed again, we repeat just the name. The first part is the identifier, the second part is the what the group should be displayed as.

But it is better understood with an example:

### Dachverband as Dachverband (layer, Event::Course)

- pl_jugend as PL Jugend [:admin, :layer_and_below_full, :contact_data, :kurse]
- **Dachverband_Gremium** as Gremium
  - Dachverband_Gremium_Leitung as Leitung [:layer_and_below_read, :group_and_below_full, :contact_data]
  - Dachverband_Gremium_Mitglied as Mitglied [:layer_read, :contact_data]
  - **Dachverband_Gremium**
  - Jugendgruppe as Jugendgruppe (Ebene)
    - Jugendgruppe_Verantwortlicher as Verantwortliche(r) [:layer_and_below_full, :contact_data]
    - Jugendgruppe_Leitung as Leitung [:layer_and_below_read, :contact_data]
    - Jugendgruppe_Mitglied as Aktivmitglied []
    - **Jugendgruppe_Gremium** as Gremium
      - Jugendgruppe_Gremium_Leitung as Leitung Gremium [:group_and_below_full]
      - Jugendgruppe_Gremium_Mitglied as Mitglied Gremium [: group_and_below_read]
      - **Jugendgruppe_Gremium**
    - **Jugendgruppe_Passive** as Externe/Helfer/Passivmitglieder
      - Jugendgruppe_Passive_Adressverwalter as Adressverwalter [:group_and_below_full]
      - Jugendgruppe_Passive_Mitglied as Extern/Helfer/Passivmitglieder [:not_visible_from_above]
    - **Sektion** as Sektion (Ebene)
      - Sektion_Admin as Sektionsverwaltung [:layer_and_below_full]
      - **Jugendgruppe**

This way you can see how the groups can be structured and we have one complete representation.

## What do these abilities mean:

[German explanation of the different abbilites](https://github.com/hitobito/hitobito/blob/master/doc/architecture/08_konzepte.md#berechtigungen) 
