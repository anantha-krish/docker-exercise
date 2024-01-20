const express = require("express");
const redis = require('redis');

const app = express();
const client = redis.createClient({ url: 'redis://default:default@redis-server:6379' });
(async () => {
    client.on('error',err=> console.log("redis error",err));
    await client.connect();
    await client.set('visits', 0)
})();

app.get('/', async (req, res) => {
   // introduce crash
  //  process.exit(0);
    const visits = await client.get('visits');
    res.send('Number of vists is ' + visits);
    await client.set('visits', parseInt(visits) + 1)
})

app.listen(8081, () => {
    console.log(" listening to 8081..")
})