const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.send('Server ishlayapti');
});

app.get('/session', (req, res) => {
    res.json({
        success: true,
        sid: 'ABC123'
    });
});

app.post('/ping', (req, res) => {
    console.log('Ping keldi');

    res.json({
        success: true
    });
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});