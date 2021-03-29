const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

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

// запуск сервера
app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`)
})
