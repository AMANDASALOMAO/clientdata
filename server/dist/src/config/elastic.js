"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch_1 = require("elasticsearch");
const sslConfig = {
    protocol: 'https',
    rejectUnauthorized: false
};
const elasticClient = new elasticsearch_1.Client({
    host: 'https://elastic:kgOP4sn=6-dT22n+KaJZ@127.0.0.1:9200',
    ssl: sslConfig
});
exports.default = elasticClient;
//# sourceMappingURL=elastic.js.map