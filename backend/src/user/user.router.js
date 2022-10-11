const jwt = require("jsonwebtoken");
const UserModel = require("./user.schema");


app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    const user = new UserModel({ email, password })
    await user.save();
    res.send("user created successflly")
})