import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import chalk from "chalk";
import axios from "axios";

// filename and dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/example/:something/:somethingElse", (req, res) => {
  console.log(req.url);
  console.log(req.params);
  console.log(req.query);
});

const base = "https://rickandmortyapi.com/api/character/";

app.get("/character/:id", async (req, res) => {
  const apiUrl = base + req.params.id;
  console.log(apiUrl);
  const rickAndMortyApiResponse = await axios.get(apiUrl);
  console.log(rickAndMortyApiResponse.data);

  const {
    data: { image, name },
  } = rickAndMortyApiResponse;

  res.render("character", { src: image, name });
});

// show it in the network tab - where requests happen what they look like
app.get("/find-by-name", async (req, res) => {
  const rickAndMortyApiResponse = await axios.get(base, {
    params: { name: req.query.name },
  });

  console.log(rickAndMortyApiResponse);

  const {
    data: { results },
  } = rickAndMortyApiResponse;

  console.log(results);

  console.log(req.query.name);

  res.render("multiple-characters", { characters: results });
});

// test it with curl!
// curl -X GET -F 'name="rick"' localhost:3000/find-by-name

app.listen(PORT, () => {
  console.log(chalk.yellow(`Listening on ${PORT}`));
});
