export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        produk: {
          field: "slug",
          references: "namaProduk",
        },
      },
    },
  },
  ckeditor5: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
});
