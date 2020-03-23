## Test Results docker-openssh-sftp-server

## Test's: 2/2 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-openssh-sftp-server:alpine-3.10-v1.0.0

### Build Version: 

### Logs

<details><summary>Expand</summary>
<p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
[fix-attrs.d] 50-sftp-attrs: applying... 
[fix-attrs.d] 50-sftp-attrs: exited 0.
[fix-attrs.d] done.
[cont-init.d] executing container initialization scripts...
[cont-init.d] 01-users-and-groups: executing... 
usermod: no changes
[cont-init.d] 01-users-and-groups: exited 0.
[cont-init.d] 05-init-mounted-folders: executing... 
[05-init-mounted-folders]: First boot with mounted /config/data detected.
[05-init-mounted-folders]: First boot with mounted /config/log detected.
[cont-init.d] 05-init-mounted-folders: exited 0.
[cont-init.d] 10-display-container-info: executing... 
[10-display-container-info]: 
-------------------------
# USER DEFINED VARIABLES:
-------------------------
PUID=900
LOG_LEVEL=INFO
USERNAME=user
PGID=900
PASSWORD=password
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:40 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:48 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:40 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 50-setup-user-from-env: executing... 
Successfully set USERNAME and PASSWORD.
[cont-init.d] 50-setup-user-from-env: exited 0.
[cont-init.d] 60-set-logging-levels: executing... 
Successfully set Log Level to INFO
[cont-init.d] 60-set-logging-levels: exited 0.
[cont-init.d] 70-generate-ssh-keys: executing... 
Generating public/private ed25519 key pair.
Your identification has been saved in /config/.ssh/ssh_host_ed25519_key.
Your public key has been saved in /config/.ssh/ssh_host_ed25519_key.pub.
The key fingerprint is:
SHA256:+gT3wqeBH/k5xOiYpDMR2ef83pZ3gvsJeEiJhttEGYg root@c937b936e4f6
The key's randomart image is:
+--[ED25519 256]--+
|     . ..        |
|    E .  o       |
|     o  o        |
|    o .o.. .     |
|     .o+Soo      |
|    . .@++oo     |
|     +++Oo= oo   |
|    + o+.Bo++.o..|
|     o  +.+oo+oo |
+----[SHA256]-----+
Generating public/private rsa key pair.
Your identification has been saved in /config/.ssh/ssh_host_rsa_key.
Your public key has been saved in /config/.ssh/ssh_host_rsa_key.pub.
The key fingerprint is:
SHA256:iSBDZJt2rc/oi1IldYOC4NsmqoA3eUuxYca7r80Qstg root@c937b936e4f6
The key's randomart image is:
+---[RSA 4096]----+
|oo+  .           |
|oo.oo.o          |
| .*oo...         |
| .+=.o . .       |
| o.=O . S        |
|oo+* X           |
|=.E B o          |
|+. * *           |
|... *++          |
+----[SHA256]-----+
Successfully Generated SSH keys.
[cont-init.d] 70-generate-ssh-keys: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apk
[services.d] done.
Starting openssh-server
Server listening on 0.0.0.0 port 22.
Server listening on :: port 22.

```
</p>
</details>

### Package info

<details><summary>Expand</summary>
<p>

```

```

</p>
</details>
</section>

</main>