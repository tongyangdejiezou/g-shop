// import state from "./state";

/*
 */

export default {
  totalCount (state) {
    return state.cartFoods.reduce((total, food) => total + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((total, food) => total + food.count * food.price, 0)
  },
  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
