const cors_proxy = require("cors-anywhere");
//This proxy is just to circumvent the CORS allowed origin policy. This is not needed if sending requests from "https://rox.org.uk"
const host = "0.0.0.0";
const port = 8080;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
