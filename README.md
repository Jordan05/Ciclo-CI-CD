# 📦 Proyecto de Ejemplo con CI/CD  
Este repositorio demuestra el ciclo completo de **Integración Continua (CI)** y **Despliegue Continuo (CD)** hasta la **construcción de un package Node.js**, incluyendo pruebas unitarias y un pipeline funcional con GitHub Actions.

---

# 🛠️ ¿Qué es CI/CD?  
### ✔️ **Integración Continua (CI)**
Automatiza procesos cada vez que subimos código:

- Instalación de dependencias  
- Ejecución de pruebas  
- Verificación del build  
- Generación de artefactos  

### ✔️ **Despliegue Continuo (CD)**
Tras completar CI exitosamente, el pipeline puede:

- Construir artefactos  
- Preparar el proyecto para producción  

---

# 🚀 Flujo de CI/CD utilizado en este proyecto

1. Hago push o PR a `main`
2. GitHub Actions ejecuta:
   - `npm install`
   - `npm test`
   - `npm run build`
3. Se genera un artefacto `.zip` en la sección *Artifacts*

---

# 📁 Estructura del Proyecto

src/
└── index.js

tests/
└── math.test.js

.github/workflows/
└── ci.yml

package.json
README.md


---

# 🧪 Pruebas Unitarias

Ejemplo ubicado en `tests/math.test.js`:

```js
const sum = (a, b) => a + b;

test('la suma de 2 + 2 debe ser 4', () => {
    expect(sum(2, 2)).toBe(4);
});


# Para correr pruebas manuales
npm test