---
date: '2018-04-05'
title: 'Setting up a Raspberry Pi'
category: 'linux'
tags: ['raspberry pi', 'linux']
---

When setting up a Raspberry Pi, you first need to write an OS onto an SD Card so your device has something to boot from.

## Operating System

To get your Pi up and running, first download an OS. For beginners I suggest Raspbian. Its a Debian based OS maintained by the Raspberry Pi Foundation.

[Raspbian for Raspberry Pi 3](https://downloads.raspberrypi.org/raspbian_lite_latest)

- [Download Overview Page](https://www.raspberrypi.org/downloads/raspbian/)

[Ubuntu Server - Raspberry Pi 3](http://cdimage.ubuntu.com/releases/bionic/release/ubuntu-18.04.3-preinstalled-server-arm64+raspi3.img.xz)

There is unfortunately no official support for Ubuntu Server for the Raspberry Pi 4 yet, but of course the community has made some progress already:

[Blog Post](https://jamesachambers.com/raspberry-pi-4-ubuntu-server-desktop-18-04-3-image-unofficial/) [Github Repo - ISO](https://github.com/TheRemote/Ubuntu-Server-raspi4-unofficial/releases)

Once you have your `.iso` downloaded, fire up a terminal window and find out which device your USB Stick is:

```bash
$(~)-(110MB)> lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sdb    	 7:0    0  15,9G  1 disk
sda      8:0    0   1,8T  0 disk
├─sda1   8:1    0 485,6G  0 part
├─sda2   8:2    0     1K  0 part
├─sda3   8:3    0 489,1G  0 part
├─sda4   8:4    0 442,4G  0 part /mnt/sda4
├─sda5   8:5    0 305,6G  0 part
└─sda6   8:6    0 140,3G  0 part /
```

As you can see from the above output, I have a device named `sdb` which is ~16gb. This is my USB Stick.

Therefore we can run `dd`, colloquially known as 'disk destroyer' because if you're not careful you can just write over your entire active OS partition and completely fuck your system.

```
sudo dd if=2019-07-10-raspbian-buster-lite of=/dev/sdb status=progress
```

A quick break down of the arguments:

- `if` = input file
- `of` = output file
- `status=progress` = required for showing output status as it writes the image

## Setup

Finally, once you have your USB Stick written, it will most likely mount the two new partitions automatically. You should see a `ROOT` and `BOOT` partition.

You can now add two small files to enable the SSH Server on boot, and connect to the wifi network of your choosing. This way you never have to plug in a monitor / keyboard / mouse / etc. Simply insert the microSD card, give the thing power, and then find it on your network and ssh in!

> P.S. the default credentials on a Raspbian installation are: `pi/raspberry`

### SSH

Create an empty file named `ssh` **without an extension** in the root of the <code>BOOT</code> partition

### WiFi

Also in the root of the `BOOT` partition:

Create a file named `wpa_supplicant.conf` with the following contents:

```bash
country=DE
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
	ssid="MyWifiSSID"
	scan_ssid=1
	psk="1234"
	key_mgmt=WPA-PSK
}
```
