const Group = require("../models/Group");

exports.list = async (req, res) => {
    try {
        // console.log(req.query)
        // const message = req.query.message;
        // const group = await Group.find({});
        // res.render("group", { group: group, message: message });
    } catch (e) {
        res.status(404).send({ message: "could not list group" });
    }
};

exports.create = async (req, res) => {

    try {
        // const group = new Group({ name: req.body.name, twitter: req.body.twitter });
        // await group.save();
        // res.redirect('/group/?message=group has been created')
    } catch (e) {
        if (e.errors) {
            console.log('Errors Listed Below:');
            console.log(e.errors);
            return;
        }
        return res.status(400).send({
            //   message: JSON.parse(e),
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        // const group = await Group.updateOne({ _id: id }, req.body);
        // res.redirect('/group/?message=group has been updated');
    } catch (e) {
        res.status(404).send({ message: `couldn't find group ${id}.`, });
    }
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    try {
        // const group = await Group.findById(id);
        // res.render('update-group', { group: group, id: id });
    } catch (e) {
        res.status(404).send({ message: `couldn't find group ${id}.`, });
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        // await Group.findByIdAndRemove(id);
        // res.redirect("/group");
    } catch (e) {
        res.status(404).send({ message: `could not delete record ${id}.`, });
    }
};

