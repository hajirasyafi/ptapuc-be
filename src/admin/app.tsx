import BIW from "./extensions/biw.png";
import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
import ckeditor5MrkdownDll from "@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js";

export default {
  config: {
    locales: ["id", "en"],
    translations: {
      id: {
        "app.components.LeftMenu.navbrand.title": "PT.APUC",
        "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
      },
      en: {
        "app.components.LeftMenu.navbrand.title": "PT.APUC",
        "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
      },
    },
    auth: {
      logo: BIW,
    },
    menu: {
      logo: BIW,
    },
    tutorials: false,
    notifications: {
      realeses: false,
    },
    ckeditor5Dll,
    ckeditor5MrkdownDll,
  },
  bootstrap(app) {
    console.log(app);
  },
};
