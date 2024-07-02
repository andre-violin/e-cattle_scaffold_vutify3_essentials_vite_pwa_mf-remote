export default {
  name: 'remote_app',
  filename: 'remoteEntry.js',
  exposes: {
    './AppHome': './src/components/AppHome'
  },
  shared: ['vue', 'vuetify', 'qrcode-vue3']
}
