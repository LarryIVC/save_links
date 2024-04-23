const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello world with bun!")
})

module.exports = router
