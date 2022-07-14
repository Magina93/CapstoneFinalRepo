const gears= require('./db.json')

let globalID =9

module.exports = {
    getGears: (req, res) =>{
        res.status(200).send(gears)
        console.log(gears)
    },
    
createGear: (req, res)=> {
    // console.log(req.body)
    const {name, price, imageURL}= req.body;
    let newGear = {
        name,
        price,
        imageURL,
        id: globalID
    }
    gears.push(newGear)
    globalID++
    res.status(200).send(gears)
},
}