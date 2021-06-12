---
date: '2018-03-20'
title: 'iptables'
tags: ['servers', 'linux']
category: 'linux'
---

Run the following. It'll insert the rule at the top of your iptables and will allow all traffic unless subsequently handled by another rule.

```bash
iptables -I INPUT -j ACCEPT
```

You can also flush your entire iptables setup with the following:

```bash
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT
```

If you flush it, you might want to run something like:

```bash
iptables -A INPUT -i lo -j ACCEPT -m comment --comment "Allow all loopback traffic"
iptables -A INPUT ! -i lo -d 127.0.0.0/8 -j REJECT -m comment --comment "Drop all traffic to 127 that doesn't use lo"
iptables -A OUTPUT -j ACCEPT -m comment --comment "Accept all outgoing"
iptables -A INPUT -j ACCEPT -m comment --comment "Accept all incoming"
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT -m comment --comment "Allow all incoming on established connections"
iptables -A INPUT -j REJECT -m comment --comment "Reject all incoming"
iptables -A FORWARD -j REJECT -m comment --comment "Reject all forwarded"
```

If you want to be a bit safer with your traffic, don't use the accept all incoming rule, or remove it with "iptables -D INPUT -j ACCEPT -m comment --comment "Accept all incoming"", and add more specific rules like:

```bash
iptables -I INPUT -p tcp --dport 80 -j ACCEPT -m comment --comment "Allow HTTP"
iptables -I INPUT -p tcp --dport 443 -j ACCEPT -m comment --comment "Allow HTTPS"
iptables -I INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT -m comment --comment "Allow SSH"
iptables -I INPUT -p tcp --dport 8071:8079 -j ACCEPT -m comment --comment "Allow torrents"
```

NOTE: They need to be above the 2 reject rules at the bottom, so use I to insert them at the top. Or if you're anal like me, use "iptables -nL --line-numbers" to get the line numbers, then use "iptables -I INPUT <line number> ..." to insert a rule at a specific line number.

Finally, save your work with:

```bash
iptables-save > /etc/network/iptables.rules #Or wherever your iptables.rules file is
```
