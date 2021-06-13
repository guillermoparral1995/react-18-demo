// This is needed to write valid JSX in the server
require("@babel/register")({
  ignore: ["node_modules"],
});

require("./server");
