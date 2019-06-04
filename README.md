# Setup

Grab React from the CDN
```
mkdir lib
cd lib
curl -o react.min.js https://unpkg.com/react@16.8.6/umd/react.production.min.js
curl -o react-dom.min.js https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js
curl -o react.dev.js https://unpkg.com/react@16.8.6/umd/react.development.js
curl -o react-dom.dev.js https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js
```

Grab Bootstrap from the CDN
```
curl -o bootstrap.min.css https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
curl -o bootstrap.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js
curl -o bootstrap.bundle.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js
```

Grab jQuery from the CDN
curl -o jquery.min.js https://code.jquery.com/jquery-3.4.1.min.js

Download icons from [https://icons8.com/icons/set/chess](https://icons8.com/icons/set/chess)

and move them to a new directory
```
cd ..
mkdir img
mv ~/Downloads/Favorites/* img/
```

Make some filename changes
```
cd img
mv icons8-queen-figure-chess-filled-100.png icons8-queen-filled-100.png
mv icons8-queen-figure-chess-100.png icons8-queen-100.png
mv icons8-pawn-chess-piece-100.png icons8-pawn-100.png
mv icons8-pawn-chess-piece-filled-100.png icons8-pawn-filled-100.png
cd ..
```

Get the precompiler
```
npm init -y
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-env
```

Setup react
```
nano .babelrc
nano package.json
```