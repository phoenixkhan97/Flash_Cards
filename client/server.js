const express = require("express"); //installed 8/11
const cors = require("cors"); // installed 8/11

const app = express();

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
