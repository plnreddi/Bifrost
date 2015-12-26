module.exports = {
  db: {
    name: "db",
    connector: process.env.DB_CONNECTOR || "memory",
    host: process.env.DB_HOST || null,
    port: process.env.DB_PORT || null
  }
};