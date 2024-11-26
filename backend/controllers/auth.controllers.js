import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {generateTokenAndSetCookie} from "../utils/generateToken.js";

export const signupUser = asyncHandler( async( req, res ) => {
    const { username, email, password} = req.body;

    if(!username || !email || !password){
        throw new ApiError(400, "all fields are required");
    }

    const user = await User.findOne({
        $or:[{username},{email}]
    });

    if(user){
        throw new ApiError(409, " user already exists");
    }

    const newUser = await User.create({
        username,
        email,
        password
    });

    const createdUser = await User.findById(newUser._id).select("-password");

    if(!createdUser){
        throw new ApiError(500, "something went wrong while creating the user");
    }
    generateTokenAndSetCookie(createdUser._id,res);

    return res.status(201)
    .json(new ApiResponse(201, createdUser, "user signup successfully"))
});