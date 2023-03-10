import path from "path";
const home = async (req, res) => {
  return res.sendFile(path.resolve("src/views/index.html"));
};

export { home };
