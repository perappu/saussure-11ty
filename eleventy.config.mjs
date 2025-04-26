import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";

export default async function (eleventyConfig) {

  //set directories
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  //use html when parsing markdown
  eleventyConfig.setLibrary("md", markdownit({ html: true }).use(anchor));

  //add collections
  eleventyConfig.addCollection("characters", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/characters/*.md")
      .sort((a, b) => b.data.name - a.data.name);
  });

  eleventyConfig.addCollection("images", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/images/*.md")
      .sort((a, b) => b.data.title - a.data.title);
  });

  eleventyConfig.addCollection("literatures", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/literatures/*.md")
      .sort((a, b) => b.data.title - a.data.title);
  });

  //add filter to get images or literatures by character
  eleventyConfig.addFilter('byCharacter', function (collection, character) {
    if (!character) return collection;
    const filtered = collection.filter(item => item.data.character == character).sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
    return filtered;
  });

  //add filter to get any object by its tags
  eleventyConfig.addFilter('byTag', function(collection, tag) {
    const filtered = collection.filter(item => item.data.tags == tag || item.data.tags.includes(tag)).sort((a, b) => {
      if (a.data.date < b.data.date) return -1;
      else if (a.data.date > b.data.date) return 1;
      else return 0;
    })
    return filtered;
  });

  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
}