const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
