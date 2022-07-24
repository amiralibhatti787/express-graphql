const productsModel = require("./products.model");
module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProdcuts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProdcutsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProdcutById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
