const mongoose = require('mongoose');

const uri = "mongodb+srv://EcoSolar:Ya29@cluster0.cyy2a.mongodb.net/EcoSolarDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));
