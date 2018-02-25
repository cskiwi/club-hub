function gen(model, type) {
  async function list(query, page, limit) {

    // Options setup for the mongoose paginate
    const options = {
      page,
      limit
    };

    // Try Catch the awaited promise to handle the error

    try {
      return await model.paginate(query, options);
    } catch (e) {
      // return a Error message describing the reason
      throw Error('Error while Paginating Users')
    }
  }

  async function create(user) {

    // Creating a new Mongoose Object by using the new keyword
    const newModel = new model(user);
    newModel.date_created = new Date();

    try {
      // Saving the User
      return await newModel.save();

    } catch (e) {

      // return a Error message describing the reason
      throw Error("Error while Creating User")
    }
  }

  async function read(id) {
    // Try Catch the awaited promise to handle the error

    try {
      return await model.findOne({_id: id});
    } catch (e) {
      // return a Error message describing the reason
      throw Error('Error while Paginating Users')
    }
  }

  async function update(user) {
    const id = user.id;
    let oldUser;

    try {
      //Find the old User Object by the Id

      oldUser = await model.findById(id);
    } catch (e) {
      throw Error("Error occured while Finding the User")
    }

    // If no old User Object exists return false
    if (!oldUser) {
      return false;
    }

    // TODO: make generic
    //Edit the User Object
    oldUser.title = user.title;
    oldUser.description = user.description;
    oldUser.status = user.status;



    try {
      return await oldUser.save();
    } catch (e) {
      throw Error("And Error occured while updating the User");
    }
  }


  async function del(id) {

    // Delete the User
    try {
      const deleted = await model.remove({_id: id});
      if (deleted.result.n === 0) {
        throw Error("User Could not be deleted")
      }
      return deleted
    } catch (e) {
      throw Error("Error Occured while Deleting the User")
    }
  }

  return {
    list,
    create,
    read,
    update,
    del,
    type
  };
}

module.exports = function (model, type) {
  return gen(model, type)
};
