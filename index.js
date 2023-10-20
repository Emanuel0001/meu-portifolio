const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/download', (req, res) => {
  res.download(__dirname + `/public/pdf/file.pdf`)
})
app.listen(port, () => {
  
  console.log(`Servidor web em execução: http://localhost:${port}`);
});

