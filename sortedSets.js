const SortedSets = (redis) => {
    redis.zadd('rockets', 1966, 'Luna 9', 1998, 'Deep Space', 1957, 'Sputnik', 1969, 'Apollo', 2008, 'Falcon 1');
    redis.zrangebyscore('rockets', '-inf', 2000, 'withscores', (err,res) =>{ 
        console.log(res);
    });
}

export default SortedSets;