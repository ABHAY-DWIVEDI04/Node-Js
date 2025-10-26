const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`<html>
        <head><title>Myntra Page</title></head>
        <body><a href="/home">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        </body>
    </html>`);

  if (req.url === "/home") {
    res.write("<h1> Welcome to the Home Page </h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1> Welcome to the Men Page </h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1> Welcome to the Women Page </h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1> Welcome to the Kids Page </h1>");
    return res.end();
  }
});

const PORT = 30002;
server.listen(PORT, () => {
  console.log(`Server Running at port://${PORT}`);
});
