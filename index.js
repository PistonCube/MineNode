const mc = require('minecraft-protocol');
const mcData = require('minecraft-data')(mc.version);

const server = mc.createServer({
  'online-mode': true,
  encryption: false,
  host: '0.0.0.0',
  port: 7665,
  version: "1.12.2",
  motd: '\u00A76Welcome to MineNode Created by \u00A75PistonCube#0001\u00A7r\n\u00A76Dowload Sofware: Github.com/PistonCube/MineNode'
});

server.on('online', () => {
    console.log('online server');
  });
  

server.on('login', function(client) {
  console.log(client.username + ' has connected to the server');
});
