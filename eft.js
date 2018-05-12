var Asset = require('parcel-bundler').Asset
var parse = require('eft-parser')
var template = [
  "import { create } from 'ef-core'",
  'export default create(__AST__)'
].join('\n')

class EftAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options)
    this.type = 'js'
  }
  generate() {
    var ast = JSON.stringify(parse(this.contents))
    var js = template.replace('__AST__', () => ast)
    return [
      {type: 'js', value: js}
    ]
  }
}

module.exports = EftAsset