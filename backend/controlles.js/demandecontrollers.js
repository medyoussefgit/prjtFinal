const demande = require("../models/demande");

const adddemande = async(req, res) => {

    try {
        const newDemande = new demande({...req.body, user: req.user._id });
        console.log(newDemande)
        await newDemande.save();
        res.send({ demande: newDemande, message: "demande succesffuly" });
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const Onedemande = async(req, res) => {
    try {
        const oneDemande = await demande.findById(req.params.id);
        res.send({ oneDemande });
        //console.log(req.params.id);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getalldemande = async(req, res) => {
    const allDemande = await demande.find();
    res.send({ allDemande });
};

const getalldemandeclient = async(req, res) => {
    const allDemandeC = await demande.find({user:req.user._id});
    
    res.send({allDemandeC});
};

const deletedemande = async(req, res) => {
    try {
        const deleteDemande = await demande.deleteOne({ _id: req.params.id });
        console.log(deleteDemande);
        if (deleteDemande.deletedCount == 1) {
            return res.send({ msg: "demande secessufly deleted" });
        }
        res.status(400).send({ msg: "demande already deleted" })
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = { adddemande, getalldemande, Onedemande, deletedemande ,getalldemandeclient};