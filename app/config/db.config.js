module.exports = {
  HOST: 'localhost',
  USER: 'anduribe',
  PASSWORD: 'yoda2950',
  DB: 'db_jwtbootcamp',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}