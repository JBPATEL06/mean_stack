const express = require('express')
const app = express()
notes = []
lastindex = notes.length
app.use(express.json())
user =['jeel','jay','hemal','vivek','viraj','shubham','dhruvil']



app.get('/notes',function (req,res){
    res.send(notes)
});


app.post('/notes',function (req,res){
    notes.push(req.body);
    res.send( res.status(200).json({
       messgae : "succesfull"
    }))
})

app.patch('/notes/:index',function (req,res){
    var index = req.params.index;
    notes[index].tittle = req.body.tittle
    res.send(notes)
})

app.delete('/notes/:index',function (req,res){
    var index = req.params.index
    delete notes[index]
    res.send(notes)
})


app.get('/',function (req,res){
    res.send('Your sever is running')
})

app.get('/about',,function(req,res){
    res.json({
        name : "Bhanderi Jeel",
        role : "Developer"
    })
    res.end()
})

app.post('/feedback',function (req,res){
    if(req.body.message != null){
        res.json({
            message : req.body,
            response : "thank you for your feedback"
        })
        res.end()
    }
})

app.patch('/user/:index',function (req,res){
    var index = req.params.index;
    if(index <= 6){
        res.write("your old name " + user[index] + " ")
        user[index] = req.body.name;
        res.write("your new name " + user[index] + " ")
        res.end("your name is updated")

    }
else{
    res.send("invalid argument")
}
})

  app.delete('/user/:index',function (req,res){
    var index = req.params.index
    if(index <= 6  && index >= 0){
        usersname = user[index]
    delete user[index]
    res.send(usersname+" "+ "is deleted from our server thank you")
    }
    else{
        res.send("aap jis user ko delete karna chhahte ho wo abhi hamare server pehi nahi kindly recheck")
    }
})


module.exports = {  
    app:app
}