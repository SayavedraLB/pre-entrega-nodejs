# Pre-Entrega de Proyecto: Gestión de Productos CLI (Node.js)

Herramienta de línea de comandos (CLI) desarrollada en Node.js que interactúa con la API REST de FakeStore para realizar operaciones de consulta, creación y eliminación de productos.

## 🛠️ Tecnologías y Requisitos

- **Node.js:** Versión LTS (soporte nativo de `fetch`) 
- **Sistema de Módulos:** ESModules (`"type": "module"`) 
- **API Consumida:** [FakeStore API](https://fakestoreapi.com/)

---

## 🚀 Instalación y Puesta en Marcha

# 1. Clonar el repositorio:
    git clone https://github.com/SayavedraLB/preentrega-node.git

# 2. Ingresar a la carpeta del proyecto:
    cd preentrega-node

# 3. Ejecutar los scripts con 
    `npm run start`.


---

## 💻 Comandos de Ejecución

### 1. Consultar todos los productos 
# Realiza una petición `GET` asíncrona y muestra la lista completa de productos disponibles:
    npm run start GET products

### 2. Consultar un producto por ID
# Obtiene los detalles del producto correspondiente al identificador numérico:
    npm run start GET products/15

### 3. Crear un nuevo producto 
# Envía una petición `POST` con los parámetros `<title> <price> <category>` y devuelve el objeto creado con su ID generado:
    npm run start POST products T-Shirt-Rex 300 remeras

### 4. Eliminar un producto 
# Envía una petición `DELETE` con el identificador del producto y muestra la confirmación de la API:
    npm run start DELETE products/7


---

## 📁 Estructura del Proyecto

```text
├── index.js          # Punto de entrada y lógica de gestión 
├── package.json      # Configuración del proyecto, dependencias y scripts 
├── .gitignore        # Archivos y directorios ignorados por Git 
└── README.md         # Documentación de uso
```