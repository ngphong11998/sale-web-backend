const { createProductService } = require('../../services/products/create-product.service')


const createProductController = async (req, res) => {
    try {
        const { body } = req;

        const resultCreateProduct = await createProductService(body);

        // return res.status(200).json({ data: resultCreateProduct })
        return res.json({ code: 200, message: "Successed!", data: resultCreateProduct })

    } catch (err) {
        let message
        if (typeof err === 'object') {
            message = JSON.stringify(err)
        } else {
            message = err
        }
        return res.status(400).json("Error in controller create product: " + message)
    }
}



module.exports = {
    createProductController: createProductController
}