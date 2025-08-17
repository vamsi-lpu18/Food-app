const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://vamsi:80p448cgte@cluster0.8tymqsr.mongodb.net/GoFood?retryWrites=true&w=majority";

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected to database");

    try {
      const fetched_data = await mongoose.connection.db.collection("food_items");
      const data = await fetched_data.find({}).toArray();
      const fetchCat=await mongoose.connection.db.collection('foodCategory');
      const catData=await fetchCat.find({}).toArray();

      console.log("Food items found:", data.length);
      console.log("Categories found:", catData.length);
      
      global.food_Category=catData;
      
      if (data) {
        global.food_items = data;
        console.log("Global food_items set:", global.food_items.length, "items");
      }
    } catch (collectionError) {
      console.error("Error loading collections:", collectionError);
    }
    
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = mongoConnect;
