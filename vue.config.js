// vue.config.js
module.exports = {
  //基本路径
  //publicPath: '/dist/',
  //输出文件目录
  //outputDir: 'dist',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  //assetsDir: 'dist/',

	devServer: {
	    // true 则热更新，false 则手动刷新，默认值为 true
	    inline: false,
	    // development server port 8000
	    port: 8001,
	    proxy: { ... }
	}
}