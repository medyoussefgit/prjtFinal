const User = require("../models/user");
const jwt = require("jsonwebtoken");

const isAuth = async(req, res, next) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded)
        const user = await User.findById(decoded._id).select("-password");
        console.log(user)
        if (!user) {
            return res.status(401).send([{ msg: "Unauthorized" }]);
        }
        req.user = user;
        next();
    } catch (error) {
        res.send([{ msg: "Unauthorized" }]);
    }
};

module.exports = isAuth;