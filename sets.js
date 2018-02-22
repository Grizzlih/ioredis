const Sets = (redis) => {
    redis.sadd('books:fantasy', 'Lord of the Rings', 'The Witcher');
    redis.sadd('books:fantastic', 'Star Wars', 'Star Track');
    redis.sadd('books:detectives', 'Da Vincis Code', 'In&Yan');

    redis.smembers('books:detectives', (err,res)=>{
        console.log(res);
    });

    redis.spop('books:detectives');

    redis.smembers('books:detectives', (err,res)=>{
        console.log(res);
    });
    redis.sadd('books:fantasy', 'Lord of the Rings', 'The Witcher');
    redis.smembers('books:fantasy', (err,res)=>{
        console.log(res);
    });
}

export default Sets;