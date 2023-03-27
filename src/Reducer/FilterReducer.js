const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElm) => curElm.price);

      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      let useSortValue = document.getElementById("sort");
      let sort_value = useSortValue.options[useSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORTING_PRODUCTS":
      let newSortData = [];
      var { filter_products } = state;
      let tempSortProduct = [...filter_products];

      if (state.sorting_value === "lowest") {
        let sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sorting_value === "highest") {
        let sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }

      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      var { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.category === category;
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;
