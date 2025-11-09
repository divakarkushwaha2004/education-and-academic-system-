const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// student routes placeholder
app.post('/students', /* add student logic */);
app.get('/students', /* get students logic */);

// similar routes for classes and attendance

app.listen(3000, () => console.log("Server running on port 3000"));
