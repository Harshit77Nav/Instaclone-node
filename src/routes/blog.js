const router = require("express").Router();
const Blog = require("../models/Blog");
const cors = require("cors");

router.use(cors())

router.get('/', (req, res) => {
  res.status(200).send("ok")
})
router.get("/blog", async (req, res) => {
  try {
    const result = await Blog.find().sort({_id:-1});
    res.json(result);
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});
router.post("/blog", async (req, res) => {
  try {
    const result = await Blog.create({
      author: req.body.author,
      location: req.body.location,
      description: req.body.description,
      image:req.body.image
    });
    res.json({
      status: "Success",
      result,
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});

module.exports = router;

