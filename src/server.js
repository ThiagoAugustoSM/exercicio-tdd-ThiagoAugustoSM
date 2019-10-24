let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());       
let port = 8080;

app.get('/converterTemperatura', (req, res) => {
  const {valor, de, para} = req.query;
  let convertido = 0;

  if(valor == undefined) {res.status(400).json({missing: "valor"}); return}
  else if(de == undefined) {res.status(400).json({missing: "de"}); return}
  else if(para == undefined) {res.status(400).json({missing: "para"}); return}

  if(isNaN(valor)) {res.status(400).json({wrongValue: "valor"}); return}
  else if(!['C', 'F'].includes(de)) {res.status(400).json({wrongValue: "de"}); return}
  else if(!['C', 'F'].includes(para)) {res.status(400).json({wrongValue: "para"}); return}

  if(de == "C" && para == "F") convertido = valor * 1.8 + 32;
  else if(de == "F" && para == "C") convertido = (valor - 32) / 1.8;
  else if(de == "F" && para == "F") convertido =  parseInt(valor);
  else if(de == "C" && para == "C") convertido =  parseInt(valor);

  res.json({valor: convertido});
});

// app.listen(port)

module.exports = app;