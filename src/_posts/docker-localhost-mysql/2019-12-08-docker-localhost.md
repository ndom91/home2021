---
date: '2019-12-08'
title: 'Docker + Localhost MySQL'
tags: ['servers', 'linux', 'mysql', 'docker']
category: 'linux'
---

I was having the hardest time getting applications in docker containers to connect to the instance of mysql runnning on the host.

I finally found a great solution, so I figured I'd post it here for myself and so that others may find it as well.

1. Enable `route_localnet` for docker0 interface:

```bash
sysctl -w net.ipv4.conf.docker0.route_localnet=1
```

2. Add these rules to iptables:

```
iptables -t nat -I PREROUTING -i docker0 -d 172.17.0.1 -p tcp --dport 3306 -j DNAT --to 127.0.0.1:3306
iptables -t filter -I INPUT -i docker0 -d 127.0.0.1 -p tcp --dport 3306 -j ACCEPT
```

3. Make sure you have a Mysql user who can connect from _outside_ of 'localhost', i.e. from '%'. If you don't have one, you can create one like so:

```
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
```

4. Finally, in your docker run command or docker-compose file, change the mysql-server address to `172.17.0.1` - which is the host's IP from the view of the container. 

