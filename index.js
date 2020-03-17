const server = require('./api/server');

const PORT = 5002;

server.listen(PORT, () => console.log(`== API Running on Port ${PORT} ==`))