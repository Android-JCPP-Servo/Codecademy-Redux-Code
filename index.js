/**********************
 * REDUCER
 **********************/
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'songs/addSong': return [...state, action.payload]; // Return a copy of the state object with the new song added
    case 'songs/removeSong': return state.filter(song => song !== action.payload); // Return a copy of the state object with the specified song removed
    default: return state;
  }
}

/**********************
 * STATE
 **********************/
const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

/**********************
 * ACTIONS
 **********************/
const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};
const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};
const removeAll = {
  type: 'songs/removeAll'
}