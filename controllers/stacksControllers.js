const { Stack } = require('../models') // grab model object
const cheerio = require('cheerio')
const axios = require('axios')

async function getStacks () {
    let stacks = await new Promise((resolve, reject) => {

        axios.get("https://www.nytimes.com/section/us")
        .then( r => r.data)
        .then( r => {
            var result = []
            var $ = cheerio.load(r)

            $("li.css-ye6x8s").each(function (i, element){ 
                result.push({
                    title: $(element).find("h2").text(),
                    summary: $(element).find("p").text(),
                    url: "https://www.nytimes.com" +  $(element).find("a").attr("href"),
                    isSaved: false
                })
            })
            resolve(result)
        })
    })
    return stacks
}

module.exports = {
    // scrape and populate our data   
    createscrape: function (req, res){
        getStacks ()
        .then(r => {
            Stack.deleteMany({ isSaved: false })
                .then( _ => {
                    Stack.create(r)
                    .then( _ => res.json(r))
                })         
        }) 
        .catch(r => res.send(e))      
    },
    // Get all saved articles
    getsavedarticles: function(req,res){
        Stack.find({ isSaved: true })
        .then( r => res.json(r))
        .catch(e => console.error(e))
    },
    // Put and store a stack
    savearticle: function(req,res) {
        Stack.findByIdAndUpdate({ _id: req.params.id}, { isSaved: true })
        .then(r => res.sendStatus(200))
        .catch(res.sendStatus(404))
    }
}        


// Save and delete function to be fixed
    // Get All Stored data not saved
    // app.get('/stacks', (req, res) => {     
    //     Stack.find({ isSaved: false })
    //     .then(r => res.json(r))
    //     .catch(e => console.error(e))
    // })

    // // // Get All Stored data saved
    // app.get('/issaved', (req, res) => {     
    //     Stack.find({ isSaved: true })
    //     .then(r => res.json(r))
    //     .catch(e => console.error(e))
    // })
    
   // Put and store a stack
//    app.put('/stack/:id', (req, res) => {     
//     Stack.findByIdAndUpdate( req.params.id, { isSaved: true })
//         .then(r => res.sendStatus(200))
//         .catch(res.sendStatus(404))
//     })



