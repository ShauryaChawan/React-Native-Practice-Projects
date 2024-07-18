module.exports = {
  root: true,
  extends: "@react-native",
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "linebreak-style": ["error", "unix"],
    endOfLine: "auto",
  },
};
