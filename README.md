# homesocial
A simple in-home social network, suitable for young and old alike. This is just a very rough first draft and very few things work.

## Features

* No passwords - everything is based on trust (remember how there were no passwords for your computer at home ages ago)
* Served locally over your Wifi - you own all the data
* Very safe and secure since it does not hit the internet at all

## How to use

### Basic use

This is good for development, on the same machine

1. cd server ; npm install ; ./create_db.sh ; node index.js
  You will be prompted to enter the IP address of your computer on your WiFi network
2. cd client/web ; npm install ; node index.js
3. go to http://\<server-ip-address\>localhost:3000 in your browser, where server-ip-address is what you entered in step 1
4. Log in using any username you want

### Typical use

This is how this should be used. The first two steps are the same. After that

* Go to a different machine on the same WiFi network
* Go to http://\<server-ip-address\>:3000 in your browser, where server-ip-address is what you entered in step 1