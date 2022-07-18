const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")


const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000;

// Create Route for Generating JWT
app.post("/user/generateToken", (req, res) => {
    // Validate user here
    // Then generate JWT token
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey)
    res.json({token: token})
})

// Create Route for Validating JWT
app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in the header of the request
    // Due to security reasons.

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY
    let jwtSecretKey = process.env.JWT_SECRET_KEY

    try{
        const token = req.header(tokenHeaderKey)
        const verified = jwt. verify(token, jwtSecretKey)

        if(verified) {
            return res.json("Successfully Vierified.")
        } else {
            // Access denied
            return res.status(401).json(error);
        }
    } catch(error) {
        // Access denied
        return res.status(401).json(error);
    }
})

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))