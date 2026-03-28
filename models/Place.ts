import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    location: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      required: true,
    },

    history: {
      type: String,
    },

    timings: {
      type: String,
    },

    entryFee: {
      type: String,
    },

    bestTime: {
      type: String,
    },

    category: {
      type: String, // Temple, Waterfall, Nature
    },
  },
  { timestamps: true }
);

export default mongoose.models.Place ||
  mongoose.model("Place", PlaceSchema);