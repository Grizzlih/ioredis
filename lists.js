const Lists = (redis) => {
     //redis.del('planets');
     redis.rpush('planets', 'Venus', 'Earth', 'Mars', 'Jupiter');
     redis.rpush('planets', 'Saturn');
     redis.lpush('planets', 'Mercury');
     redis.rpop('planets');
     //redis.ltrim('planets', 0, 1)
     redis.lrange('planets', 0, -1, (err,res)=>{
         console.log(res);
     });
};

export default Lists;