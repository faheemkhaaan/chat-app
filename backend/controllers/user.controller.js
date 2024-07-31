import User from "../models/user.models.js";

export const getUserFromSideBar = async (req,res) =>{
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        res.status(200).send(filteredUsers);
        
    } catch (error) {
        console.error("Error in getUserFromSidebar controller",error.message);
        res.status(500).send({error:"Internal server error"});
    }
}