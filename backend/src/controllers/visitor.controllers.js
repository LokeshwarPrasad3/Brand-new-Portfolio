import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { visitorModel } from "../models/visitor.models.js";

const saveNewVisitor = asyncHandler(async (req, res) => {
    const {
        isVisited,
        ipAddress,
        countryName,
        zipCode,
        cityName,
        regionName,
        continent
    } = req.body;
    if (!isVisited) {
        throw new ApiError(400, "Something went wrong");
    }
    // save to database with increase totalVisitors

    // First, fetch the current totalVisitors count
    const existingVisitor = await visitorModel.findOne({});
    console.log(existingVisitor)
    // Get the current totalVisitors count from the fetched document
    const totalVisitors = existingVisitor ? existingVisitor.totalVisitors : 0;

    // 🚀 inserting first time code
    // const updatedVisitors = await visitorModel.create({
    //     visitors: [{
    //         visitorNumber: 1, // Assuming this is the first visitor
    //         ipAddress,
    //         countryName,
    //         zipCode,
    //         cityName,
    //         regionName,
    //         continent,
    //     }],
    //     totalVisitors: 1 // Set the total visitors count to 1 for the first visitor
    // });

    // Now push new visitor and updated visitors number
    const updatedVisitors = await visitorModel.updateOne(
        {},
        {
            $inc: { totalVisitors: 1 }, // Increment totalVisitors by 1
            $push: {
                visitors: {
                    visitorNumber: totalVisitors + 1, // Increment visitorNumber by 1
                    ipAddress,
                    countryName,
                    zipCode,
                    cityName,
                    regionName,
                    continent,
                }
            }
        },
        { new: true }
    );

    if (!updatedVisitors) {
        throw new ApiError(500, "Visitor data not saved");
    }
    console.log(updatedVisitors)
    res.status(201).json(
        new ApiResponse(200, updatedVisitors, "Successfully saved visitor data!")
    )
})

const getAllVisitor = asyncHandler(async (req, res) => {
    const AllVisitors = await visitorModel.find();
    if (!AllVisitors)
        throw new ApiError(500, "Server error occurs")
    res.status(200).json(
        new ApiResponse(200, AllVisitors, "Successfully visitors found")
    )
})

export { saveNewVisitor, getAllVisitor }