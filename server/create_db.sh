#!/bin/sh

sqlite3 -batch -init db_schema test.db <<EOF
.quit
EOF
