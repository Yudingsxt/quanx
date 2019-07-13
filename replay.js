var body = $response.body;
var url = $request.url;

  let obj = JSON.parse(body);
  obj.retcode = "0";
  obj.data.lastplayindex = "1";
  obj.data["httpurl"] = obj.data["httpurl_preview"];
  delete obj.data["httpurl_preview"];
  body = JSON.stringify(obj);

$done({body});
