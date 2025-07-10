export const getFirstAndLast =(arr) =>{
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    return [arr[0], arr[arr.length - 1]];
}