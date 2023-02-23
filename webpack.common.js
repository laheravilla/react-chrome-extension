const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getHtmlPlugins = (chunks) => {
    return chunks.map(chunk => new HtmlPlugin({
        title: "React Chrome Extension",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }));
};

module.exports = {
    entry: {
      popup: path.resolve("src/popup/popup.tsx"),
      options: path.resolve("src/options/options.tsx"),
      background: path.resolve("src/background/background.ts"),
      contentScript: path.resolve("src/contentScript/contentScript.ts")
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
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
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
        ...getHtmlPlugins(["popup", "options"]),
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