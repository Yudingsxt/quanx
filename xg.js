var body = $response.body;
var url = $request.url;
if (url.indexOf(path1) != -1){
  let obj = JSON.parse(body);
  obj.content["nickName"] = "Meeta_share";
  obj.content["level"] = "5";
  obj.content["vipType"] = "3";
  obj.content["expirationTime"] = "3029548557000";
  body = JSON.stringify(obj);
}

$done({body});
