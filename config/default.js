require("dotenv").config();
module.exports = {
  database: {
    mongodb: {
      MONGODB_DB: process.env.MONGO_URI,
    },
  },
};
