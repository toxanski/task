const express = require('express');
const app = express();
const userController = require('./controllers/createUsers');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

app.get('/', userController.home);

app.post('/api/create/users', userController.sendUser);

app.listen(80, () => {
  console.log('Сервер запущен на порту 5000');
});