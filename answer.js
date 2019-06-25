let body = $response.body;
var obj=JSON.parse(body);
delete body['ad_info'];
body=JSON.stringify(obj);
$done({body});
