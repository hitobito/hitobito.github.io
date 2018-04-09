---
layout: docs
title: Contributing
wikiPageName: Contributing
menu: wiki
---

We welcome contributions!

Have a look at the issues with the tag [good first issue](https://github.com/hitobito/hitobito/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

As the project is fairly complex, there are some things to look out for.

* [General Documentation](https://github.com/hitobito/hitobito/tree/master/doc)
* [Local Setup](https://github.com/hitobito/hitobito/blob/master/doc/development/01_setup.md)
* [Guidelines](https://github.com/hitobito/hitobito/blob/master/doc/development/03_guidelines.md)

# Before submitting your pull-request:

* run all tests, see https://github.com/hitobito/hitobito/blob/master/doc/development/01_setup.md#tests (a simple `rake` does not execute all tests for perfomance reasons).
* make sure everything is translated (`/config/locales`)
* add your change to the [/CHANGELOG.md](https://github.com/hitobito/hitobito/blob/master/doc/development/03_guidelines.md#changelogs-f%C3%BChren) 

## If you contribute to a wagon

* If you made any changes to roles / permissions of a wagon of an organization, please update the `README.rdoc` with the new output of `rake hitobito:roles`

## Good to know

* The alerts `AVOID eager loading detected` are an indicatios of queries that can be optimized, but the warnings are not necessarily true, you can ignore them
