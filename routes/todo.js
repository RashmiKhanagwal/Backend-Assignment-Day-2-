const router = require("express").Router();
const Todo = require("../models/todo");

// Day 2 TODO List with filtering

// fetch by Category

router.get("/category/:category", async (req,res) => {
  try {
    const category = await Todo.find(req.params.category);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// search by title

router.get("/title/:title", async (req,res) => {
  try {
    const title = await Todo.find(req.params.title);
    res.status(200).json(title);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add capability to sort the data by created_at

router.get("/sort", async (req,res) => {
    try{
        const todo = await Todo.find().sort({createdAt: 1});
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// Add api to mark Todo as done, can you use an exisiting api to achieve this?

router.patch("/updated/:id", async (req,res)=>{
    const id = req.params.id;
    try{
        const todo = await Todo.updateOne({_id : {$req:id}},{is_Complete : "Done"});
        res.status(200).json({message : "is_Complete updated to Done"})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;