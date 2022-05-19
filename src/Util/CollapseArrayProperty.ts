const collapseArrayProperty = (prop: string|string[] = [], delimiter: string = ' ') => {
  if (!Array.isArray(prop)) {
    prop = [prop];
  }
  return prop.join(delimiter);
};

export default collapseArrayProperty;
