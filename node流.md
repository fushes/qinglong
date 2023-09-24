## node的Stream流

种类
1.可写流：fs.createWriteStream
2.可读流: fs.createReadStream
3.双工流: net.socket
4.转换流: 在数据写入/读取时修改数据的流

HTTP request 可读流 Response 可写流

```js
const {Duplex} = require('stream')

const demo = new Duplex({
    read(size){}
    write(chunk,encoding,cb){}
})
```