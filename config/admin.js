module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d3fcf983358f4c354b4ff190a6fb167'),
  },
});
