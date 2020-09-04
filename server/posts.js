const sqlite = require ('better-sqlite3')
exports = module.exports = {

    /** Returns a sorted list of posts */
    get_posts_json : (res) => {
        let db = new sqlite ('test.db', { readonly: true });
        res.json ({ posts: db.prepare ('SELECT * from t_posts ORDER BY time DESC').all () });
        db.close ();
    },

    /** Create a new post */
    new_post : (jsonData) => {
        const db = new sqlite ('test.db');
        const stmt = db.prepare ('INSERT INTO t_posts (author, time, text) VALUES (?,?,?)');
        const info = stmt.run (jsonData.author, jsonData.time, jsonData.text);
        db.close();
    },

    /** Delete all posts */
    delete_posts : () => {
        const db = new sqlite ('test.db');
        db.prepare ('DELETE FROM t_posts').run ();
        db.close();
    },

    /** Return one user profile */
    get_profile : (person, res) => {
        const db = new sqlite ('test.db', { readonly: true });
        res.json (db.prepare ('SELECT description FROM t_people WHERE name = ?').get (person));
        db.close ();
    },

    /** Returns the list of users */
    get_profiles : (res) => {
        const db = new sqlite ('test.db', { readonly: true });
        res.json (db.prepare ('SELECT name FROM t_people').all());
        db.close ();
    },

    /** Create a new user profile */
    new_profile : (jsonData) => {
        const db = new sqlite ('test.db');
        const stmt = db.prepare ('INSERT INTO t_people (name, description, age) VALUES (?,?,?)');
        const info = stmt.run (jsonData.name, jsonData.description, jsonData.age);
        db.close();    
    }
}
