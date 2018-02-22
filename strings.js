const Strings = (redis) => {
    redis.set('name', 'Edward', 'EX', 1);
    redis.get('name', (err,res)=>{
        console.log(res);
    });

    redis.get('address',(err,res)=>{
        console.log(res)
    });

    redis.incrby('address', 100);
    redis.get('address', (err,res)=>{
        console.log(res);    
    });

    redis.mset('address', 1, 'city', 'Tel-Aviv');
    redis.mget('address', 'city', (err,res)=>{
        console.log(res);
    });

    redis.set('name', 'Edward', 'EX', 1);
    setTimeout(()=>{
        redis.get('name', (err,res)=>{
            console.log(2000, res)
        });
    }, 2000);
    

    redis.get('address',(err,res)=>{
        console.log(res)
    });

    redis.incrby('address', 100);
    redis.get('address', (err,res)=>{
        console.log(res);    
    });

    redis.mset('address', 1, 'city', 'Tel-Aviv');
    redis.mget('address', 'city', (err,res)=>{
        console.log(res);
    });
}

export default Strings;