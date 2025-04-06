const express = require("express");
const cors  = require("cors");

const app = express();
app.use(cors());

app.get('/path', (req, res) => {
    // const { name, age } = req.body;
    const data = req.query;  
    console.log("Received data:", data);  
    // res.send("hello world");
    res.json({ message: "Data received successfully!", receivedData: data });
});

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});
