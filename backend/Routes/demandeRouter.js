const express = require("express");

const { adddemande, getalldemande, Onedemande, deletedemande, getalldemandeclient } = require("../controlles.js/demandecontrollers");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();


/**
 * @param POST /product/addProduct
 * @description add Product
 * @access PRIVATE ,Authorizd to client
 */
//addNewDemande
router.post(
    "/adddemande",
    isAuth,
    adddemande
);

/**
 * @param get /demande/one/:id
 * @description get demande by Id
 * @access PRIVATE ,Authorizd to Admin
 */

router.get("/one/:id", isAuth, isAdmin, Onedemande);

/**
 * @param get /demande/all
 * @description get all demandes
 * @access PRIVATE ,Authorizd to Admin
 */
router.get("/alldemande", isAuth, isAdmin, getalldemande);
/**
 * @param get /demande/all
 * @description get all demandes
 * @access PRIVATE ,Authorizd to Admin
 */
router.get("/alldemandeclient", isAuth, getalldemandeclient);
/**
 * @param delete /demande/delete/:id
 * @description Delete demande
 * @access PRIvate for admin
 */
//
router.delete("/delete/:id", isAuth, isAdmin, deletedemande);

module.exports = router;