const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'src', 'index.js');
const distDir = path.join(__dirname, 'dist');
const distFile = path.join(distDir, 'index.js');

try {
  // Crear dist si no existe
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log('Creado directorio:', distDir);
  } else {
    console.log('Directorio dist ya existe:', distDir);
  }

  // Copiar archivo
  fs.copyFileSync(srcFile, distFile);
  console.log('Archivo copiado a:', distFile);
} catch (err) {
  console.error('Error en build.js:', err.message);
  process.exit(1);
}
