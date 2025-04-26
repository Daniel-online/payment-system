import User from '../models/User';
import Settings from '../models/Settings';

exports.deposit = async (res, req) => {
    const { id, amount } = req.body;
    try {
        const user = await User.findByPk(id)
        const limitValue = await Settings.findByPk('limitValue');

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        if (amount < 0 || amount + totalFunds > limitValue) return res.status(400).json({ error: err.message });
        user.totalFunds += amount;
        await user.save();
        return res.json({ totalFunds: user.totalFunds, message: 'Deposit completed sucessfully!' })
    }
    catch (err) {
        return res.json({ error: err.message });
    }
}