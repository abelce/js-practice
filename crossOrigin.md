crossOrigin

h5规定允许本地获取到跨域脚本的错误信息，需要两个条件：

一、跨域脚本的服务器必须设置**Access-Control-Allow-Origin**允许域名获取脚本错误信息；

二、当前标签必须指明**src**属性的地址是支持跨域的地址，也就是crossOrigin属性
