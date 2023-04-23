/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = "NexRead-Website"

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}
module.exports = nextConfig
