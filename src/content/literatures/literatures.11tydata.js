export default {
	layout: "literature.njk",
	permalink: function ({ page }) {
		return `/literatures/${this.slugify(page.fileSlug)}/`;
	},
};
