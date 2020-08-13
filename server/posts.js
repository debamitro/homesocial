const sqlite = require ('better-sqlite3')
exports = module.exports = {
    create_posts_json : (res) => {
        let db = new sqlite ('test.db', { readonly: true });
        res.json ({ posts: db.prepare ('SELECT * from t_posts ORDER BY time DESC').all () });
        db.close ();
    },
    new_post : (jsonData) => {
        const db = new sqlite ('test.db');
        const stmt = db.prepare ('INSERT INTO t_posts (author, time, text) VALUES (?,?,?)');
        const info = stmt.run (jsonData.author, jsonData.time, jsonData.text);
        db.close();
    },
    create_profile : (person, res) => {
        const db = new sqlite ('test.db', { readonly: true });
        res.json (db.prepare ('SELECT description FROM t_people WHERE name = ?').get (person));
        db.close ();
    }
}
