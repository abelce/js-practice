https交互过程



1、client向server发起发起请求

​		1、支持的协议版本。

​		2、客户端生成的随机数random1

​		3、支持的加密方法

​		4、支持的压缩方法

2、服务器收到请求：

​	1、 确认使用的加密协议

​	2、生成一个随机数random2

​	3、确认使用的加密方法。

​	4、服务器证书

3、客户端收到证书之后，首先会进行验证

​	1、验证证书，CA机构再签发证书时，都会用私钥对证书进行签名，证书里面的签名算法字段sha256RSA表	示，CA机构用sha256对证书进行摘要，再用RSA对摘要进行私钥签名，而我们知道RSA算法中，使用私钥签	名后，只有公钥才能进行验签。

​	2、 client使用CA机构的公钥对证书进行验签，确定这个证书是否由正规的CA机构签发，验证之后得到CA机构使用sha256得到的证书摘要，然后client再使用sha256对证书内容进行一次摘要，如果得到的值与验签之后得到的值相同，则表示证书没有被修改过。

​	3、生成随机数pre-master secret，使用证书中的公钥进行加密，然后传递给服务器。



4、服务器收到加密内容后，使用私钥解密获得随机数pre-master secret，然后根据random1、random2、pre-master secret通过一定的算法得到 session key和MAC算法私钥，客户端通过同样的方法计算出session key 和MAC算法私钥。



5、在后续的交互中就使用session key和MAC算法的私钥对传输的内容进行加密和解密

​	先使用MAC算法对内容进行摘要，然后把摘要放在内容的后面使用session key再进行加密。对于客户端发送的数据，服务器收到后先进行解密，在进行数据完整性验证。服务器发送的数据，客户端进行相同的操作。

  