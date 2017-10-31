const express = require('express')
const robot = require("robotjs")
const parser = require('body-parser')

const app = express()

robot.setMouseDelay(1)

app.use(parser.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.post('/move-to', (req, res) => {
    const { x, y } = req.body
    console.log(`moving cursor to (${x}, ${y})`)
    robot.moveMouseSmooth(x | 0, y | 0)
    res.end()
})

app.post('/move-by', (req, res) => {
    const { x, y } = req.body
    const mouse = robot.getMousePos()
    const [xx, yy] = [(mouse.x | 0) + (x | 0), (mouse.y | 0) + (y | 0)]
    console.log(`moving cursor by (${x}, ${y}) from (${mouse.x}, ${mouse.y}) to (${xx}, ${yy})`)
    robot.moveMouseSmooth(xx, yy)
    res.end()
})

app.post('/left-click', (req, res) => {
    console.log('left click')
    robot.mouseClick('left')
    res.end()
})

app.post('/right-click', (req, res) => {
    console.log('right click')
    robot.mouseClick('right')
    res.end()
})

const port = 3000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})
