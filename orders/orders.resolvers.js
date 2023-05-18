const ordersModel = require("./orders.model")

module.exports = {
    Query: {
        orders: (parent) => {
            return ordersModel.getAllOrders()
        }
    }
}