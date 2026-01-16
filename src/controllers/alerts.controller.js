export const getAlerts = (req, res) => {
  res.json([{ id: 1, level: "warning", message: "Latency spike detected" }]);
};
