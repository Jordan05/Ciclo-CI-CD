Proyecto de Ejemplo con CI/CD

Este repositorio demuestra el ciclo completo de Integración Continua (CI) y Entrega Continua (CD) hasta la construcción automática de un package Node.js, incluyendo:

Instalación de dependencias

Ejecución de pruebas unitarias

Construcción del package

Generación del artefacto listo para descargar

Todo esto realizado automáticamente mediante GitHub Actions.

🛠️ ¿Qué es CI/CD?
✔️ Integración Continua (CI)

Es la práctica de integrar cambios en el código de manera automática.
Cada vez que hacemos un push o un pull request, se ejecutan procesos como:

Instalación de dependencias

Ejecución de pruebas

Validación del build

Reporte de errores

✔️ Entrega Continua (CD)

Una vez superado el proceso de CI, el código está listo para generar un artefacto o package para distribución.
En este proyecto, CD genera un artefacto .zip con el contenido del directorio dist/.

🚀 Flujo de CI/CD implementado

Cada vez que realizo un push a la rama main:

GitHub Actions se activa automáticamente.

El pipeline ejecuta:

npm install

npm test

npm run build

El script de build genera la carpeta dist/.

GitHub Actions comprime dist/ y crea un artefacto disponible para descargar en la sección Actions > Artifacts.

📁 Estructura del Proyecto
src/
└── index.js

tests/
└── math.test.js

dist/            ← generado automáticamente por el build

.github/
└── workflows/
    └── ci.yml   ← workflow del pipeline

package.json
README.md

🧪 Pruebas unitarias

Este proyecto incluye pruebas básicas ubicadas en tests/math.test.js.

Ejemplo:

const sum = (a, b) => a + b;

test('la suma de 2 + 2 debe ser 4', () => {
    expect(sum(2, 2)).toBe(4);
});


Para ejecutarlas manualmente:

npm test

🏗️ Construcción del package

El comando:

npm run build


Genera la carpeta dist/ y copia allí los archivos necesarios para el package.

Ejemplo típico generado:

dist/
└── index.js

🤖 Archivo del workflow (CI/CD)

Ubicado en .github/workflows/ci.yml:

name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del código
        uses: actions/checkout@v3

      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas
        run: npm test

      - name: Construir el paquete
        run: npm run build

      - name: Subir artefacto generado
        uses: actions/upload-artifact@v3
        with:
          name: build-dist
          path: dist/