import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})

userRouter.get('/users/:id', (req, res) => {
    users.fetchUser(req, res)
})

userRouter.post('/users/register', (req, res) => {
    users.registerUser(req, res)
})

userRouter.patch('/users/update/:id', (req, res) => {
    users.updateUser(req, res)
})

userRouter.delete('/users/delete/:id', (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => {
    users.login(req, res)
})

export {
    express,
    userRouter
}