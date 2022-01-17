body = $response.body.replace(/memberships:\[\]/g, 'memberships\":[{"endAt":1650842277,"id":"1","name":"普通会员","ownership":"temporary","startAt":1580106429,"usageType":"unlimited"}]')..replace(/usageType":"\w+/g, 'usageType":"unlimited"');
$done({body});

