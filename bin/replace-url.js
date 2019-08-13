const replace = require('replace')
const configBase = {
  recursive: true,
  silent: true
}

replace(
  Object.assign( configBase, {
    regex: "\/assets\/images\/",
    replacement: "",
    paths: ['./dist/assets/css/']
  })
)

replace(
  Object.assign( configBase, {
    regex: '\/assets\/fonts\/',
    replacement: '',
    paths: ['./dist/assets/css/']
  })
)
