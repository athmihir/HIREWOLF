const db = require('../db')
require('dotenv').config();
const pg = require('pg')

const getQuestions = async(req, res) => {
    try {
        const { rows } = await db.query(`SELECT * FROM questionslist WHERE testquestion = true`)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}