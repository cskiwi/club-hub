const User = require('../../server/models/user.model');
const Club = require('../../server/models/user.model');

const UserService = baseService(User);
const ClubService = baseService(Club);


exports.list = async function (req, res, next) {

  // Check the existence of the query parameters, If the exists doesn't exists assign a default value

  const page = req.query.page ? req.query.page : 1;
  const limit = req.query.limit ? req.query.limit : 10;

  try {

    const items = await ClubService.list({}, page, limit);

    // Return the list with the appropriate HTTP Status Code and Message.

    return res.status(200).json({status: 200, data: items, message: `Succesfully ${ClubService.type}s Recieved`});

  } catch (e) {

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: e.message});

  }
};

exports.create = async function (req, res, next) {

  // Req.Body contains the form submit values.
  try {

    // Calling the Service function with the new object from the Request Body
    const createdModel = await ClubService.create(req.body);
    return res.status(201).json({status: 201, data: createdModel, message: `Succesfully Created ${ClubService.type}`})
  } catch (e) {

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: `${ClubService.type} Creation was Unsuccesfull`})
  }
};

exports.read = async function (req, res, next) {

  const id = req.params.id;

  try {
    const item = await ClubService.read(id);
    let users = [];
    item.users.forEach(u => {
      users.push(u);
    });
    // push found users in the array;
    item.users = users;

    return res.status(200).json({status: 200, data: item, message: `Succesfully ${ClubService.type} Recieved`})
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message})
  }
};

exports.update = async function (req, res, next) {
  // Id is necessary for the update

  if (!req.body._id) {
    return res.status(400).json({status: 400., message: "Id must be present"})
  }

  const id = req.body._id;

  try {
    const updatedUser = await ClubService.update(req.body);
    return res.status(200).json({status: 200, data: updatedUser, message: `Succesfully Updated ${ClubService.type}`})
  } catch (e) {
    return res.status(400).json({status: 400., message: e.message})
  }
};

exports.del = async function (req, res, next) {
  const id = req.params.id;

  try {
    const deleted = await ClubService.delete(id);
    return res.status(204).json({status: 204, message: `Succesfully ${ClubService.type} Deleted`})
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message})
  }
};
