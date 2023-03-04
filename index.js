const express = require('express')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')
dotenv.config()

const app = express()

// set view engine ejs
app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use(express.static('views'))
app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('pages/index.ejs', {
        layout: 'layout/index.ejs'
    })
})

const PORT_SERVER = process.env.PORT_SERVER || 3000

app.listen(PORT_SERVER, (err) => {
    if (err) return console.error(err);
    console.log(`Server running`)
})