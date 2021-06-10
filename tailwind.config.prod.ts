const tailwind = require("./tailwind.config.ts");

module.exports = {
  ...tailwind,
  purge: {
    ...tailwind.purge,
    enabled: true,
  },
};