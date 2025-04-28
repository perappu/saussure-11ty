This is a very simple template for use with Saussure that utilizes Bootstrap. Fork it, then head on over to [the guides](https://github.com/perappu/saussure/wiki/1.-Setup-Guide-%E2%80%90-Beginner) to use it!

Because it uses Bootstrap, many HTML codes designed for Toyhouse character profiles will work out-of-the-box. There are no external css files, all css is written directly in `_layouts/base.njk` to ensure it works with Saussure previews with minimal effort.

This template is extremely minimal: 

- It imports all JS and CSS via CDN directly in `_layouts/base.njk`.
- It utilizes [fslightbox](https://fslightbox.com) for the fullsize "enlarge" effect on images.
- [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/) is utilized to optimize/create thumbnail images on character and image pages.

You may view a demo of the site here.

If you would like to demo the template locally:
1. Clone your forked repository using your favorite git client, whether that is the command line, Sourcetree, GitHub desktop, etc
2. Open up the command line
3. Enter in `cd C:/[location of your folder]`
4. Enter `npx @11ty/eleventy --serve`
5. Open up the localhost URL provided in your browser of choice
