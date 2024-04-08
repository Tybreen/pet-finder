// require() is javascript's Version of import
const express = require(`express`);
const app = express();

const pets = [
  { id: 1, name: `Leo`, owner: `Tyler` },
  { id: 2, name: `Tiger`, owner: `Maddie` },
  { id: 5, name: `Luke`, owner: `Harry` }
];

// If the URL has this path, do this...
app.get(`/`, (req, res) => {
  // Give the client this file.
  res.sendFile(`${__dirname}/index.html`);
});

// If the URL has this path, do this...
app.get(`/api/v1/pets`, (req, res) => {
  // Send the whole pets array.
  res.send(pets);
});

// If the URL has this path, do this...
app.get(`/api/v1/pets/owner`, (req, res) => {
  // Grab the variable we pass in via query.
  const { owner } = req.query;
  // Find the correct pet.
  const pet = pets.find((pet) => pet.owner === owner);

  // Sent the found pet.
  res.send(pet);
});

// If the URL has this path, do this...
app.get(`/api/v1/pets/:name`, (req, res) => {
  // Grab the variable we pass in via query.
  const { name } = req.params;
  // Find the correct pet.
  const pet = pets.find((pet) => pet.name === name);

  // Sent the found pet.
  res.send(pet);
});

// Starts the server.
app.listen(`8080`, () => {
  console.log(`Server is running on port 8080`);
});
