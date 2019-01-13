var TeaService = require('../services/tea.service.js');

var Tea = require('../models/tea.model.js')

exports.getTeas = async function(req, res, next){
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 10; 

  try{
    var teas = await TeaService.getTeas({}, page, limit);
    return res.status(200).json({status: 200, data: teas, message: "Successfully Retrieved Teas"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.createTea = async function(req, res, next){
  var tea = {
    name: req.body.name,
    kind: req.body.kind,
    unit: req.body.unit,
    quantity: req.body.quantity,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  }

  try{
    var createdTea = await TeaService.createTea(tea);
    return res.status(201).json({status: 201, data: createdTea, message: "Successfully brewed tea!"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
  
}

exports.getTea = async function(req, res, next) {
  const id = req.params.id
  Tea.findById(id)
  .then(tea => {
    console.log(tea);
    return res.status(201).json({status: 201, data: tea, message: "This works!"})
  })
  .catch(err => console.log(err));
}


exports.updateTea = async function(req, res, next){

  if(!req.body._id){
    return res.status(400).json({status: 400, message: "ID must be present."});
  }

  var id = req.body._id;
  console.log(req.body);

  var tea = {
    id,
    name: req.body.name ? req.body.name : null,
    kind: req.body.kind ? req.body.kind : null,
    unit: req.body.unit ? req.body.unit : null,
    quantity: req.body.quantity ? req.body.quantity : null,
    price: req.body.price ? req.body.price : null,
    imageUrl: req.body.imageUrl ? req.body.imageUrl : null
  }

  try{
    var updatedTea = await TeaService.updateTea(tea);
    return res.status(200).json({status: 200, data: updatedTea, message: "Successfully brewed tea!"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.removeTea = async function(req, res, next){
  var id = req.params.id;

  try{
    var deleted = await TeaService.deleteTea(id);
    return res.status(204).json({status: 204, message: "Successfully removed tea."});
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}