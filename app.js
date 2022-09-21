const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/github-repo'));

app.get('/', (req, res) =>
    res.sendFile('index.html', {root: 'dist/github-repo/'}),
);

app.listen(process.env.PORT || 8080);