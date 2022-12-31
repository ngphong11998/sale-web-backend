async function createTableUsers(pool) {
    pool.query(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT  PRIMARY KEY,
            type VARCHAR(50) DEFAULT 'User',
            name VARCHAR(50),
            password VARCHAR(50),
            gender VARCHAR(15),
            email VARCHAR(50),
            phone VARCHAR(15),
            address VARCHAR(128))`
    );
    return;
};

module.exports = {
    createTableUsers
};