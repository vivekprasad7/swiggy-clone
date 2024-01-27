Steps

1. npm init
2. npm i -D parcel
3. .gitignore ( /npm_modules, dist, .parcel-cache )
4. Remove main entry point from package.json, we will give it directly
5. npm i react  (Core )
6. npm i react-dom ( Which makes react run in browser environment) 
7. In index.html, write script tag and give path to App.js, change it to type=module
8. Add start and build scripts in package.json
npx parcel index.html  npx parcel build index.html
9. import react and react-dom in App.js
10. Create your first App Component ( which is nothing but a javascript function)
10. Bind your div with id root(in index.html) with App.js by creating root
const root = ReactDOM.createRoot(document.getElementById("root"))
11. Finally, render it using
root.render(<App/>) (Whatever is in root is now replaced with what we send in App.js)




# React Project Setup with Parcel

Follow these steps to set up a basic React project using Parcel as the bundler.

## Steps

1. **Initialize npm:**
   ```bash
   npm init
   ```

2. **Install Parcel as a development dependency:**
   ```bash
   npm install -D parcel
   ```

3. **Create a .gitignore file:**
   Create a `.gitignore` file and add the following entries:
   ```
   /node_modules
   /dist
   .parcel-cache
   ```

4. **Remove main entry point from package.json:**
   Remove the "main" entry point from your `package.json` since Parcel will handle it directly.

5. **Install React:**
   ```bash
   npm install react
   ```

6. **Install React DOM:**
   ```bash
   npm install react-dom
   ```

7. **Create index.html:**
   Create an `index.html` file in your project root with the following content:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>React with Parcel</title>
   </head>
   <body>
     <div id="root"></div>
     <script type="module" src="./App.js"></script>
   </body>
   </html>
   ```

8. **Add start and build scripts in package.json:**
   Update your `package.json` with the following scripts:
   ```json
   {
     "scripts": {
       "start": "npx parcel index.html",
       "build": "npx parcel build index.html"
     }
   }
   ```

9. **Import React and React DOM in App.js:**
   In your `App.js`, make sure to import React and ReactDOM:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   ```

10. **Create Your First App Component:**
    Create your main React component in `App.js`. For example:
    ```jsx
    const App = () => {
      return (
        <div>
          <h1>Hello, React!</h1>
        </div>
      );
    };
    ```

11. **Bind Your div with id root in index.html:**
    In `App.js`, create a root element using ReactDOM:
    ```jsx
    const root = ReactDOM.createRoot(document.getElementById("root"));
    ```

12. **Render Your App Component:**
    Finally, render your `App` component using the root element:
    ```jsx
    root.render(<App />);
    ```

Now you can run your app using the provided scripts:
```bash
npm start
```
or build it for production:
```bash
npm run build

