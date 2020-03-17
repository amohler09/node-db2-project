const server = require('./api/server');

const PORT = 5002;

server.listen(port, () => console.log(`== API Running on Port ${PORT} ==`))