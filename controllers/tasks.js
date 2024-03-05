const getAllTasks = (req, res) => {
  res.send('all items from the file ');
};

const createTask = (req, res) => {
  res.send('create tasks');
};

const getTask = (req, res) => {
  res.send('get single tasks');
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
