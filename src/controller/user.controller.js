import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res)=>{
    // get user details from frontend
    // validation
    // check if user already exists
    // check for images, check for avtar
    // upload them to cloudinary
    // create user object - create entry in db
    // remove password and refresh token field form response
    //check for user creation
    // return res



    const {fullName, email, username, password } = req.body

 
})




export {registerUser}