const db = require('../db')
require('dotenv').config();
const pg = require('pg')

const getQuestions = async(req, res) => {
    try {
        const { rows } = await db.query(`SELECT * FROM questionslist WHERE category = 1`)
        x = { questions : rows, current : 0 }
        res.status(200).send(x)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}
const getQuestionsList = async(req, res) => {
    try {
        const qList = ['Keyboard Shortcuts Using Hooks', 'Find The Error', 'Shopping With React', 'Cache API Data', 'Toggle Message', 'Handle form states', 'Skeleton HOC']
        res.status(200).send(qList)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

const getQuestionDeets = async(req, res) => {

}

module.exports = {
    getQuestions,
    getQuestionDeets,
    getQuestionsList
}