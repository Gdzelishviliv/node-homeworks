import http from 'http';
import moment from 'moment';

const PORT = 3000;

let users = [];

const requeastHandler = (req, res) => {
  if (req.method === 'POST' && req.url === '/api/auth/signup') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { name, email, password } = JSON.parse(body);
      if (!name || !email || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'All fields are required' }));
        return;
      }

      const id = users.length + 1;
      const created = moment().locale('ka').format('MMMM Do YYYY, h:mm:ss a');
      const newUser = { id, name, email, password, created };

      users.push(newUser);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  } else if (req.method === 'GET' && req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
};

const server = http.createServer(requeastHandler);

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
