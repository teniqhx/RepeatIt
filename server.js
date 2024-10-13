const express = require('express');
const path = require('path'); // Додайте цей рядок
const app = express();
const PORT = process.env.PORT || 3000;

// Налаштуйте статичні файли
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Повертає index.html
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
