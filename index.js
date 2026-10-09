const BASE_URL = "https://fakestoreapi.com/products";

const [method, route, ...params] = process.argv.slice(2);

if (!method || !route) {
  console.log(
    "Error: Debes ingresar un método HTTP y una ruta (ej. npm run start GET products)",
  );
  process.exit(1);
}

const [resource, productId] = route.split("/");

async function getProducts(id) {
  try {
    const url = id ? `${BASE_URL}/${id}` : BASE_URL;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error en la consulta: Estado ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
  }
}
// Función para crear un nuevo producto

async function createProduct(title, price, category) {
  if (!title || !price || !category) {
    console.log(
      "Error: Para crear un producto debes indicar <title> <price> <category>",
    );
    return;
  }

  try {
    const newProduct = {
      title,
      price: parseFloat(price),
      category,
    };

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error(`Error al crear el producto: Estado ${response.status}`);
    }

    const result = await response.json();

    console.log("Producto creado con éxito:");
    console.log(result);
    console.log(`ID del producto generado: ${result.id}`);
  } catch (error) {
    console.error("Error al agregar el producto:", error.message);
  }
}
// Función para eliminar un producto existente por ID
async function deleteProduct(id) {
  if (!id) {
    console.log(
      "Error: Debes especificar el ID del producto a eliminar (ej. products/7)",
    );
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `Error al eliminar el producto: Estado ${response.status}`,
      );
    }

    const result = await response.json();
    console.log("Respuesta de eliminación:");
    console.log(result);
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
  }
}

if (resource !== "products") {
  console.log(`Recurso "${resource}" no reconocido. Utiliza "products".`);
} else {
  switch (method.toUpperCase()) {
    case "GET":
      await getProducts(productId);
      break;

    case "POST":
      const [title, price, category] = params;
      await createProduct(title, price, category);
      break;

    case "DELETE":
      await deleteProduct(productId);
      break;

    default:
      console.log(`Método "${method}" no soportado. Usa GET, POST o DELETE.`);
  }
}
