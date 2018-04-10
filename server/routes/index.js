import express from 'express';
import {
  todos as todosController,
  todoItems as todoItemsController
} from '../controllers';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!'
}));

router.get('/api/todos', todosController.list);
router.post('/api/todos', todosController.create);
router.get('/api/todos/:todoId', todosController.retrieve);
router.put('/api/todos/:todoId', todosController.update);
router.delete('/api/todos/:todoId', todosController.destroy);

router.post('/api/todos/:todoId/items', todoItemsController.create);
router.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
router.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
router.all('/api/todos/:todoId/items', (req, res) =>
  res.status(405).send({
    message: 'Method Not Allowed'
  }));


export default router;