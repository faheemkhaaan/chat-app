import jwt from 'jsonwebtoken'
import User from '../models/user.models.js';

const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "unautoraized - No TOKEN PROVIDED"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error: "unautoraized - INVALID PROVIDED"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).send({error: "user not found"})
        }
        req.user = user
        next()
    } catch (error) {
        
    }
}

export default protectRoute