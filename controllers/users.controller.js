// Accessing the Service that we just created

const UserService = require('../services/user.service');

// Saving the context of this module inside the _the variable
_this = this;


// Async Controller function to get the To do List

exports.getUsers = async function (req, res, next) {

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value

    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;

    try {

        const users = await UserService.list({}, page, limit);

        // Return the users list with the appropriate HTTP Status Code and Message.

        return res.status(200).json({status: 200, data: users, message: "Succesfully Users Recieved"});

    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: e.message});

    }
};

exports.getUser = async function (req, res, next) {

    const id = req.params.id;

    try {
        const user = await UserService.read(id);
        return res.status(200).json({status: 200, data: user, message: "Succesfully User Recieved"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};


exports.createUser = async function (req, res, next) {

    // Req.Body contains the form submit values.
    try {

        // Calling the Service function with the new object from the Request Body
        const createdUser = await UserService.create(req.body);
        return res.status(201).json({status: 201, data: createdUser, message: "Succesfully Created ToDo"})
    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
};

exports.updateUser = async function (req, res, next) {

    // Id is necessary for the update

    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    const id = req.body._id;

    console.log('New Body', req.body);

    const user = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    };

    try {
        const updatedUser = await UserService.update(user);
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated Tod"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
};

exports.removeUser = async function (req, res, next) {

    const id = req.params.id;

    try {
        const deleted = await UserService.delete(id);
        return res.status(204).json({status: 204, message: "Succesfully User Deleted"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};
