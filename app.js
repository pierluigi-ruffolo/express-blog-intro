import express from "express";
import comicPosts from "./posts.js";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

app.get("/bacheca", (req, res) => {
  const response = {
    postTotali: comicPosts.length,
    ListaPost: comicPosts,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`server avviato sulla porta ${port}`);
});
