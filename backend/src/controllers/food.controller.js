const foodModel = require("../models/food.model");


async function createFood(req, res) {
    console.log(req.foodPartner)
    res.send("Food item created")

}

module.exports = {
    createFood
}