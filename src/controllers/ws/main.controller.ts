import path from "path";
const socketIoChatView = async (req, res) => {
  return res.sendFile(path.resolve("src/views/socketioChat.html"));
};

export { socketIoChatView };
