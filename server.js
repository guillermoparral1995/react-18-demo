const express = require("express");
const View = require("./src/View.js");
const Home = require("./src/pages/Home/Home");

const router = express();
router.listen(8080, () => console.log("Listening on port 8080!"));

router.use("/dist", express.static("dist"));

router.get("/", (_req, res, _next) => {
  res.send(View(Home, "home"));
});

router.get("/feature/:index", (req, res, _next) => {
  try {
    const { index } = req.params;
    const page = require(`./src/pages/Feature${index}`);
    res.send(View(page, `feature${index}`));
  } catch (e) {
    console.error(e);
    res.redirect("/");
  }
});

router.get("/image-carousel", (_req, res, _next) => {
  const images = [
    {
      src:
        "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg",
      alt: "Pug adorable",
      title: "Perrito",
      text: "Es adorable y ladra todo el tiempo",
    },
    {
      src:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg",
      alt: "Gato asomado en un estante",
      title: "Gatito",
      text: "Es muy lindo y maúlla todo el tiempo",
    },
  ];
  res.send(images);
});
