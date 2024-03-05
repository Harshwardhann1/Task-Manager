const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = (req, res) => {
  // res.send('create tasks');
  res.json(req.body);
};

const getTask = (req, res) => {
  // res.send('get single tasks');
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send('update tasks');
};
const deleteTask = (req, res) => {
  res.send('delete tasks');
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
