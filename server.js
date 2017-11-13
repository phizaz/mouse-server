const express = require('express')
const robot = require("robotjs")
const parser = require('body-parser')

const app = express()

robot.setMouseDelay(1)

app.use(parser.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.post('/move-to', (req, res) => {
    const { x, y } = req.body
    console.log(`moving cursor to (x: ${x}, y: ${y})`)
    robot.moveMouse(x | 0, y | 0)
    res.end()
})

app.post('/move-by', (req, res) => {
    const { x, y } = req.body
    const mouse = robot.getMousePos()
    const [xx, yy] = [(mouse.x | 0) + (x | 0), (mouse.y | 0) + (y | 0)]
    console.log(`moving cursor by (x: ${x}, y: ${y}) from (x: ${mouse.x}, y: ${mouse.y}) to (x: ${xx}, y: ${yy})`)
    robot.moveMouse(xx, yy)
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

app.post('/scroll-by', (req, res) => {
    const { v, h } = req.body
    console.log(`scroll by (horz: ${h}, vert: ${v})`)
    robot.scrollMouse(v | 0, h | 0)
    res.end()
})

const port = 3000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})
