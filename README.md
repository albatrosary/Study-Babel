# Study of Babel

### Step.0
#### Install Babel

```
npm install -g babel-cli
```

v6から
```
mkdir Babel
cd Babel
npm install --save-dev babel-preset-es2015
```

#### create `.babelrc`
```json
{
  "presets": ["es2015"]
}
```

#### run

```
babel script.js
```

or

```
babel script.js --out-file script-compiled.js
```

