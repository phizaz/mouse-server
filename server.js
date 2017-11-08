const express = require('express')
const robot = require("robotjs")
const parser = require('body-parser')

const app = express()

robot.setMouseDelay(1)

app.use(parser.urlencoded({ extended: true }))
app.use('/', express.static('public'))


// mouse
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

app.post('/left-clickDown',function(req,res){
    console.log('left click down')
    robot.mouseToggle("down","left")
})

app.post('/left-clickUp',function(req,res){
    console.log('left click up')
    robot.mouseToggle("up","left")
})

app.post('/right-click', (req, res) => {
    console.log('right click')
    robot.mouseClick('right')
    res.end()
})

app.post('/right-clickDown',function(req,res){
    console.log('right click down')
    robot.mouseToggle("down","right");
})

app.post('/right-clickUp',function(req,res){
    console.log('right click up')
    robot.mouseToggle("up","right")
})


// keyboard
app.post('/keyTap-up',function(req,res){
	console.log("keyTap up")
	robot.keyTap("W")
	res.end()
})

app.post('/keyTap-down',function(req,res){
	console.log("keyTap down")
	robot.keyTap("S")
	res.end()
})

app.post('/keyTap-left',function(req,res){
	console.log("keyTap left")
	robot.keyTap("A")
	res.end()
})

app.post('/keyTap-right',function(req,res){
	console.log("keyTap right")
	robot.keyTap("D")
	res.end()
})

app.post('/keyTap-space',function(req,res){
    console.log("keyTap space")
    robot.keyTap("space")
    res.end()
})

app.post('/keyTap-shift',function(req,res){
    console.log("keyTap shift")
    robot.keyTap("shift")
    res.end()
})

app.post('/keyTap-ctrl',function(req,res){
    console.log("keyTap ctrl")
    robot.keyTap("control")
    res.end()
})


app.post('/keyHold-up',function(req,res){
    console.log("Hold key-up for",req.body.holdTime,"ms")
    robot.keyToggle("W","down")
    setTimeout(function(){
        robot.keyToggle("W","up")
    },req.body.holdTime)
    res.end()
})

app.post('/keyHold-down',function(req,res){
    console.log("Hold key-down for",req.body.holdTime,"ms")
    robot.keyToggle("S","down")
    setTimeout(function(){
        robot.keyToggle("S","up")
    },req.body.holdTime)
    res.end()
})


app.post('/keyHold-left',function(req,res){
    console.log("Hold key-left for",req.body.holdTime,"ms")
    robot.keyToggle("A","down")
    setTimeout(function(){
        robot.keyToggle("A","up")
    },req.body.holdTime)
    res.end()
})


app.post('/keyHold-right',function(req,res){
    console.log("Hold key-right for",req.body.holdTime,"ms")
    robot.keyToggle("D","down")
    setTimeout(function(){
        robot.keyToggle("D","up")
    },req.body.holdTime)
    res.end()
})


app.post('/keyHold-space',function(req,res){
    console.log("Hold key-space for",req.body.holdTime,"ms")
    robot.keyToggle("space","down")
    setTimeout(function(){
        robot.keyToggle("space","up")
    },req.body.holdTime)
    res.end()
})


app.post('/keyHold-shift',function(req,res){
    console.log("Hold key-shift for",req.body.holdTime,"ms")
    robot.keyToggle("shift","down")
    setTimeout(function(){
        robot.keyToggle("shift","up")
    },req.body.holdTime)
    res.end()
})


app.post('/keyHold-ctrl',function(req,res){
    console.log("Hold key-ctrl for",req.body.holdTime,"ms")
    robot.keyToggle("control","down")
    setTimeout(function(){
        robot.keyToggle("control","up")
    },req.body.holdTime)
    res.end()
})


    
// listen
const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
});
