const BASE_URL = "https://fakestoreapi.com/products";

const [method, route, ...params] = process.argv.slice(2);

if (!method || !route) {
  process.exit(1); 
}

const [resource, productId] = route.split("/");

async function getProducts(id) { 
  try  {
    const url = id ? `${BASE_URL}/${id}` : BASE_URL;
    const response = await fetch(url);
    if (!response.ok) return;

    const data = await response.json();
    console.log(data); 

    } catch (error) {
      console.error(error.message);
    }
  }

  async function createProduct(title, price, category) {
    try {
      const newProduct = {
        title,
        price: isNaN(price) ? price : parseFloat(price),
        category,
      };
    

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },

        body: JSON.stringify(newProduct),
    });

    if (!response.ok) return;

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) return;

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  } 
}

if (resource === "products") {
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
      
  }
}
