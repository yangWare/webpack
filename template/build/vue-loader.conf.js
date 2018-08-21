'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  {{#if_not typescript}}
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  {{/if_not}}
  {{#typescript}}
  loaders: merge(
    utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction
    }),
    {
      ts: ['babel-loader', 'ts-loader', 'tslint-loader']
    }
  ),
  {{/typescript}}
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
