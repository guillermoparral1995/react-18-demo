const React = require("react");
const { useEffect, useState } = require("react");

const Image = ({ src, alt, title, text }) => (
  <div class="card">
    <img src={src} class="card-img-top" alt={alt} />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{text}</p>
    </div>
  </div>
);

const ImageCarousel = () => {
  const [images, setImages] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetch("/image-carousel");
        if (!response.ok)
          throw new Error(`Request failed with status ${response.status}`);
        const theImages = response.json();
        setImages(theImages);
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, []);

  return (
    <section>
      <h3>Imágenes (traídas desde el server)</h3>
      {images.map((img) => (
        <Image {...img} />
      ))}
    </section>
  );
};

module.exports = ImageCarousel;
