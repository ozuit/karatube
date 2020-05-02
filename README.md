# Karatube

<p align="center"> 
  <img src="https://github.com/ozuit/karatube/blob/master/assets/demo.png">
</p>

This is a simple [Electron](https://electronjs.org/) + [React.js](https://reactjs.org/) example (with live reload). It was designed to work without the need of a development server running in the background, like so many other templates, and it's hence free of cross domain request constraints ([CORS](https://reactjs.org/)). For more infomation [here](https://github.com/ozuit/electrate).

## Installing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ozuit/karatube my-app
# Go into the repository
cd my-app
# Install dependencies
npm install
```

## Running

```
npm run start
```

## Packaging

Replace the icon inside the `build` folder and run

```bash
npm run release
```

Check the `dist` folder for the app