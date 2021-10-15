var express = require('express')
var cors = require('cors')
var app = express()

//allow OPTIONS on just one resource
app.options('/the/resource/you/request', cors())

//allow OPTIONS on all resources
app.options('*', cors())