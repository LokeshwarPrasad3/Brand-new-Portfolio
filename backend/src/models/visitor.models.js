import { Schema, model } from "mongoose";

const visitorDetails = new Schema({
    visitorNumber: {
        type: String,
        required: true,
    },
    ipAddress: { type: String, },
    countryName: { type: String, },
    zipCode: { type: String, },
    cityName: { type: String, },
    regionName: { type: String, },
    continent: { type: String, },
})

const visitorSchema = new Schema({
    totalVisitors: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
})

export const visitorModel = model("visitorModel", visitorSchema);
