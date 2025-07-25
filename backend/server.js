const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});