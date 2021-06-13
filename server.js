const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./src/App");

const router = express();
router.listen(8080, () => console.log("Listening on port 8080!"));

router.use("/dist", express.static("dist"));

router.get("/", (req, res, next) => {
  const html = renderToString(
    <div id="root-app">
      <App />
      <script src="./dist/index.bundle.js"></script>
    </div>
  );
  res.send(html);
});
