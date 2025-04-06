const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://pritamkumars811:jN0oELsZNvNCvUAr@cluster0.33qa9ym.mongodb.net/hello')
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

connectDB();


const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
});
const Post = mongoose.model('Post', PostSchema);

app.post('/api/posts', (req, res) => {
    const title = "Static Title";
    const content = "This is the static content.";
    const newPost = new Post({
        title,
        content,
    });

    newPost.save()
        .then((post) => res.json(post))
        .catch((err) => res.status(500).json({ message: 'Error posting data', error: err }));
});




app.get('/path', (req, res) => {
    const data = req.query;
    console.log("Received data:", data);
    res.json({ message: "Data received successfully!", receivedData: data });
});

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});
