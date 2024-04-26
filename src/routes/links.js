const express = require("express")
const router = express.Router()

const pool = require("../database")

router.get("/add", (req, res) => {
  res.render("links/add")
})

router.post("/add", async (req, res) => {
  //   console.log(req.body)
  const { title, url, description } = req.body
  const newLink = {
    title,
    url,
    description,
  }
  try {
    // console.log(pool)
    await pool.query("INSERT INTO links set ?", [newLink])
    res.send("received")
  } catch (error) {
    console.log(error)
  }
  //   if (resp) {
  //     req.flash("success", "Link saved successfully")
  //     res.send("received")
  //   } else {
  //     req.flash("error", "Error saving link")
  //     res.send("error")
  //   }
})
module.exports = router
