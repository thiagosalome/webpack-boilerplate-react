const nsg = require('node-sprite-generator')
nsg({
  src: [
    './src/images/pngs/*.png'
  ],
  spritePath: './src/images/sprite.png',
  stylesheetPath: './src/sass/abstracts/_sprite.scss',
  layout: 'diagonal',
  stylesheetOptions: {
    prefix: 'svg-'
  }
})
