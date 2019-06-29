function checkIfEmpty(object) {
  if (!object) {
    return !object;
  }
  if (Array.isArray(object)) {
    return !object.length;
  }
  if (typeof object === 'object') {
    return Object.values(object).every(val => !val);
  }
  return !object;
}

export function objectIsEmpty(object) {
  if (!Object.values(object).length) {
    return false;
  }
  return Object.values(object).every(checkIfEmpty);
}

export function between(x, min, max) {
  return x >= min && x <= max;
}
