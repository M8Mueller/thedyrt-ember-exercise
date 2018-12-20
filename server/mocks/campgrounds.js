'use strict';

module.exports = function(app) {
  const express = require('express');
  let campgroundsRouter = express.Router();

  let campgrounds = [
    {
      'type': 'campground',
      'id': '1',
      'attributes': {
        'name': 'Campground 1'
      }
    },
    {
      'type': 'campground',
      'id': '2',
      'attributes': {
        'name': 'Campground 2'
      }
    }
  ];

  campgroundsRouter.get('/', function(req, res) {
    res.send({
      'data': campgrounds
    });
  });

  campgroundsRouter.post('/', function(req, res) {
    console.log(req.body);
    res.status(201).end();
  });

  campgroundsRouter.get('/:id', function(req, res) {
    res.send({
      'data': campgrounds
    });
  });

  campgroundsRouter.put('/:id', function(req, res) {
    res.send({
      'data': campgrounds
    });
  });

  campgroundsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/campgrounds', require('body-parser').json());
  app.use('/api/campgrounds', campgroundsRouter);
};
