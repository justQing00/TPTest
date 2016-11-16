module.exports = {
  entry: "./app/index.tsx",
  output: {
    filename: "app.js",
    path: __dirname + "/public"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      { 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ]
  }
};
