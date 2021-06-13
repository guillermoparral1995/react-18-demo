const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./src/App");

const router = express();
router.listen(8080, () => console.log("Listening on port 8080!"));

router.use("/dist", express.static("dist"));

router.get("/", (req, res, next) => {
  const Body = renderToString(
    <div id="root-app">
      <App />
      <script src="./dist/index.bundle.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
    </div>
  );
  const html = `
    <!doctype html>
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      </head>
      <body>
        ${Body}
      </body>
    </html>
  `;
  res.send(html);
});
