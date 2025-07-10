function getProperty(obj, key){
    return obj.hasOwnProperty(key) ? obj[key] : undefined;
}

export default getProperty;