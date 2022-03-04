const http = require('http');

let message = 'Hello Denis';

http.createServer((request, response) => {

  console.log(message);
  response.end(message);

}).listen(3000, '127.0.0.1', () => {
  console.log('Сервер начал прослушивание запросов');
})
