export function gardenerFiltering(cities, ratingValue, available, allData) {
  let filteredItems = [];
  if (cities.length === 0 && ratingValue.length === 0 && available === false) {
    filteredItems = allData;
  } else {
    filteredItems = allData.filter((product) => {
      let cityMatch = false;
      let ratingMatch = false;
      let availableMatch = false;

      if (cities.length === 0) {
        cityMatch = true;
      } else {
        cities.forEach((city) => {
          // e.g. "Lahore" === "Lahore" is used
          if (product.city === city) {
            cityMatch = true;
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

      //   if available filter is not checked, then all gardners are shown
      if (available === false) {
        availableMatch = true;
      } else {
        if (product.available === true) {
          availableMatch = true;
        }
      }

      //   available is not in the nurseries filter so it is undefined
      if (available !== undefined) {
        // if all three conditions are true, then the product is shown in the filtered gardeners
        return cityMatch && ratingMatch && availableMatch;
      } else {
        // if all two conditions are true, then the product is shown in the filtered nurseries
        return cityMatch && ratingMatch;
      }
    });
  }
  return filteredItems;
}
