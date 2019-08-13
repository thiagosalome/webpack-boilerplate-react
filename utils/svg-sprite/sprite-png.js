const nsg = require('node-sprite-generator')
nsg({
  src: [
    './src/assets/images/pngs/*.png'
  ],
  spritePath: './src/assets/images/sprite.png',
  stylesheetPath: './src/sass/abstracts/_sprite.scss',
  layout: 'diagonal',
  stylesheetOptions: {
    prefix: 'svg-'
  }
})
