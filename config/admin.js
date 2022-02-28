module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dcba3d8d516dd43d09537e6f2f524488'),
  },
});
