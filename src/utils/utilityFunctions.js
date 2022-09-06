const slugify = function(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') 		// Replace spaces with -
      .replace(/[^\w-]+/g, '') 	// Remove all non-word chars
      .replace(/--+/g, '-') 		// Replace multiple - with single -
      .replace(/^-+/, '') 		// Trim - from start of text
      .replace(/-+$/, '') 		// Trim - from end of text
}


const createList = ({list, separator = ","}) =>{
  if(!list) return;
  return list.map((text, index) => {
      let sep;
      if(list.length !== index + 1){
          sep = separator;
      }
      return {text, sep}
  })
} 


module.exports = { slugify, createList }