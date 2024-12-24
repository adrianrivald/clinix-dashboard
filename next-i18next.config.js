/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    localeDetection: false,
    defaultLocale: "id",
    locales: ["id", "en"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
