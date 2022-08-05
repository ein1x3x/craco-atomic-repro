const position = ['position', 'top', 'right', 'bottom', 'left', 'z-index'];

const animations = [
  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode'
];

const box = [
  'display',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'grid',
  'grid-area',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-row-gap',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-column-gap',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'gap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'order',
  'float',
  'clear',
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-top',
  'border-top-color',
  'border-top-width',
  'border-top-style',
  'border-right',
  'border-right-color',
  'border-right-width',
  'border-right-style',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-width',
  'border-bottom-style',
  'border-left',
  'border-left-color',
  'border-left-width',
  'border-left-style',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'border-collapse',
  'border-spacing',

  'object-fit',
  'object-position',
  'overflow',
  'overflow-x',
  'overflow-y'
];

const misc = [
  'appearance',
  'content',
  'clip',
  'clip-path',
  'counter-reset',
  'counter-increment',
  'resize',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left',
  'pointer-events',
  'quotes',
  'touch-action',
  'will-change',
  'zoom',
  'fill',
  'fill-rule',
  'clip-rule',
  'stroke'
];

const typography = [
  'font',
  'font-weight',
  'font-size',
  'font-family',
  'font-style',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  'font-smooth',
  'line-height',
  'direction',
  'letter-spacing',
  'white-space',
  'text-align',
  'text-align-last',
  'text-transform',
  'text-decoration',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-indent',
  'text-justify',
  'text-outline',
  'text-wrap',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-orientation',
  'text-shadow',
  'vertical-align',
  'word-wrap',
  'word-break',
  'word-spacing',
  'overflow-wrap',
  'tab-size',
  'hyphens',
  'unicode-bidi',
  'columns',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'src',
  'color'
];

const visual = [
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image',
  'table-layout',
  'empty-cells',
  'caption-side',
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-size',
  'background-clip',
  'background-origin',
  'background-attachment',
  'background-blend-mode',

  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset',
  'box-shadow',
  'box-decoration-break',
  'transform',
  'transform-origin',
  'transform-style',
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'visibility',
  'cursor',
  'opacity',
  'filter',
  'isolation',
  'backdrop-filter',
  'mix-blend-mode'
];

module.exports = {
  plugins: [
    'stylelint-prettier',
    'stylelint-order',
    'stylelint-scss',
    'stylelint-config-rational-order/plugin',
    'stylelint-high-performance-animation'
  ],

  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],

  rules: {
    'prettier/prettier': true,

    // avoid errors
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    // 'function-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    // 'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values'] }
    ],

    // conventions
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'angle',
    // 'color-function-notation': 'modern',
    'color-hex-alpha': 'never',
    'color-hex-length': 'long',
    'color-named': 'never',
    'length-zero-no-unit': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    'selector-disallowed-list': [/element/, /block/],
    'max-nesting-depth': 8,

    'number-max-precision': 4,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    // 'declaration-no-important': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 1,

    // Stylistic
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',
    'color-hex-case': 'lower',
    // 'number-leading-zero': 'never', conflicts with prettier
    'string-quotes': 'single',
    'unit-case': 'lower',
    'property-case': 'lower',
    // 'declaration-bang-space-after': 'always',
    'number-no-trailing-zeros': true,
    'no-empty-first-line': true,
    'no-missing-end-of-source-newline': true,
    // TODO: conflicts with scss
    // 'rule-empty-line-before': 'always',

    // scss
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/comment-no-empty': true,
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/selector-nest-combinators': 'always',
    // 'scss/selector-no-union-class-name': true,

    // animations
    // 'plugin/no-low-performance-animation-properties': true,

    // order
    'order/properties-order': [
      ...position,
      ...box,
      ...typography,
      ...visual,
      ...animations,
      ...misc
    ]
  }
};
