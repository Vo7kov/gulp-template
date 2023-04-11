module.exports = {
  "extends": [
    "stylelint-config-recommended-scss",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
  ],
  "rules": {
    "order/properties-order": [
      {
        "groupName": "normalize",
        "emptyLineBefore": "always",
        "properties": [
          "box-sizing",
          "scroll-behavior",
          "scroll-snap-coordinate",
          "scroll-snap-destination",
          "scroll-snap-type",
          "scroll-snap-type-x",
          "scroll-snap-type-y"
        ]
      },

      {
        "groupName": "blockModel",
        "emptyLineBefore": "always",
        "properties": [
          "margin",
          "margin-top",
          "margin-left",
          "margin-right",
          "margin-bottom",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "display",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-width",
        ]
      },

      {
        "groupName": "positioning",
        "emptyLineBefore": "always",
        "properties": [
          "position",
          "top",
          "left",
          "right",
          "bottom",
          "z-index",
        ]
      },

      {
        "groupName": "grid",
        "emptyLineBefore": "always",
        "properties": [
          "grid",
          "grid-template-columns",
          "grid-template-rows",
          "column-gap",
          "grid-column",
          "grid-row",
          "justify-content",
          "justify-items",
          "align-content",
          "align-items",
        ]
      },

      {
        "groupName": "flex",
        "emptyLineBefore": "always",
        "properties": [
          "flex",
          "flex-direction",
          "flex-wrap",
          "flex-grow",
          "flex-shrink",
          "flex-basis",
          "order",
        ]
      },

      {
        "groupName": "typography",
        "emptyLineBefore": "always",
        "properties": [
          "font-family",
          "font-style",
          "font-weight",
          "font-size",
          "line-height",
          "text-align",
          "color",
        ]
      },

      {
        "groupName": "decor",
        "emptyLineBefore": "always",
        "properties": [
          "background-color",
          "border",
          "border-top",
          "border-left",
          "border-right",
          "border-bottom",
          "border-radius",
          "opacity",
          "list-style",
          "list-style-type",
          "list-style-position",
          "list-style-image",
        ]
      },

      {
        "groupName": "backgroundImage",
        "emptyLineBefore": "always",
        "properties": [
          "background",
          "background-image",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-size",
          "background-repeat",
          "background-repeat-x",
          "background-repeat-y",
          "background-origin",
          "background-clip",
          "background-attachment",
          "background-color",
          "background-blend-mode",
          "image-orientation",
          "image-rendering",
          "object-fit",
          "object-position",
        ]
      },

      {
        "groupName": "animation",
        "emptyLineBefore": "always",
        "properties": [
          "transition",
          "transition-property",
          "transition-duration",
          "transition-delay",
          "transition-timing-function",
          "animation",
          "animation-name",
          "animation-duration",
          "animation-delay",
          "animation-timing-function",
          "animation-iteration-count",
          "animation-direction",
          "animation-fill-mode",
          "animation-play-state",
        ]
      },

      {
        "groupName": "transform",
        "emptyLineBefore": "always",
        "properties": [
          "transform",
          "transform-box",
          "transform-origin",
          "transform-origin-x",
          "transform-origin-y",
          "transform-origin-z",
          "transform-style",
        ]
      },

      {
        "groupName": "other",
        "emptyLineBefore": "always",
        "properties": [
          "overflow",
          "overflow-x",
          "overflow-y",
          "will-change",
          "cursor",
          "pointer-events",
          "touch-action",
          "user-drag",
          "user-focus",
          "user-select",
          "user-zoom",
          "resize",
        ]
      },
    ],

    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,

    "number-leading-zero": "always",
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,

    "string-quotes": "double",

    "length-zero-no-unit": true,

    "unit-case": "lower",
    "unit-no-unknown": [true, {"ignoreUnits": ["fr"]}],

    "value-keyword-case": "lower",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-max-empty-lines": 0,

    "shorthand-property-no-redundant-values": true,

    "property-case": "lower",
    "property-no-unknown": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",

    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "never-single-line",
    "block-opening-brace-space-before": "always",
    "block-no-empty": true,

    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-id": 1,
    "selector-max-universal": 1,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,

    "selector-list-comma-newline-after": "always",

    "rule-empty-line-before": ["always", {ignore: ["after-comment", "first-nested", "inside-block"]}],

    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,

    "at-rule-name-case": "lower",

    "comment-no-empty": true,

    "indentation": 2,
    "max-empty-lines": 1,
    "max-line-length": 80,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
  }
};
