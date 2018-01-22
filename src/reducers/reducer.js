// @flow

type actionType = {
  +type: string,
};

type reducerType = {

};

const reducer = (
  state: reducerType = {},
  action: actionType,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
