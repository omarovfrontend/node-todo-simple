const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// порт на котором будет запущено приложение
const PORT = 5001

// создаем приложение
const app = express()

// настройка тела запросов
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// настройка CORS
app.use(cors())

const todoRouter = require('./routes/todo');

app.use('v1/todo', todoRouter)

// подключение к БД
mongoose.connect('')
  .then(() => {
    console.log('MongoDB Connected!');

    // запуск сервера
    app.listen(PORT, () => {
      console.log(`Listen port ${PORT}`)
    })
  })
  .catch(error => {
    console.error(error);
  });
