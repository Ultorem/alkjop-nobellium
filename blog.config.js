const BLOG = {
  title: "FISKJA",
  author: "Fiskja.com",
  email: "fiskja-kontakt@gmail.com",
  link: "https://fiskja.com",
  description: "Sikre deg de beste fisketipsene på nettet!",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "CET", // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "light", // ['light', 'dark', 'auto'],
  font: "sans-serif", // ['sans-serif', 'serif']
  lightBackground: "#ffffff", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#18181B", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Nobelium in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: "https://og-image-craigary.vercel.app", // The link to generate OG image, don't end with a slash
  socialLink: "https://twitter.com/fiskja",
  seo: {
    keywords: ["Blog", "Website", "Notion"],
    googleSiteVerification: "", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: "ga", // Currently we support Google Analytics, please fill with 'ga', leave it empty to disable it.
    gaConfig: {
      measurementId: "G-8M5GVH1B4T", // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances
    provider: "", // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: "", // The repository of store comments
      owner: "",
      admin: [],
      clientID: "",
      clientSecret: "",
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
