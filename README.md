# React Chrome Extension
## Getting Started
1. `git clone https://github.com/laheravilla/react-chrome-extension.git` to have a local copy of this project
2. `npm install` to install dependencies (`node_modules` folder)
3. `npm start` to start running the fast development mode with Webpack as well as to generate the `dist` folder
4. `npm i --save-dev <package_name>` to install new packages
5. Update `package.json`, `src/manifest.json` and `webpack.common.js` files
6. `git init` to track modified files and push them to your remote directory

## Loading the Chrome Extension
1. Open Chrome and navigate to [chrome://extensions](chrome://extensions/)
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Production Build
1. `npm run build` to run the application in production mode
2. Zip the entire `dist` folder
3. Publish the .zip file on the Chrome Web Store Developer Dashboard