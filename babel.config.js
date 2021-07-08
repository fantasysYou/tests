module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      require.resolve('s-babel-plugin-component'),
      {
        libraryName: 'frontend-library',
        style: false,
        libDir: 'src/components'
      }
    ]
  ]
}
