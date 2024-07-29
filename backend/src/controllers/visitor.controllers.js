import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { visitorModel } from "../models/visitor.models.js";


const getVisitorsCount = asyncHandler(async (req, res) => {
    const visitor = await visitorModel.findOne();
    if (!visitor) {
        throw new ApiError("No visitor count document found");
    }
    // Access the totalVisitors field
    const totalVisitors = visitor.totalVisitors;
    console.log("Current visitor count:", totalVisitors);
    res.status(200).json(
        new ApiResponse(200, totalVisitors, "Successfully found count of visitors")
    )
})

const incrementVisitorCount = async (req, res) => {
    try {
        const { isVisited } = req.body;
        if (!isVisited)
            throw new ApiError(500, "Invalid visitors");
        const result = await visitorModel.findOneAndUpdate(
            {}, // Empty query object to match the first document
            { $inc: { totalVisitors: 1 } }, // Increment the totalVisitors field by 1
            { new: true, upsert: true } // Upsert creates the document if it doesn't exist; new returns the updated document
        );
        if (!result) {
            throw new ApiError(500, "Failed to visitor count");
        }
        console.log("Updated visitor count:", result.totalVisitors);
        res.status(201).json(
            new ApiResponse(200, result.totalVisitors, "Successfully visitor count added!")
        )
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
    }
};


export { getVisitorsCount, incrementVisitorCount }