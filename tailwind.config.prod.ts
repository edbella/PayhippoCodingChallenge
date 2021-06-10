const tailwind = require("./tailwind.config");

module.exports = {
  ...tailwind,
  purge: {
    ...tailwind.purge,
    enabled: true,
  },
};