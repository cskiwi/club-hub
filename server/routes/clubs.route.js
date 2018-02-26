const baseController = require('../base.controller');
const baseService = require('../base.service');
const Club = require('../../server/models/club.model');

const express = require('express');

const ClubController = baseController(baseService(Club, 'club'));
const clubs = express.Router();

clubs.get('/', ClubController.list);
clubs.get('/', ClubController.create);
clubs.get('/:id', ClubController.read);
clubs.get('/', ClubController.update);
clubs.get('/:id', ClubController.del);


module.exports.clubs = clubs;
