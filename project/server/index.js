const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const PORT = TBD;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
