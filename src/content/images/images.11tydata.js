export default {
	layout: "image.njk",
	permalink: function ({ page }) {
		return `/images/${this.slugify(page.fileSlug, {replacement: '-', lower: true})}/`;
	},
};
