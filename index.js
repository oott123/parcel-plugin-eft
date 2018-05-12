module.exports = function (bundler) {
  bundler.addAssetType('ef', require.resolve('./eft'))
  bundler.addAssetType('eft', require.resolve('./eft'))
}
