import { asyncHandler } from "../utils/asyncHandler.js";
import {User} from "../models/user.models.js"
import {asyncHandler} from "../utils/asyncHandler.js"


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
    console.log("email:", email);

    if(
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
       
    }
    
 
})

const loginUser = asyncHandler(async(req, res) =>{
    // check user is present in db user password and username
    // give him access token

    
})




export {
    registerUser,
    loginUser

}