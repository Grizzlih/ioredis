const Hashes = (redis) => {
    redis.hmset('user:9', 'firstName', 'Arthur', 'lastName', 'King');
    redis.hmset('user:9', 'address', 101);
    redis.hincrby('user:9', 'address', 1);
    redis.hgetall('user:9', (err,res) => {
        console.log(res);
    });
}

export default Hashes;