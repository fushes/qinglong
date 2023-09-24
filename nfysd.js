const axios = require('axios');

let k = 'k-05d9ea6a5aad';
exports.notify =function(title,content,url='') {
    axios({
        method: 'POST',
        url: 'https://xdroid.net/api/message',
        data:{
            k : k,
            t : title,
            c : content,
            u : url
        }
    }).then(response => {
        if (response.data.success) {
            console.log('通知成功!');
        }else{
            console.log(response.data.error);
        }

    }).catch(error => {

            console.log(error);

    });
}