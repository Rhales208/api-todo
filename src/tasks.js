const { response, request } = require("express")


// exports.createTask = (request,response) => {

// }//es5 way of doind it

exports.getTasks = (request,response) => {
 response.send('Get Task is working.')
}
// exports.updateTask = (request,response) => {

// }