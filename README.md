# Hitobito Website

## Requirements

You'll need to have the following items installed before continuing.

  * [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * Bundler 'gem install bundler'

## Quickstart

	git clone https://git.puzzle.ch/pitc_hit/hitobito_site.git
	cd hitobito_site
	bundle install
	npm install


While you're working on your project, run:

To develop: `grunt serve`
or to build: `grunt`
and to deploy: `grunt deploy`

And you're set!

**Don't forget to push your changes to the source branch with git `push origin source`**

## Directory Structure

  * `jekyll`: All templates and files needed to build the html with jekyll
  * `src`: All the rest of the sources, including styles

## Branch structure

  * `master`: do not update this manually, the master branch is created (destructively) by the deploy command (by grunt-git-deploy).
  * `source`: development and changes are done on this branch, as the github pages for organization needs to have the build site on the master branch.