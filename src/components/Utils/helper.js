export const truncate = (str, num) => {
    if(str.length <= num) return str;
    return str.slice(0, num) + '...';
}

export const isEmptyObject = value =>  {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }