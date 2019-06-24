var body = $response.body;
    var obj = JSON.parse(body);
    delete obj['data']['notice'];
    obj['data']['sections'].splice(2,1);
    obj['data']['sections'].splice(4,1);
    obj['data']['sections'].splice(8,1);
    obj['data']['sections'].splice(10,1);
    body = JSON.stringify(obj);
$done(body);
