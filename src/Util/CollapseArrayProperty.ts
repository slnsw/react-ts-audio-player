const collapseArrayProperty = (
  prop: string | string[] = [],
  delimiter: string = ' ',
) => {
  let localProp: string | string[] = prop;
  if (!Array.isArray(localProp)) {
    localProp = [localProp];
  }
  return localProp.join(delimiter);
};

export default collapseArrayProperty;
