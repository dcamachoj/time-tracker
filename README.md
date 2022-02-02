# Time Tracker

This is the challenge project

## Get started

Install the dependencies...

```bash
cd time-tracker
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Published Web Site

https://time-tracker-peach.vercel.app

## Git Repository

https://github.com/dcamachoj/time-tracker

## Decisions

- [Svelte](https://svelte.dev/):
  I'm more comfortable with it.
  It's a compiler, with framework capabilities.
- Own css instead of a library. Libraries are blated with stuff I don't need.
  For example, most libraries contains breakpoints that are hard to change/build.
- CSS Variables. Centralized color definition. I could go with Less or Sass,
  but I think for this project, adding css preprocessors is too much.
- CSS Media Query. To provide with variations for desktop.
- JS Media Query. IsMobile store, for example. Svelte makes it easy to work with that.
  Instead of complex CSS Media Queries. I don't know if `complex` is the right work, but it will get bloated easily.
- CSS Grid system. Most prefer Flex, and I do too, but for the main layout,
  Grid seams more appropriate.
