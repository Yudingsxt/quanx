var body = $response.body;
    var obj = JSON.parse(body);
    delete obj['data']['notice'];
    obj['data']['indexView']['interestingList'].splice(3,1);
    body = JSON.stringify(obj);

$done(body);
