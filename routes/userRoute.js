const { json, Router } = require("express")
const fs = require("fs")
const {join} = fs

const filePath = join(__dirname,'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

        try {
            return JSON.parse(data)            
        } catch (error) {
            return []
        }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users,null,'\t'))

const userRoute = (app) => {
    app.route('/users')
}