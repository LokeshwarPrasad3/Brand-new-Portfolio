import { messageModel } from "../models/message.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { sendMessageToUser } from "../utils/EmailSender.js"

const saveMessageFromUser = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Message Received : ${name} - ${email} - ${message}`)
    // validate all fields
    if (!name || !email || !message) {
        throw new ApiError(400, "All fields is required");
    }

    // create one model for that user message
    const createdMessage = await messageModel.create({ name, email, message });
    if (!createdMessage) {
        throw new ApiError(500, "Something went wrong during save message");
    }
    console.log("Successfully Saved Message");

    // send message to user email
    await sendMessageToUser(name, email, message)

    // all done then give api-response
    return res.status(201).json(
        new ApiResponse(201, createdMessage, "Message saved Successfully!")
    )
})

const getAllMessages = asyncHandler(async (req, res) => {
    const allMessages = await messageModel.find();
    if (!allMessages) {
        throw new ApiError(500, "Something Went Wrong");
    }
    console.log("ALl-Messages Sent!")
    res.status(200).json(
        new ApiResponse(200, allMessages, "Successfully found Data!")
    )
})

export { saveMessageFromUser, getAllMessages }