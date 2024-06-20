#! usr/bin/evn mode

// import http from "http";
// import fetch from "node-fetch";
// import url from "url";

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url);
//   console.log("parsedUrl", parsedUrl);
//   if (parsedUrl.pathname === "/api") {
//     res.write("hello");
//     res.end();
//   } else if (req.url === "/api/users") {
//     console.log("hello");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(201);
//         res.write(JSON.stringify(data, null, 2));
//         return res.end();
//       });
//   } else if (req.url === "/api/posts") {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(201);
//         res.write(JSON.stringify(data, null, 2));
//         return res.end();
//       });
//   } else if (req.url === "/api/hello") {
//     const name = "nika";
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.write("baro dzma");
//     res.end();
//   } else {
//     res.writeHead(404, "page not found!!");
//     res.end("Page Not Found!!");
//   }
// });

// const port = 3002;
// server.listen(port, "localhost", null, () => {
//   console.log(`server is running port: ${port}`);
// });

//////////////////////////////////////////////////////////////////////////////////////////////

// import command from "commander"

// const program = new Command();

// program.command('add')
//     .description('split a string into subsrings adn display as an  array')
//     .argument('<string>','string to split')
//     .option('--first','display just the first substing')
//     .option('-s, --separator <char>','separator character')
//     .option((str,option)=>{
//         console.log(str);
//         console.log(option);
//     });

// program.parse();

import express from "express";
const app = express();

app.get("/api/users", (req,res) => {
  res.json({ status: "OK" });
});

const port = 3002;

app.listen(Port, log);

function log() {
  console.log("server is running");
}
