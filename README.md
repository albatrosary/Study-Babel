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

### ECMAScript 6 Features

#### Arrows and Lexical This

#### Classes

#### Enhanced Object Literals

#### Template Strings

#### Destructuring

#### Default + Rest + Spread

#### Let + Const

#### Iterators + For..Of

#### Generators

#### Map + Set + WeakMap + WeakSet

#### Proxies

#### Symbols

#### Subclassable Built-ins

#### Math + Number + String + Object APIs

#### Binary and Octal Literals

#### Promises

#### Reflect API

#### Tail Calls





