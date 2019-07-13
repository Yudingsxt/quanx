var body = $response.body;
var url = $request.url;

	let obj = JSON.parse(body);
	obj.data.uinfo["down_daily_remainders"] = "988";
	obj.data.uinfo["play_daily_remainders"] = "988";
	obj.data.uinfo["goldcoin"] = "999";
	obj.data.uinfo["next_upgrade_need"] = "0";
	obj.data.uinfo.curr_group["gicon"] = "V5";
    obj.data.uinfo.curr_group["gid"] = "5";
    obj.data.uinfo.curr_group["gname"] = "至尊VIP";
	obj.data.user["isvip"] = "1";
	obj.data.user["nickname"] = "Meeta_share";
	obj.data.user["avatar_url"] = "https://img.sdxaly.com/C1/avatar/044/44414.jpeg?t=1563021092";
	obj.data.user["avatar"] = "044/44414.jpeg?t=1563021092"
	obj.data.user["goldcicon"] = "998";
	obj.data.user["gicon"] = "V5";
	body = JSON.stringify(obj);
$done({body});
