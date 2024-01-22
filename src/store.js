import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
  price: 150,
  discount: 5
};

const actions = {
  setPrice(price) {
    return {
      type: "SET_PRICE",
      price,
    };
  },
  setDiscount(discount) {
    return {
      type: "DISCOUNT",
      discount,
    };
  }
};

const store = createReduxStore('my-shop', {
  reducer(state = DEFAULT_STATE, action) {
    console.log(state);
    switch (action.type) {
      case "SET_PRICE":
        return {
          ...state, price: action.price,
        }
      case "DISCOUNT":
        return {
          ...state,
          discount: action.discount,
        };
    }
    return state;

  }, actions,

  selectors: {
    getTotal(state) {
      const { price, discount } = state;
      return price - discount;
    },

    getPrice(state) {
      const { price } = state;
      return price;
    },

    getDiscount(state) {
      const { discount } = state;
      return discount;
    }

  }
})

register(store);