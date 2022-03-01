const router = require("express").Router();
const Todo = require("../controllers/todo");

// Day 1 Todo List
router.post("/", todo.createTodo);
router.get("/:id", todo.getAllTodo);
router.get("/:id", todo.getOneTodo);
router.put("/:id", todo.updateTodo);
router.delete("/:id", todo.deleteTodo);

// Day 2 TODO List with filtering

router.get("/category/:category", Todo.fetchByCategory);
router.get("/title/:title", Todo.searchByTitle);
router.get("/sort", Todo.Sort);
router.patch("/updated/:id", Todo.todoDone);

module.exports = router;