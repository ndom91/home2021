---
date: '2018-03-17'
title: 'Smarthome Ideas'
tags: ['side projects', 'linux']
category: 'linux'
---

# Smart Home - Schöne Aussicht 10a

I've begun assembling the beginnings of a nice little smart-home implementation here at my familys house in Germany. It consists mostly of lights / motion sensors and some voice assistants mixed in. However, its a nice start and has tought me a lot!

## openHAB

[**OpenHAB**](https://openhab.org) is the software I've decided to go with for this project. It supports a ton of smart home devices and integrates them all into one coherent system.

No more messing with various provider clouds and trying to orchestrate actions between multiple smart phone apps from different manufacturers.

Here is the list of openHab supported "addons", as they call them: [openhab.org/addons](https://www.openhab.org/addons/)

The creator also has a fantastic 1hr long talk from 'Froscon 2018' describing its capabilities and the work that has gone into a major community project like this:

@[youtube](DYB20Y4jXnA)

### Hardware

This is not exhaustive, but I have integrated some of the following items into my smart home:

- MiLight 6W E27 Lightbulbs [Source](https://www.amazon.de/LIGHTEU®-Multicolor-Original-dimmable-Changing/dp/B01HD2RD6Q/)
- DLink DCH-S150 Motion Sensor [Source](https://www.amazon.de/D-Link-DCH-S150-Bewegungserkennung-automatische-Benachrichtigung/dp/B00N0QJ0IE)
- Nanoleaf Triangular Lightpanels [Source](https://www.amazon.de/nanoleaf-NL22-0002TW-9PK-Light-Panels-Lichtpanels/dp/B01M0W7NIP/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=nanoleaf&qid=1568490745&s=gateway&sr=8-2)
- MiLight RGBW LED WiFi Controller [Source](https://www.amazon.de/Wireless-Steuermodul-Controller-Lampe-Licht/dp/B00RQ3Y2YO)
- Eastlion LED Strips [Source](https://www.amazon.de/Eastlion-16-4FT-Non-waterproof-Changing-Flexible/dp/B01AHOTXEM/ref=pd_sim_201_7?_encoding=UTF8&pd_rd_i=B01AHOTXEM&pd_rd_r=846ae241-b6ce-4a5a-a570-b49df71061be&pd_rd_w=6R701&pd_rd_wg=bXNSZ&pf_rd_p=b0773d2f-6335-4e3d-8bed-091e22ee3de4&pf_rd_r=KKRQVS1KXM2Y4HAC8KYH&psc=1&refRID=KKRQVS1KXM2Y4HAC8KYH)
- MiLight Wall Panel [Source](https://www.amazon.de/LIGHTEU®-Wireless-montiert-Controller-Batterien/dp/B0725QCV87)
- MiLight iBox WiFi Controller [Source](https://www.amazon.de/Kontrolleinrichtung-kabelloser-Mi-Lampen-Smartphone-Kontrolle/dp/B00OH2ES9Q)
- TP-Link Kasa HS100 Smart Plug [Source](https://www.amazon.de/TP-Link-Steckdose-funktionieren-erforderlich-Steuern/dp/B06W586CDZ)

When buying hardware, I try to get things where you don't have to buy an extra "hub" to connect it to your wifi network. Such as the aforementioned smart plugs and motion sensors. This makes integration even easier.

### Example Actions

openHab has its own scripting language whereby you can create extremely complex rules / scenarios with your devices and many other external data sources. For example, I have the suns position linked as an external source. This is used to calculate when it gets dark every day and automatically activates the motion sensor / light rules then. That way I never have to adjust the timing of this throughout the year. Whether its summer or winter, the motion sensors will begin turning on the lights at the exact correct time each night.

I also have some other basic rules such as before bed, turn the lights in my room `rgb(255,0,0)` to stimulate sleep. Conversely I have the LEDs come on as `rgb(0,0,255)` in the morning to stimulate waking up.
