const User = require('../user/user.model');
const Club = require('./club.model');
const ClubService = require('./club.service');
const UserService = require('../user/user.service');

exports.list = async function (req, res, next) {

  // Check the existence of the query parameters, If the exists doesn't exists assign a default value

  const page = req.query.page ? req.query.page : 1;
  const limit = req.query.limit ? req.query.limit : 10;

  try {

    const items = await ClubService.list({}, page, limit);

    // Return the list with the appropriate HTTP Status Code and Message.

    return res.status(200).json({status: 200, data: items, message: `Succesfully Clubs Recieved`});

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
    return res.status(201).json({status: 201, data: createdModel, message: `Succesfully Created Club`})
  } catch (e) {

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: `Club Creation was Unsuccesfull`})
  }
};

exports.read = async function (req, res, next) {

  const id = req.params.id;

  try {
    const item = await ClubService.read(id);
    return res.status(200).json({status: 200, data: item, message: `Succesfully Club Recieved`})
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
    return res.status(200).json({status: 200, data: updatedUser, message: `Succesfully Updated Club`})
  } catch (e) {
    return res.status(400).json({status: 400., message: e.message})
  }
};

exports.del = async function (req, res, next) {
  const id = req.params.id;

  try {
    const deleted = await ClubService.delete(id);
    return res.status(204).json({status: 204, message: `Succesfully Club Deleted`})
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message})
  }
};
