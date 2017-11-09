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

app.post('/left-clickToggle',function(req,res){
    if(req.body.state === "down"){
        console.log('left click down')
        robot.mouseToggle("down","left")
    }else if(req.body.state === "up"){
        console.log('left click up')
        robot.mouseToggle("up","left")
    }
    res.end()
})

app.post('/right-click', (req, res) => {
    console.log('right click')
    robot.mouseClick('right')
    res.end()
})

app.post('/right-clickToggle',function(req,res){
    if(req.body.state === "down"){
        console.log('right click down')
        robot.mouseToggle("down","right")
    }else if(req.body.state === "up"){
        console.log('right click up')
        robot.mouseToggle("up","right")
    }
    res.end()
})



// keyboard
app.post('/keyTap-W',function(req,res){
	console.log("keyTap W")
	robot.keyTap("W")
	res.end()
})

app.post('/keyTap-S',function(req,res){
	console.log("keyTap S")
	robot.keyTap("S")
	res.end()
})

app.post('/keyTap-A',function(req,res){
	console.log("keyTap A")
	robot.keyTap("A")
	res.end()
})

app.post('/keyTap-D',function(req,res){
	console.log("keyTap D")
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


app.post('/keyToggle-W',function(req,res){
    if(req.body.state === "down"){
        console.log("key-W down")
        robot.keyToggle("W","down")
    }else if(req.body.state === "up"){
        console.log("key-W up")
        robot.keyToggle("W","up")
    }
    res.end()
})


app.post('/keyToggle-S',function(req,res){
    if(req.body.state === "down"){
        console.log("key-S down")
        robot.keyToggle("S","down")
    }else if(req.body.state === "up"){
        console.log("key-S up")
        robot.keyToggle("S","up")
    }
    res.end()
})

app.post('/keyToggle-A',function(req,res){
    if(req.body.state === "down"){
        console.log("key-A down")
        robot.keyToggle("A","down")
    }else if(req.body.state === "up"){
        console.log("key-A up")
        robot.keyToggle("A","up")
    }
    res.end()
})

app.post('/keyToggle-D',function(req,res){
    if(req.body.state === "down"){
        console.log("key-D down")
        robot.keyToggle("D","down")
    }else if(req.body.state === "up"){
        console.log("key-D up")
        robot.keyToggle("D","up")
    }
    res.end()
})

app.post('/keyToggle-space',function(req,res){
    if(req.body.state === "down"){
        console.log("key-space down")
        robot.keyToggle("space","down")
    }else if(space_state === "up"){
        console.log("key-space up")
        robot.keyToggle("space","up")
    }
    res.end()
})

app.post('/keyToggle-shift',function(req,res){
    if(req.body.state === "down"){
        console.log("key-shift down")
        robot.keyToggle("shift","down")
    }else if(req.body.state === "up"){
        console.log("key-shift up")
        robot.keyToggle("shift","up")
    }
    res.end()
})

app.post('/keyToggle-ctrl',function(req,res){
    if(req.body.state === "down"){
        console.log("key-ctrl down")
        robot.keyToggle("control","down")
    }else if(req.body.state === "up"){
        console.log("key-ctrl up")
        robot.keyToggle("control","up")
    }
    res.end()
})

    
// listen
const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
});
