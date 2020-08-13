#!/bin/sh

sqlite3 -batch test.db <<EOF
delete from t_posts;
delete from t_people;
EOF
