//import express
const express = require("express"); //similar to import express from "express"

//create a server
const server = express();

//middleware - to teach express new tricks
server.use(express.json()); // teaches how to parse JSON from the body

let hubs = [
  {
    id: 1,
    name: "building apis with express",
  },
  {
    id: 2,
    name: "server routing with express",
  },
];

//a function to handle GET requests to /
server.get("/", (req, res) => {
  res.send("hello web 30");
});

server.get("/hubs", function (req, res) {
  res.status(200).json(hubs);
});

server.post("/hubs", function (req, res) {
  //axios.post(url, data, options) - the data is in the request body
  const hub = req.body;

  hubs.push(hub);

  res.status(201).json(hubs);
});

server.delete("/hubs/:id", function (req, res) {
  const id = req.params.id;

  hubs = hubs.filter((h) => h.id !== Number(id));

  res.status(200).json(hubs);
});

//listen for incoming requets
const port = 8000;

server.listen(port, () => console.log(`\n == API on port ${port} == \n`));
