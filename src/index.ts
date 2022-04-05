import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { phone, articles, Article,comments,Comment } from "./data";

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index", { title: "Home", juratbek: "*",articles });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About", muxtor: "*", comments });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contacts: phone, title: "Comtact", timur: "*" });
});

app.get("/admin", (req, res) => {
  res.render("admin", { title: "admin", admin: "*" });


});
app.post("/admin", (req, res) => {
  let article1: Article = req.body;

  articles.push(article1);

  // res.send("run");
  res.redirect('/')
});

app.post("/about", (req, res) => {
  let comit: Comment = req.body;

  comments.push(comit);

  // res.send("run");
  res.redirect('/about')
});
  


app.listen(808, () => {
  console.log("start http://localhost:808");
});
