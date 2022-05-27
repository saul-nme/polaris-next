module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:shopify/react",
    "plugin:shopify/polaris",
    "plugin:shopify/jest",
    "plugin:shopify/webpack",
  ],
  rules: {
    "import/no-unresolved": "on",
  },
  overrides: [
    {
      files: ["*.test.*"],
      rules: {
        "shopify/jsx-no-hardcoded-content": "on",
      },
    },
  ],
};
