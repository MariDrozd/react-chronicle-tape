/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'block-no-empty': true,
    'function-calc-no-unspaced-operator': true,
    'no-irregular-whitespace': true,
    'selector-class-pattern': [
      '^(?:[a-z][a-z0-9]*(?:-[a-z0-9]+)*|[a-z][a-zA-Z0-9]*)$',
      { resolveNestedSelectors: true },
    ],
  },
};
