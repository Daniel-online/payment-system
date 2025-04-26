import User from '../model/Users';

exports.payment = async(res, req) =>{
    const {id, amount} = req.body;
    try{
        const user = await User.findByPk(id)
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        const totalAvailable = user.totalFunds + user.totalPoints;
        if (amount <= 0 || amount > totalAvailable)
          return res.status(400).json({ error: 'Saldo insuficiente' });
    
        // gastar pontos primeiro
        let remaining = amount;
        const spentPoints = Math.min(user.totalPoints, remaining);
        user.totalPoints -= spentPoints;
        remaining -= spentPoints;
    
        // depois fundos
        user.totalFunds -= remaining;
    
        // calcular pontos ganhos só sobre o valor gasto em dinheiro
        const rate = await Settings.findByPk('redemptionRate');
        const earned = (remaining * rate.value) / 100;
        user.totalPoints += earned;
    
        await user.save();
        return res.json({ totalFunds: user.totalFunds, totalPoints: user.totalPoints });
    }catch(err){
        return res.json({ error: err.message });
    }
}
