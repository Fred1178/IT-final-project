const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, resp) => {
    resp.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});