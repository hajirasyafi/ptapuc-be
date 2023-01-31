export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
const strapi = require("@strapi/strapi");
const app = strapi({ distDir: "./dist" });
app.start();
