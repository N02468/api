const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/bookcollectionRoute');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);




app.listen(process.env.port, () => {
    console.log(`Server is running on port http://localhost:3000`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});