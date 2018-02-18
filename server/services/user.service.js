// Getting the Newly created Mongoose Model we just created
const User = require('../models/user.model');

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the To do List
exports.getUsers = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    const options = {
        page,
        limit
    };

    // Try Catch the awaited promise to handle the error

    try {
        return await User.paginate(query, options);
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Users')
    }
};


exports.getUser = async function (id) {
    // Try Catch the awaited promise to handle the error

    try {
        return await User.findOne({_id : id});
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Users')
    }
};

exports.createUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    const newUser = new User({
        title: user.title,
        description: user.description,
        date: new Date(),
        status: user.status
    });

    try {
        // Saving the User
        let user =  await newUser.save();

        return user;
    } catch (e) {

        // return a Error message describing the reason
        throw Error("Error while Creating User")
    }
};

exports.updateUser = async function (user) {
    const id = user.id;
    let oldUser;

    try {
        //Find the old User Object by the Id

        oldUser = await User.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }

    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }

    console.log('Old User', oldUser);

    //Edit the User Object
    oldUser.title = user.title;
    oldUser.description = user.description;
    oldUser.status = user.status;


    console.log('New User', oldUser);

    try {
        return await oldUser.save();
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
};

exports.deleteUser = async function (id) {

    // Delete the User
    try {
        const deleted = await User.remove({_id: id});
        if (deleted.result.n === 0) {
            throw Error("User Could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
};