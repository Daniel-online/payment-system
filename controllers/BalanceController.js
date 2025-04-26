import User from '../models/User';

exports.balance= async(res, req)=>{
    const {id} = req.params;
    try{
        const user = await User.findByPk(id)
        if(!user){return res.status(404).json({error:"User not found"}) };
        return res.json({
            totalPoints: user.totalPoints,
            totalFunds: user.totalFunds,
            expiration: user.pointsExpiration
        })
    }
    catch(err){
        return res.json({error:err.message})
    }
}