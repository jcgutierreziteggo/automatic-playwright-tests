# Context.md

## Proyecto: Pruebas Visuales de Dashboard Interno

### Descripción General
- **Objetivo**: Automatizar pruebas visuales del frontend de un dashboard interno utilizado por administradores en una empresa.
- **Enfoque**: Verificar que los elementos visuales (páginas, menús, herramientas, formularios, información) se muestren correctamente al usuario.
- **No incluye**: Validación de funcionalidad o lógica de negocio, solo chequeo visual.
- **Tecnologías**:
  - **Node.js**: Entorno de ejecución para las pruebas.
  - **Playwright**: Herramienta de automatización para pruebas de navegador.

### Estructura del Dashboard
- **Página principal**: Punto de entrada tras el login.
- **Menú**:
  - Extenso y jerárquico.
  - Permite a los administradores navegar hacia herramientas, formularios o información específica.
- **Contenido**:
  - Herramientas para tareas administrativas.
  - Formularios para ingreso de datos.
  - Información mostrada para consulta.
- **Acceso**: Requiere autenticación mediante login.

### Requisitos de las Pruebas
- **Cobertura**:
  - Página principal.
  - Navegación por el menú (todos los niveles relevantes).
  - Visualización de herramientas, formularios e información.
- **Criterio de éxito**: Los elementos esperados son visibles en la interfaz (no se valida interacción ni funcionalidad).
- **Flujo básico**:
  1. Iniciar sesión con credenciales válidas.
  2. Acceder a la página principal.
  3. Navegar por el menú y verificar visualmente cada sección.

### Detalles Técnicos
- **Entorno**: Dashboard interno, probablemente alojado en un servidor privado de la empresa.
- **Autenticación**: 
  - Endpoint de login (pendiente de especificar).
  - Credenciales de prueba (pendiente de proporcionar).
- **Ejecución**: Scripts de Playwright en Node.js para simular navegación y capturar estado visual.

### Notas para IA
- **Prioridad**: Generar scripts que recorran el menú y tomen capturas o validen presencia de elementos clave.
- **Suposiciones**:
  - El dashboard usa HTML/CSS/JS estándar.
  - No hay iframes o tecnologías no soportadas por Playwright a menos que se especifique.
- **Pendiente**:
  - URL del dashboard.
  - Estructura exacta del menú (si se proporciona, actualizar este archivo).
  - Selectores CSS o identificadores de elementos a validar.

### Instrucciones para IA
- Usar este archivo como base para generar código de pruebas en Playwright.
- Solicitar al usuario detalles faltantes (URL, credenciales, selectores) si son necesarios para avanzar.
- Optimizar para ejecución rápida y reportes visuales simples.