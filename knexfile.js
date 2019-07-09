module.exports = {

development: {
client: 'pg',
connection: 'postgres://localhost/name_of_database'
},

production: {
client: 'postgresql',
connection: process.env.DATABASE_URL
}

};
