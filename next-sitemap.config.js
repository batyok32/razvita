/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://razvita.com", // Replace with your actual domain
    generateRobotsTxt: true, // (Optional) Generates robots.txt file
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ["/admin"], // Add any paths you want to exclude
};
