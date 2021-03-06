'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://localhost/"',
  EXPLORE_URL: '"https://explorer.ont.io/"',
  TEST_EXPLORE_URL: '"https://polarisexplorer.ont.io/"',
  API_URL: '"https://explorer.ont.io/api/v1/explorer"',
  TEST_API_URL: '"https://polarisexplorer.ont.io/api/v1/explorer"',
  BC_URL: '"https://localhost:10443/api/v1/"',
  NET:true
})
