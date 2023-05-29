const express = require('express');
const { SVG } = require('@svgdotjs/svg.js');

const app = express();
const port = 3000; // Specify the desired port number

app.get('/generate-logo', (req, res) => {
    // Retrieve the logo design options from the request parameters or body
    const { text, color, fontSize } = req.query;
  
    // Create an SVG container
    const svg = SVG().size(200, 100);
  
    // Draw the logo using SVG elements and design options
    const rect = svg.rect(200, 100).fill(color);
    const logoText = svg.text(text).font({ size: fontSize }).move(20, 40);
  
    // Generate the SVG as a string
    const logoSVG = svg.svg();
  
    // Set the response content type to SVG
    res.contentType('image/svg+xml');
  
    // Send the generated logo SVG as the response
    res.send(logoSVG);
  });

  app.listen(port, () => {
  console.log(`Logo Maker server is running on port ${port}`);
});
