const foodModel = require("../models/food.model");


async function createFood(req, res) {
    console.log(req.foodPartner)

    console.log(req.body)
9
    res.send("Food item created")

}

module.exports = {
    createFood
}