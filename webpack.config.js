module.exports = {

    context: __dirname,
    entry: __dirname + "/app/index.js",
    output: {
        path: __dirname,
        filename: "app.min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css?sourceMap', 'sass?sourceMap', 'scss' ]
            }
        ]
    }
};
