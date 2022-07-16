First Initiate with -> npm init -y
Second install react and react-dom -> npm i react react-dom
We will use StoryBook to test Our package components -> npx sb init
Now. Update .storybook/main.js { Adding Routes }
Next run Storybook -> npm run storybook
Then we will add CSS Modules to stroybook -> npm i -D @storybook/addon-postcss storybook-css-modules-preset
Later update .storybook/main.js { addons-css-modules }
Now Add following Files to following Folders:
-> src/button /Button.js & /button.module.css & /index.js
-> src/stories /Button.stories.js
-> src/index.js
And populate them with given foolowing data You can add more components and libraries as required
As Left is Building add Rollup to package as ->  npm i -D rollup rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve
Then certainly setup /rollup.config.js && popu;ate it wth following data
Later add Build Info in package.json
Then Run Build -> npm run build
You have your package ready to publish on npm make sure Your package have unique CONTENT and NAME.