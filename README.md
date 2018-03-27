# Hitobito Website

## Requirements

You'll need to have the following items installed before continuing.

  * [Ruby](https://www.ruby-lang.org/en/documentation/installation/)

## Quickstart

	git clone https://github.com/hitobito/hitobito.github.io.git
	cd hitobito_site
	bundle install


While you're working on your project, run:

To develop: `jekyll serve`
and to deploy: `git push origin master`

And you're set!

For documentation of Jekyll see https://jekyllrb.com

## Creating Blogposts:

Updating this via [http://banana-beet.cloudvent.net/update](Cloudcannon)
## Docs / Wiki Integration

There are some rake tasks, to pull the wiki pages from github, to build the documentation:

    rake wiki # sync your wiki updates

    rake wikisub # links your Wiki to your repository as a submodule
    rake wikibuild # builds wiki for the first time
