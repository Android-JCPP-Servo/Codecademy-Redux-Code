// INITIAL STATE
const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
}

// REDUCER
const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                distance: state.distance + 0,
                days: state.days + 1
            };
        }
        case 'travel': {
            let newSupplyValue = state.supplies - (20 * action.payload);
            if (newSupplyValue < 0) {
                return {
                    ...state,
                    supplies: state.supplies,
                    distance: state.distance,
                    days: state.days
                }
            } else {
                return {
                    ...state,
                    supplies: newSupplyValue,
                    distance: state.distance + (10 * action.payload),
                    days: state.days + action.payload
                }
            }
        }
        case 'tippedWagon': {
            return {
                ...state,
                supplies: state.supplies - 30,
                distance: state.distance,
                days: state.days + 1
            }
        }
        default: return state;
    }
}

// ACTIONS
const travel = {
type: 'travel',
payload: 1
}

// PLAY!!!
let wagon = reducer(undefined, {});
console.log(wagon);
// Travel...
wagon = reducer(wagon, travel);
console.log(wagon);
// Gather...
wagon = reducer(wagon, {type: 'gather'});
console.log(wagon);
// Tip Wagon...
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);
// Travel...
travel.payload = 3;
wagon = reducer(wagon, travel);
console.log(wagon);
// Travel again...
travel.payload = 3;
wagon = reducer(wagon, travel);
console.log(wagon);