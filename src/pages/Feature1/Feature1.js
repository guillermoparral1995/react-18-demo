const React = require("react");

const ImageCarousel = React.lazy(() => import("./ImageCarousel"));

// REACT LAZY + SUSPENSE
const Feature1 = () => {
  <Suspense fallback={<div>Esperando...</div>}>
    <ImageCarousel />
  </Suspense>;
};

module.exports = Feature1;
