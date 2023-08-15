const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/product.routes')(app);

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`))
