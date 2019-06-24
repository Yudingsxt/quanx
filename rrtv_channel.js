var body = $response.body;

    var obj = JSON.parse(body);
    obj['data']['sections'].splice(17,1);
    obj['data']['sections'].splice(3,1);
    obj['data']['sections'].splice(1,1);
    body = JSON.stringify(obj);

$done(body);
