const req = require.context(".", false, /\.js$/);

req.keys().forEach((key) => {
  const name = key.replace(/^\.\/(.*)\.js/, "$1");

  if (name !== "index") {
    module.exports[name] = req(key).default;
  }
});
