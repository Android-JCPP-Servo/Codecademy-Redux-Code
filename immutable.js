/**
 * If a function makes immutable updates to its arguments, it does not change 
 * the argument but instead makes a copy and changes that copy.
 */

// BAD!!!
const removeItemAtIndex = (list, index) => {
    list.splice(index, 1);
    return list;
};
console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));

// GOOD!!!
const removeItemAtIndex = (list, index) => {
    return [
        ...list.slice(0,index),
        ...list.slice(index+1, list.length)
    ]
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));