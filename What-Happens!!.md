First Initiate with -> npm init -y <br>
Second install react and react-dom -> npm i react react-dom <br>
We will use StoryBook to test Our package components -> npx sb init <br>
Now. Update .storybook/main.js { Adding Routes } <br>
Next run Storybook -> npm run storybook <br>
Then we will add CSS Modules to stroybook -> npm i -D @storybook/addon-postcss storybook-css-modules-preset <br>
Later update .storybook/main.js { addons-css-modules } <br>
Now Add following Files to following Folders: <br>
-> src/button /Button.js & /button.module.css & /index.js <br>
-> src/stories /Button.stories.js <br>
-> src/index.js <br>
And populate them with given foolowing data You can add more components and libraries as required <br>
As Left is Building add Rollup to package as ->  npm i -D rollup rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve <br>
Then certainly setup /rollup.config.js && popu;ate it wth following data <br>
Later add Build Info in package.json <br>
Then Run Build -> npm run build <br>
You have your package ready to publish on npm make sure Your package have unique CONTENT and NAME. <br>