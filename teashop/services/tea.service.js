var Tea = require('../models/tea.model.js')

exports.getTeas = async function(query, page, limit){
  var options = {
    page,
    limit
  }
  try {
    var teas = await Tea.paginate(query, options);
    return teas;
  } catch(e){
    throw Error('Many apologies, our teas are refusing to queue in an orderly fashion.')
  }
}

exports.createTea = async function(tea){
  
  var newTea = new Tea({
    name: tea.name,
    kind: tea.kind,
    unit: tea.unit,
    quantity: tea.quantity,
    price: tea.price,
    imageUrl: tea.imageUrl
  });

  try {
    var savedTea = await newTea.save();
    return savedTea;
  } catch(e){
    throw Error("Tea spilled without brewing, sorry.")
  }
}

exports.getTea = async function(tea) {
  const id = tea.id;
  const showTea = Tea.findById(id);
  console.log(showTea);
}

exports.updateTea = async function(tea){
  var id = tea.id
  try {
    var oldTea = await Tea.findById(id);
  } catch(e){
    throw Error("Sorry, we were unable to find that tea.");
  }

  if(!oldTea){
    return false;
  }

  console.log(oldTea);

  oldTea.name = tea.name;
  oldTea.kind = tea.kind;
  oldTea.unit = tea.unit;
  oldTea.quantity = tea.quantity;
  oldTea.price = tea.price;
  oldTea.imageUrl = tea.imageUrl;

  console.log(oldTea);

  try{
    var savedTea = await oldTea.save();
    return savedTea;
  }catch(e){
    throw Error("Tea did not brew correctly; update aborted");
  }
}

exports.deleteTea = async function(id){
  try{
    var deleted = await Tea.deleteOne({_id: id});
    if(deleted.n === 0){
      throw Error("Tea could not be deleted.")
    }
    return deleted
  } catch(e){
    throw Error("Error occurred while spilling the tea.")
  }
}