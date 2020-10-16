const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.json({ msg: "Hello world" })
})
const PORT = 5000
app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}`))
