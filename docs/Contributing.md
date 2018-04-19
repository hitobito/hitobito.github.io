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

# Getting access to the root user

Once the development environment is set up, you'll want to get a login for the root user. This can be achieved by navigating to the 'Forgot password?' page and requesting a new password for the root user, whose email is defined in `config/settings.yml`. This will generate an email containing a link to reset the password. The easiest way to read this email is to set up Mailcatcher as described [here](https://github.com/hitobito/hitobito/blob/master/doc/development/01_setup.md#mailcatcher).

At the moment, this is the way to go. However, there is ongoing discussion about simplifying this process, see [hitobito/hitobito#515](https://github.com/hitobito/hitobito/issues/515).

# Before submitting your pull-request:

* run all tests, see https://github.com/hitobito/hitobito/blob/master/doc/development/01_setup.md#tests (a simple `rake` does not execute all tests for perfomance reasons).
* make sure everything is translated (`/config/locales`)
* add your change to the [/CHANGELOG.md](https://github.com/hitobito/hitobito/blob/master/doc/development/03_guidelines.md#changelogs-f%C3%BChren) 

## If you contribute to a wagon

* If you made any changes to roles / permissions of a wagon of an organization, please update the `README.rdoc` with the new output of `rake hitobito:roles`

## Good to know

* The alerts `AVOID eager loading detected` are an indicatios of queries that can be optimized, but the warnings are not necessarily true, you can ignore them
