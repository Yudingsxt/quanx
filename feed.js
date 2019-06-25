let body = $response.body;
var obj=JSON.parse(body);
obj['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){      
       body['data'].splice(index,1);  
    }
})
body=JSON.stringify(obj);
$done({body});
