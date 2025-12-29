# Build for react

## Steps to build and publish lib to npm

- Go to at the root of project
- Build for react: `npm run build-react`. 
    - This will generate package/react/data.ts and package/react/types.ts
    - And create a build folder at root.
- Next, to publish to npm use: `npm run publish-pkg`.
    - This will create package.json and other files inside buiild folder necessary for npm registery
    - Also Make sure to bump the version in package.json