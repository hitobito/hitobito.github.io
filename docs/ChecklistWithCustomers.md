---
layout: docs
title: ChecklistWithCustomers
wikiPageName: ChecklistWithCustomers
menu: wiki
---

This is a general Checklist, that helps us throughout the projects to make clear what we have to figure out, what things we need to know / communicate...


## Milestone Contract Signing: Let's do it!

- Contract signed

## Milestone Kick-Off

- Roles defined / Schedule Set

## On project-start:

- [ ] Inform how we work with the backlog on github. (Self registration)
- [ ] Set up 2 to 3 initial workshops for basic-package (two for less complex / centrally organized orgs, three for more complex organisations).
- [ ] A list of e-mail-addresses of people who should get access to the integration environment, put this info into a ticket.

## Milestone Base Package on Integration Environment

- [ ] Explain possibilities with custom attributes on people and groups
- [ ] Define the URL of the live system (usually a subdomain like db.jubla.ch, important this subdomain will be the recipient for mailinglists).
- [ ] Client should do the DNS Entries
- [ ] Client orders [SSL certificate](SSL-Zertifikate)
- [ ] First Org Workshop (Client shows structures of organizations, explains the roles and the access rights).
- [ ] Describe the [group-role-structure](Groups-and-Roles)
- [ ] Second Org Workshop (We show to client how we would structure it).
- [ ] Third Org Workshop (Clarifications, control if we understood each other.
- [ ] Get list of [custom attributes](custom attributes)
- [ ] Courses:
  - [ ] define on which layers courses are allowed
  - [ ] Inform: Courses can be edited by people with :layer_full or :layer_and_below_full
  - [ ] Is there a Role that has to approve applications for courses (example Scharleiter @ Jubla). If we do not define such an ability, the option to request approval for course participation will not be whown.
  - [ ] What testdata should we seed: examples for courses, course-types and qualifcations-types?
- [ ] Which countries should be displayed as default or preferred countries when someone edits contact data?
- [ ] If this is a non-swiss solution, validation of postal code needs to be more tolerant.

## ToDos on Development side

- [ ] Setup Integration and Production Environment [Puzzle Project Setup Documentation (internal)](https://twiki.puzzle.ch/bin/view/Hitobito/ProjektSetup)

## Milestones Base Package on Production

- [ ] Agree on Go Live Date (having made sure, that everything is ready)
- [ ] org configures [DNS](DNS) Entry
- [ ] /sys adds [certificate](SSL-Zertifikate)


## Custom Features Development Kickoff
## Custom Features Development Review
## Abnahme von neuen Features & Übersetzungen

- Explain mailtrap
- Explain transifex
- let them know where to comment

## Custom Features Release on Production
