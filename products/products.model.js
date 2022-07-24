const products = [
  { id: "redshoe", description: "Red Shoe", price: 12.12, reviews: [] },
  { id: "bluejean", description: "Blue Jean", price: 15.12, reviews: [] },
];

function getAllProdcuts() {
  return products;
}
function getProdcutsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProdcutById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}
function addNewProductReview(id, rating, comment = []) {
  const matchedProduct = getProdcutById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct?.reviews?.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllProdcuts,
  getProdcutsByPrice,
  getProdcutById,
  addNewProduct,
  addNewProductReview,
};
