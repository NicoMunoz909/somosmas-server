const { Testimonials } = require('../models');

const createTestimonial = async (req,res) => {
  try {
    let { name, imageUrl, content } = req.body
    let newTestimonial = await Testimonials.create({
      name,
      imageUrl,
      content
    })
    return res.json(newTestimonial)
  } catch(err){
    if (err.errors[0].validatorKey === "notEmpty") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be empty");
        case 'content':
          return res.status(400).json("Content cannot be empty");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is_null") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be null");
        case 'content':
          return res.status(400).json("Content cannot be null");
        default:
          break;
      }
    } else {
      return res.status(400).json(err)
      console.log(err)
    }
  }
}

module.exports = {
  createTestimonial
}