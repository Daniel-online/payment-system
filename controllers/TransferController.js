import User from '../models/User';
import Settings from '../models/Settings';

exports.transfer = async (req, res) => {
  const { userId, recipientId, amount } = req.body;
  try {
    const user = await User.findByPk(userId);
    const recipient = await User.findByPk(recipientId);
    if (!user || !recipient) return res.status(404).json({ error: 'Usuário não encontrado' });

    if (amount <= 0 || amount > user.totalFunds)
      return res.status(400).json({ error: 'Saldo insuficiente para transferência' });

    const limitValue = await Settings.findByPk('limitValue');
    if (recipient.totalFunds + amount > limitValue.value)
      return res.status(400).json({ error: 'Limite de destinatário excedido' });

    user.totalFunds -= amount;
    recipient.totalFunds += amount;
    await user.save();
    await recipient.save();

    return res.json({ from: user.totalFunds, to: recipient.totalFunds });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
