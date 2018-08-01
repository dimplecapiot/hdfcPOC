const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use((req, res, next) => {
  var dataJson = [
    {
      id: 1,
      stage: 'landing',
      entity: [
        {
          id: 1,
          name: 'landing 1',
          attributes: [
            {
              id: 1,
              name: 'attribute 1'
            }
          ]
        },
        {
          id: 2,
          name: 'landing 2',
          attributes: [
            {
              id: 1,
              name: 'attribute 1'
            },
            {
              id: 2,
              name: 'attribute 2'
            }
          ]
        }
      ],
    },
    {
      stages: 'staging',
      entity: []
    },
    {
      stages: 'sor',
      entity: []
    },
    {
      stages: 'mart',
      entity: []
    },
  ];

  res.status(200).json(dataJson);
  next();
});

module.exports = app;
