const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  if (req.url === "/") {
    res.write("<h1> Welcome to the Home Page </h1>");
    res.write(`<form action="/submit-details" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <label for="gender">Gender:</label>
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Female</label>
      <button type="submit">Submit</button>
    </form>`);
    return res.end();
  } else if (req.url === "POST" && req.url === "/submit-details") {
    fs.writeFileSync("userDerails.txt", "Abhay Dubey");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  // } else if (req.url === "/about") {
  //   res.write("<h1> Welcome to the About Page </h1>");
  //   return res.end();
  // }
  // res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  // res.write("</html>");
  // res.end();
});

const PORT = 30002;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
