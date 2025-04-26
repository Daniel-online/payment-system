import Settings from '../models/User'

exports.updateRate = async (req, res) => {
  const { redemptionRate, limitValue } = req.body;
  try {
    if (redemptionRate != null) {
      await Settings.upsert({ key: 'redemptionRate', value: redemptionRate });
    }
    if (limitValue != null) {
      await Settings.upsert({ key: 'limitValue', value: limitValue });
    }
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};