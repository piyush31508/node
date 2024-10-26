const fs = require('fs');
const Trial = require('../model/product');
const mongoose = require('mongoose');
exports.createProduct = async (req, res) => {
  try{
  const trial = new Trial(req.body);
  const savedProduct = await trial.save();

  res.status(201).json(savedProduct);}
  catch(err){
    console.log(err);
   res.status(500).json({ message: 'Error saving product', err });
  }

};


exports.getAllProduct = async (req,res) =>{
  const products = await Trial.find();
    res.json(products);
 };


exports.getProduct = async (req,res) =>{
    const id = req.params.id;
    const products = await Trial.findById(id);
    res.json(products);
 };


exports.replaceProduct = async (req,res) =>{
    const id = req.params.id;
    try{
        const doc = await Trial.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error replacing product', err });
    }
 };


exports.updateProduct = async (req,res) =>{
    const id = req.params.id;
    try{
      const doc = await Trial.findOneAndUpdate({_id:id},req.body,{new:true})
      res.status(201).json(doc);
  }
  catch(err){
      console.log(err);
      res.status(500).json({ message: 'Error replacing product', err });
  }
 };


exports.deleteProduct = async (req,res) =>{
  const id = req.params.id;
  try{
    const doc = await Trial.findOneAndDelete({_id:id})
    res.status(201).json(doc);
}
catch(err){
    console.log(err);
    res.status(500).json({ message: 'Error replacing product', err });
}
 };

