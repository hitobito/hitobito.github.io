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

- Go to http://prose.io/#hitobito/hitobito.github.io/tree/master/_posts
- Create a new file
- Adjust the title of the file (only the part after the date, not spaces or special characters, dashes will be converted to spaces) for example: \_posts/2016-06-18-My-New-Blogpost.md -> My New Blogpost
- Write your post using Markdown (https://en.support.wordpress.com/markdown-quick-reference/).
- By default saving is with `published: false`, so it will not publish the post, to actually publish it set the meta data `publised: true`
- Customize longer titles and titles with special characters can be set as meta-data `title: My !!! Superfancy Title !!! & stuff"
- Images have to added normally via Git, put them in the images folder in a subdirectory that makes sense to you (the prose upload functionality is not helpful, because the image will not be in the right directory.