# React-Webpack2-EsLint-Boilerplate
Provide the quick start code for React using Webpack2
Steps:

1) npm install
2) npm start

thats it...

# To Build:
NODE_ENV=test npm run build 

# Webpack setup commands ubuntu: (Already done in this boilerplate)

npm install webpack --save

npm install webpack-dev-server --save-dev
npm install --save-dev react react-hot-loader

npm install --save html-webpack-plugin

npm install --save copy-webpack-plugin

npm install --save extract-text-webpack-plugin
npm install --save optimize-css-assets-webpack-plugin

npm install --save babel-core babel-preset-es2015 babel-preset-react
npm install --save babel-preset-stage-0
npm install --save babel-cli babel-preset-env
npm install --save babel-loader

npm install sass-loader node-sass --save
npm install --save css-loader
npm install style-loader --save

npm install --save file-loader

**In .babelrc file add following:** 

{
    presets: ['react', 'es2015','stage-0']
}

**Recommanded: https://github.com/vjnathe-webonise/react_eslint_webpack2/blob/master/README.md**

**In .eslintrc file add following:**

{
  "parser": "babel-eslint",
  "rules": {
    "no-dupe-keys": 2,
    "no-cond-assign": 2,
    "no-sparse-arrays": 2,
    "eqeqeq": 1,
    "radix": 1,
    "no-unused-vars": 1,
    "no-else-return": 1
  }
}
