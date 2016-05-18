# geo-localtion

A node.js based website that provides the same feature as [Telize](http://www.telize.com/), [IP-API](http://ip-api.com/), etc.

### Usage

```
git clone https://github.com/ndaidong/geo-localtion.git
cd geo-localtion
npm install
npm start
```

The web now lives at default port 9999, you can use it by opening the following URL via your browser:

```
http://localhost:9999/?ip=IP_ADDRESS
```

Replace IP_ADDRESS with any real IP v4 address.

If you want to use another port, just change configs:

```
mkdir configs/env
cp configs/vars.sample.js configs/env/vars.js
nano configs/env/vars.js
// change port, save file and restart server to get it done
```

### License

The MIT License (MIT)
