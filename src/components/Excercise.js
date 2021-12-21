import React from "react";
import { createStore } from "redux";

const init = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "EXER/INCREASE";
const DECREASE = "EXER/DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const change_text = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const add_to_list = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = init, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.list),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(change_text("yw"));
store.dispatch(add_to_list("list1"));
store.dispatch(add_to_list("list2"));
