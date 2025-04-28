export default {
	layout: "character.njk",
	permalink: function ({ page, pagination }) {
		return `/characters/${this.slugify(page.fileSlug, {replacement: '-', lower: true})}/`;
	},
};
