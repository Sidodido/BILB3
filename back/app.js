import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose';
const app = express();
const port = 3000;


// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/bilbApp'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const users = mongoose.model('users ', userSchema);

app.use(express.json())

// app.post("/register", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         // find user
//         const findUser = users.find((data) => email == data.email)
//         if (findUser) {
//             res.status(400).send("wrong email or password")
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         users.push({ email, password:hashedPassword });
//         console.log(users)
//         res.status(201).send("user created");
//     } catch (err) {
//         res.status(500).send({ message: err.message })

//     }
// })

app.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user using async/await
        const findUser  = await users.findOne({ email });
        if (findUser ) {
            return res.status(400).send("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser  = new users({ email, password: hashedPassword });
        await newUser .save(); // Save user to MongoDB

        res.status(201).send("User  created");
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
app.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body;
         const findUser  = await users.findOne({ email});
        if (!findUser) {
            res.status(400).send("wrong email or password");
        }
        const isMatch = await bcrypt.compare(password, findUser.password);
        if(isMatch){
            res.status(200).send("login success")
        }
        else{
            res.status(400).send("wrong email or password");

        }
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})