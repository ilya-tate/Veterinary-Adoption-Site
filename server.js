//* EXPRESS APP SETUP */
const express = require("express");
const { connectDB } = require("./server/util/connect");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_key,
  api_secret: process.env.cloud_secret
});

const app = express();
const PORT = process.env.PORT || 3000;

//* NEXT APP SETUP */
const next = require("next");
//!create a check for development vs production
const dev = process.env.NODE_ENV !== "production";
//! there are giant error warnings that pop up when in dev.
const nextApp = next({ dev });
//! this is a built in next router that will handle ALL requests made to the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARE */
const { authMiddleware } = require("./server/middleware/auth");

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));


const userRoute = require('./server/Routes/userRoutes')
const authRoute = require("./server/routes/authRoute");
const eventRoute = require("./server/Routes/animals");
const animalRoute = require("./server/Routes/events");

app.use('/api/v1/user', userRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/events", eventRoute)
app.use("/api/v1/animals", animalRoute)

//*SOCKETS */
// const { Server } = require("socket.io");
// const io = new Server(3001);

// io.on("connect", (socket) => {
//   socket.on("pingServer", (data) => {
//     console.log(data);
//   });
// });

connectDB();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});
