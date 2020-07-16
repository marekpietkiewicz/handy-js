/**
 * How to import json file into React, node.js
 */


//The traditional way of importing files, which are mostly libraries, is:

import someFile from'../data/someFile.json'

//Sorry but it doesn’t work if you want to load a file Instead, try out something like this:
const someFile = require('../data/someFile.json')