const redis = require("redis");

// Add your cache name and access key.
var client = redis.createClient(6380, 'zeoRedis20.redis.cache.windows.net',
    {auth_pass: 'DnsNujd6DFcssoqKMwI+BAxEXk0wJjE1zwUDK1BSQos=', tls: {servername: 'zeoRedis20.redis.cache.windows.net'}});

client.on("error",function (error){
    console.error("error encounted:", error);
});

client.on("connect", function(error){
    console.error("redis connection established");
});

client.set('framework', 'ReactJS');
client.expire('framework',300); 
client.get('framework',function(err,reply){
    console.log(reply);
});