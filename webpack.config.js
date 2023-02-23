const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const getHtmlPlugins = (chunks) => {
    return chunks.map(chunk => new HtmlPlugin({
        title: "React Chrome Extension",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }));
};

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
      popup: path.resolve("src/popup/popup.tsx"),
      options: path.resolve("src/options/options.tsx")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                type: "asset/resource",
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve("src/manifest.json"),
                    to: path.resolve("dist")
                }, 
                {
                    from: path.resolve("src/icons/*.*"),
                    to: path.resolve("dist")
                },
            ]
        }),
        ...getHtmlPlugins(["popup", "options"])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve("dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};