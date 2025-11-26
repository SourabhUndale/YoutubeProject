import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });


const uloadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file uploded successfully
        console.log("file uploded successfully", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the localiy save file 
        return null
    }
}


export {uloadOnCloudinary}