const Product = require("../models/product");
//add product
const addproduct = async(req, res) => {
    // protocole :http
    // host : localhost
    const url = `${req.protocol}://${req.get("host")}`;
    console.log(req.file);
    const { file } = req;
    try {
        const newProduct = new Product({...req.body, user: req.user._id });
        newProduct.image = `${url}/${req.file.path}`;
        await newProduct.save();
        res.send({ product: newProduct, message: "product succesffuly" });
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const OneProduct = async(req, res) => {
    try {
        const oneProduct = await Product.findById(req.params.id);
        res.send({ oneProduct });
        //console.log(req.params.id);
    } catch (err) {
        res.status(400).send(err.message);
    }
}


const allproduct = async(req, res) => {
    try {
        const allProducts = await Product.find({}).populate("user", "fullName");
        res.send({ allProducts });
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const deleteProduct = async(req, res) => {
    try {
        const deleteProduct = await Product.deleteOne({ _id: req.params.id });
        console.log(deleteProduct);
        if (deleteProduct.deletedCount == 1) {
            return res.send({ msg: "product secessufly deleted" });
        }
        res.status(400).send({ msg: "product already deleted" })
    } catch (err) {
        res.status(400).send(err.message);
    }
}
module.exports = { addproduct, allproduct, deleteProduct, OneProduct };