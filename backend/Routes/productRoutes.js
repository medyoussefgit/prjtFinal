const express = require("express");
const { addproduct, allproduct, deleteProduct, OneProduct } = require("../controlles.js/productcontrollers");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const upload = require("../utils/multer");

const router = express.Router();


/**
 * @param POST /product/addProduct
 * @description add Product
 * @access PRIVATE ,Authorizd to Admin
 */
//addNewProduct
router.post(
    "/addProduct",
    isAuth,
    isAdmin,
    upload("products").single("file"),
    addproduct
);

/**
 * @param get /product/one/:id
 * @description get product by Id
 * @access Public
 */

router.get("/one/:id", OneProduct);

/**
 * @param get /product
 * @description all product
 * @access PUblic
 */
router.get("/", allproduct);

/**
 * @param delete /product/delete/:id
 * @description Delete Product
 * @access PRIvate for admin
 */
//
router.delete("/delete/:id", isAuth, isAdmin, deleteProduct);

module.exports = router;