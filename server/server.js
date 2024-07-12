const express = require("express");
const cors = require("cors");
const app = express();
const puppeteer = require("puppeteer");

app.use(cors());

const port = 3000;

//PUPPETEER
app.get("/puppeteer", async (req, res) => {
  const pdf = await printPDF();
  res.contentType("application/pdf");
  res.send(pdf);
});

async function printPDF() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.emulateMediaType("print");

  await page.goto("http://localhost:3001", {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    displayHeaderFooter: false,
    margin: 0,
    printBackground: true,
  });

  return pdf;

}
//--


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
