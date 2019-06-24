var body=$response.body;
    let obj = JSON.parse(body);
    obj.advertisement_info = [];
    body = JSON.stringify(obj);

$done(body);
