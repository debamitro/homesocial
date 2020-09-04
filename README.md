# homesocial
A simple in-home social network, suitable for young and old alike. This is just a very rough first draft and very few things work.

## Features

* No passwords - everything is based on trust (remember how there were no passwords for your computer at home ages ago)
* No signup required - join any time with your choice of username
* You can delete all the posts and start over any time - unlike the internet this social network is forgiving of any mistakes anyone makes
* Served locally over your Wifi - you own all the data
* Very safe and secure since it does not hit the internet at all
* You can give whatever name you want to the social network - by default it is called 'Homesocial' but you could call it 'Turtles' as well

## Demo

Since this works off the internet, providing a live demo is not possible. [Here is a demo created with screenshots](https://debamitro.github.io/homesocial-demo-1/) - it should convey how this can be used.

## How to use

### Basic use

This is good for development, on the same machine

1. cd server ; npm install ; ./create_db.sh ; SERVER_HOSTNAME=<server-ip-address> node index.js
  'server-ip-address' is the IP address of your computer on your WiFi network
2. cd client/web ; npm install ;  node index.js
3. go to http://\<server-ip-address\>localhost:3000 
4. Log in using any username you want

### Typical use

This is how this should be used. The first two steps are the same. After that

* Go to a different machine on the same WiFi network
* Go to http://\<server-ip-address\>:3000 in your browser, where server-ip-address is what you entered in step 1

### Customization

You can customize the following

#### Port for browser-based client

Change the 'port' variable in client/web/index.js

#### Name of the social network

Change the 'websitename' variable in client/web/index.js