// @file
// Generate BEM-scoped CSS classes.

type CssClassState = string|false|null;

const CssClasses = (
  defaultClassName: string,
  optionalClassName: string = '',
  suffix: string = '',
  states: CssClassState[] = [],
): string => {
  const classes = []
    .concat(defaultClassName.split(/\s+/))
    .concat(optionalClassName.split(/\s+/))
    .filter((c) => c && c.length)
    .map((c) => (suffix.length ? `${c}__${suffix}` : c));

  return classes
    .reduce(
      (agg, className) =>
        agg.concat(
          ['']
            .concat(
              states.filter(
                (s: CssClassState) => typeof s === 'string' && (s || '').length > 0,
              ) as string[],
            )
            .map(
              (state: string) => `${className}${state.length ? `--${state}` : ''}`,
            ),
        ),
      [],
    )
    .join(' ');
};

export default CssClasses;
