const app = require("express")();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

app.post("/test", (req, res) => {
  const { name } = req.body;
  res.status(200).send({
    message: `Hello ${name}!`,
  });
});
