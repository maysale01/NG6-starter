var dotenv = require('dotenv');
var path   = require('path');
var config = {};

// Loads the .env file in root directory
dotenv.load();

config.API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api/v1/'; 

module.exports = config;