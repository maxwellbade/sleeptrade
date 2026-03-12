module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sleeptrade.win',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude static paths
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
    ],
  },
}