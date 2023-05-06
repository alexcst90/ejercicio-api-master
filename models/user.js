const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  address: {
    type: Object,
    properties: {
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      country_code: {
        type: String,
      },
    },
  },
  card: {
    type: Object,
    properties: {
      card_number: {
        type: String,
      },
      card_type: {
        type: String,
      },
      currency_code: {
        type: String,
      },
      balance: {
        type: String,
      },
    },
  },
  married_status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Users", userSchema);
