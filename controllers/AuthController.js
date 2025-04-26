import User from '../models/User';

exports.auth = async (res, req) => {
    const { email } = req.body;
    try {
        const user = User.findOne({
            where: { email }
        })
        if (user) {
            return res.status(400).json({
                error: "User already registered"
            })
        }else{
            const user = await User.create({email});

            return res.status(200).json({
                sucess: true,
                message: `User ${user} created sucessfully!`
            })
        }
    }
    catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
}