var body=$response.body;
    let obj = JSON.parse(body);
    obj.advertisement_num = 0;
    obj.advertisement_info = [];
    body = JSON.stringify(obj);

$done(body);
