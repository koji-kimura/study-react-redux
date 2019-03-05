import axios from "axios";

export const plus = num => {
  return {
    type: "PLUS",
    payload: {
      num: num
    }
  };
};

export const minus = num => {
  return {
    type: "MINUS",
    payload: {
      num: num
    }
  };
};

export const asyncMinus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "MINUS",
        payload: {
          num: num
        }
      });
    }, 1000);
  };
};

const url = "https://api.myjson.com/bins/159wgn";
axios.get(url).then(res => {
  console.logg(res.data);
});
