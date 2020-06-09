const CssClasses = (defaultClassName, optionalClassName = '', suffix = '', states = []) => {
    const classes = [].concat(defaultClassName.split(/\s+/))
        .concat(optionalClassName.split(/\s+/))
        .filter(c => c && c.length)
        .map(c => suffix.length ? `${c}__${suffix}` : c);
    return classes.reduce((agg, className) => agg
        .concat([''].concat(states.filter(s => s && s.length))
        .map(state => `${className}${state.length ? `--${state}` : ''}`)), []).join(' ');
};
export default CssClasses;
//# sourceMappingURL=CssClasses.js.map