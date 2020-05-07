import CssClasses from '../../../src/Util/CssClasses';

describe('Basic CSS classes', () => {
  it('Basic class', () => {
    expect(CssClasses('foo')).toBe('foo');
  });

  it('Optional class', () => {
    expect(CssClasses('foo', 'bar')).toBe('foo bar');
  });
});

describe('BEM-scoped CSS classes', () => {
  it('Basic class', () => {
    expect(CssClasses('foo', '', 'bar')).toBe('foo__bar');
  });

  it('Optional class', () => {
    expect(CssClasses('foo', 'bar', 'baz')).toBe('foo__baz bar__baz');
  });
});

describe('CSS classes with states', () => {
  it('No states', () => {
    expect(CssClasses('foo', '', 'bar', [])).toBe('foo__bar');
  });

  it('One state', () => {
    expect(CssClasses('foo', 'bar', '', ['active'])).toBe('foo foo--active bar bar--active');
  });

  it('Many states', () => {
    expect(CssClasses('foo', 'bar', '', ['active', false, null, 'boop'])).toBe('foo foo--active foo--boop bar bar--active bar--boop');
  });

  it('Many states and scope', () => {
    expect(CssClasses('foo', 'bar', 'baz', ['active', false, null, 'boop'])).toBe('foo__baz foo__baz--active foo__baz--boop bar__baz bar__baz--active bar__baz--boop');
  });
});
