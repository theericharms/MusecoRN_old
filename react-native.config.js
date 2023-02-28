// had to add this because there are 2 pod files in the project
// 1 in /ios and 1 in node_modules
// clears a warning in terminal when building the app
module.exports = {
    project: {
      ios: {
        sourceDir: './ios',
      },
    },
    assets: ['./src/Assets/fonts'],
  };