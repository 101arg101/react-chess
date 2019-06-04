# Setup

Grab React from the CDN
```
mkdir lib
cd lib
curl -o react.min.js https://unpkg.com/react@16/umd/react.production.min.js
curl -o react-dom.min.js https://unpkg.com/react-dom@16/umd/react-dom.production.min.js
```

Grab Bootstrap from the CDN
```
curl -o bootstrap.min.css https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
curl -o bootstrap.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js
curl -o bootstrap.bundle.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js
```

Grab icons from [https://icons8.com/icons/set/chess](https://icons8.com/icons/set/chess)

and move them to a new directory
```
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
```


Setup react
```
nano .babelrc
nano package.json
```