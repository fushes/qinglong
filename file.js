const fs = require('fs');
//同步的写入方式
const res =fs.readFileSync('1.json','utf8')
console.log(res)
//追加写入
fs.appendFileSync('2.txt','你好世界')
//异步的写入方式
// fs.writeFile('2.txt','hello',err=>{
//     if(!err){
        fs.readFile('2.txt','utf8',(err,data)=>{
            if(!err){
                console.log(data)
            }
        })
//     }
// })
fs.copyFile('2.txt','4.txt',(err)=>{
    if(err){
        console.log(err);
    }
})
fs.mkdir('test',err=>{
    if(err){
        console.log(err)
    }
})