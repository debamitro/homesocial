const sqlite = require ('better-sqlite3')
exports = module.exports = {
    create_posts_json : (res) => {
        let db = new sqlite ('test.db', { readonly: true });
        res.json ({ posts: db.prepare ('SELECT * from t_posts').all () });
        db.close ();
    },
    new_post : (jsonData) => {
        let db = new sqlite ('test.db');
        db.prepare ('INSERT INTO t_posts (author, time, text) VALUES (?,?,?)').run (jsonData.author, jsonData.time, jsonData.text);
        db.close();
    }
}
