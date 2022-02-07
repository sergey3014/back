const db = require('../db')
class UserController {
    async createUser (req, res) {
        const {name, firstname, email} = req.body
/*
        console.log(name, firstname, email)
*/
        const newPerson = await db.query(`INSERT INTO person (name, firstname, email) values ($1, $2, $3) RETURNING *`, [name, firstname, email])
        res.json(newPerson.rows[0])

    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])

    }
    async updateUser(req, res) {
        const {id, name, firstname, email} = req.body
        const user = await db.query('UPDATE person set name = $1, firstname = $2, email = $3 where id = $4 RETURNING *', [name, firstname, email, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
