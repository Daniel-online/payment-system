import User from '../models/User'

exports.showSpent = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.json({ spentAmount: user.spentAmount });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
