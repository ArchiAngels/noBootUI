module.exports = function Get(url,method = 'GET',body = ''){
    return new Promise(function(resolve,reject){
        let timeOver = setTimeout(()=>{
            reject({message:'timeOver',isOK:false});
        },5000)

        function deleteTimeOver(e){
            clearTimeout(timeOver);
            if(e){
                reject(e);
            }
        }

        let xhr = new XMLHttpRequest();
            
           
            xhr.onload = (xhr)=>{
                deleteTimeOver();
                resolve(xhr.target.response);
            };
            
            xhr.open(method,url);
            xhr.send(body);
    }).catch((e)=>{
        console.log(e);
        return {isOK:false,message:e}
    }).then((value)=>{
        return {isOK:true,value:value}
    })
}