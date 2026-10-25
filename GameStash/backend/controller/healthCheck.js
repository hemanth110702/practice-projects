const healthCheck = (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'Gamestash => OK',
    timestamp: Date.now(),
  }
  res.status(200).send(healthcheck);
}

module.exports = healthCheck;