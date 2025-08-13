const Category = require("../models/category.model.js");
const Product = require("../models/product.model.js");


async function createProduct(reqData){
    let topLevel = await Category.findOne({name: reqData.topLavelCategory});

    if(!topLevel){
        topLevel = new Category({
            name: reqData.topLavelCategory,
            level : 1
        })
        await topLevel.save();
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLavelCategory,
        parentCategory: topLevel._id,
    })

    if(!secondLevel){
        secondLevel = new Category({
            name: reqData.secondLavelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
        await secondLevel.save();
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLavelCategory,
        parentCategory: secondLevel._id,
    })

    if(!thirdLevel){
        thirdLevel = new Category({
            name: reqData.thirdLavelCategory,
            parentCategory: secondLevel._id,
            level: 3,
        })
        await thirdLevel.save();
    }

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPersent: reqData.discountPersent,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.size,
        quantity: reqData.quantity,
        category: thirdLevel._id,

    })

    return await product.save();
}

async function deleteProduct(productId){
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return "Product deleted Successfully";
}

async function updateProduct(productId, reqData){
    return await Product.findByIdAndUpadate(productId, reqData);
}

async function findProductById(id){
    const product = await Product.findById(id).populate("category").exec();

    if(!product){
        throw new Error("Product not found with id" + id);
    }
    return product;
}


async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = parseInt(pageSize, 10) || 10;
  pageNumber = parseInt(pageNumber, 10) || 1;
  if (pageNumber < 1) pageNumber = 1;

  const filter = {};

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (!existCategory) {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
    filter.category = existCategory._id;
  }

  if (color) {
    const colorSet = new Set(
      color.split(",").map((c) => c.trim().toLowerCase())
    );
    if (colorSet.size > 0) {
      const colorRegex = new RegExp([...colorSet].join("|"), "i");
      filter.color = colorRegex;
    }
  }


  if (sizes) {
    const sizesSet = sizes.split(",").map((s) => s.trim());
    filter["sizes.name"] = { $in: sizesSet };
  }


  if (minPrice != null && maxPrice != null) {
    filter.discountedPrice = {
      $gte: Number(minPrice),
      $lte: Number(maxPrice),
    };
  }


  if (minDiscount != null) {
    filter.discountPersent = { $gt: Number(minDiscount) };
  }


  if (stock === "in_stock") {
    filter.quantity = { $gt: 0 };
  } else if (stock === "out_of_stock") {
    filter.quantity = { $lte: 0 };
  }

  const totalProducts = await Product.countDocuments(filter);

  let query = Product.find(filter).populate("category");

  if (sort === "price-low") {
    query = query.sort({ discountedPrice: 1 });
  } else if (sort === "price-high") {
    query = query.sort({ discountedPrice: -1 });
  }
  else {
  query = query.sort({ createdAt: -1 });
}


  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);


  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts / pageSize);

  return {
    content: products,
    currentPage: pageNumber,
    totalPages,
  };
}


async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct 
}