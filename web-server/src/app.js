const express = require("express");
const path = require("path");

const app = express();

//This is the root being served as a static directory
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../views"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "string",
    forecast: "raining",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
