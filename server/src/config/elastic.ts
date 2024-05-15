import { Client } from 'elasticsearch';

const sslConfig = {
    protocol: 'https',
    rejectUnauthorized: false
  };

const elasticClient = new Client({
    host: 'https://elastic:kgOP4sn=6-dT22n+KaJZ@127.0.0.1:9200',
    ssl: sslConfig 
});

export default elasticClient;
