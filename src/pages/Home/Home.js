const React = require("react");

const Home = () => {
  const handleClick = (index) => {
    console.log("CLICK!");
    window.location.href = `/feature1/${index}`;
  };

  return (
    <>
      <h1>React 18 Alpha Demo!!!</h1>
      <h3>Features que se vienen</h3>
      <ul className="list-group">
        <li className="list-group-item" onClick={() => handleClick(1)}>
          Suspense + React.lazy (React 17)
        </li>
        <li className="list-group-item" onClick={() => handleClick(2)}>
          Hook startTransition
        </li>
        <li className="list-group-item" onClick={() => handleClick(3)}>
          Automatic Batching
        </li>
        <li className="list-group-item" onClick={() => handleClick(4)}>
          Concurrencia en SSR
        </li>
      </ul>
    </>
  );
};

module.exports = Home;
