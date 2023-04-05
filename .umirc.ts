export default {
  npmClient: 'yarn',
  // 解决打包后，浏览器直接打开 dist/index.html 页面出现空白问题
  publicPath: './',
  history: {
    type: 'hash',
  },
};
