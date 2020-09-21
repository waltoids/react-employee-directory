function SearchObject(array, query) {
    return array.filter((item) => {
      for (const value of Object.values(item)) {
        const searchValue = value.toString().toLowerCase();
        if (searchValue.includes(query.toLowerCase())) {
          return item;
        }
      }
  
      return null;
    });
  }
export default SearchObject;