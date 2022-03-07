const express = require('express');

const app = express();

const PORT = 5050;

app.get('/test', (req, res) => {
    res.send('api work');
});

app.listen(PORT, () => {
    console.log(`server listening port: ${PORT}`);
});
