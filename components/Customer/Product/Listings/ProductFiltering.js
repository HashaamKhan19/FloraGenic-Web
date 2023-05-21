export function filtering(categoryValue, ratingValue, priceRange, allData) {
  let filteredProducts = [];
  if (
    categoryValue.length === 0 &&
    ratingValue.length === 0 &&
    priceRange[0] === 0 &&
    priceRange[1] === 10000
  ) {
    filteredProducts = allData;
  } else {
    filteredProducts = allData.filter((product) => {
      let categoryMatch = false;
      let ratingMatch = false;
      let priceMatch = false;

      if (categoryValue.length === 0) {
        // if no category is selected, then all products are shown
        categoryMatch = true;
      } else {
        categoryValue.forEach((category) => {
          if (product.category.name.toLowerCase() === category) {
            // if the product's category matches the selected category, then the product is shown
            categoryMatch = true;
          }
        });
      }

      if (ratingValue.length === 0) {
        ratingMatch = true;
      } else {
        ratingValue.forEach((rating) => {
          // convert float rating to int (e.g. 4.5 -> 4) and convert string rating (e.g. "4") to int (e.g. "4" -> 4 using the unary + operator)
          // e.g 4 === 4 is used
          if (parseInt(product.overallRating) === +rating) {
            ratingMatch = true;
          }
        });
      }

      if (priceRange[0] === 0 && priceRange[1] === 10000) {
        // if no price range is selected, then all products are shown
        priceMatch = true;
      } else {
        if (product.retailPrice >= priceRange[0] && product.retailPrice <= priceRange[1]) {
          // if the product's price is within the selected price range, then the product is shown
          priceMatch = true;
        }
      }

      // if all three conditions are true, then the product is shown in the filtered products
      return categoryMatch && ratingMatch && priceMatch;
    });
  }
  return filteredProducts;
}
