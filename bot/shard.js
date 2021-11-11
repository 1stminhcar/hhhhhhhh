const Cluster = require("discord-hybrid-sharding");
let {BOT_TOKEN} = require("./config.json");
const manager = new Cluster.Manager(`${__dirname}/index.js`,{
                                       totalShards: 'auto',
                                      ///See below for more options
                                       totalClusters: 2,  keepAlive: {
                                          interval: 2000, ///The Interval to send the Heartbeat
                                          maxMissedHeartbeats: 5, // The maximal Amount of missing Heartbeats until Cluster will be respawned
                                          maxClusterRestarts: 3 ///The maximal Amount of restarts, which can be done in 1 hour with the HeartbeatSystem
                                       },
                                       mode: "process" ,  //you can also choose worker
                                       token: BOT_TOKEN,
                                       usev13: true //When you do not use v13 turn it to false
                                    })
manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn(undefined, undefined, -1)