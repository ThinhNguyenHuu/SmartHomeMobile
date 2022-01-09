module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          components: './App/Components',
          configs: './App/Configs',
          containers: './App/Containers',
          navigations: './App/Navigations',
          images: './App/Images',
          utils: './App/Utils',
          hooks: './App/Hooks',
          actions: './App/Redux/Actions',
        },
      },
    ],
  ],
};
