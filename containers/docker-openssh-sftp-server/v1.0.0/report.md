## Test Results docker-openssh-sftp-server

## Test's: 2/2 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-openssh-sftp-server:alpine-3.10-v1.0.0

### Build Version: alpine-3.10-v1.0.0

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
drwxr-xr-x 1 user user 4096 Mar 26 00:20 /app
drwxr-xr-x 4 user user 4096 Mar 26 01:42 /config
drwxr-xr-x 1 user user 4096 Mar 26 00:20 /defaults
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
SHA256:TZ8RAGG9xLFqKLs0JiaqoxSP1ji71eF/iVUMPoHPVf4 root@e9e03b83f470
The key's randomart image is:
+--[ED25519 256]--+
|        ==ooo.   |
|       o o+o..   |
|        +.B...   |
|       . O.+ o.  |
| .  ... S + o  E |
|  * oo.. .       |
|.*o+=o  o .      |
|=o++ o.. o       |
|*+. .  ..        |
+----[SHA256]-----+
Generating public/private rsa key pair.
Your identification has been saved in /config/.ssh/ssh_host_rsa_key.
Your public key has been saved in /config/.ssh/ssh_host_rsa_key.pub.
The key fingerprint is:
SHA256:MNPshCoHdqAdwE0uKRlbeqCt7Qw60DUdUsGVg7atRhY root@e9e03b83f470
The key's randomart image is:
+---[RSA 4096]----+
|=.*..o++..       |
|.%o+ oE=o        |
|Bo*.+.*++.       |
|.*.+ o+*.        |
|+ + oo .S        |
|o+ o  o          |
|o o  .           |
| .               |
|                 |
+----[SHA256]-----+
Successfully Generated SSH keys.
[cont-init.d] 70-generate-ssh-keys: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apk
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
WARNING: Ignoring APKINDEX.00740ba1.tar.gz: No such file or directory
WARNING: Ignoring APKINDEX.d8b2a6f4.tar.gz: No such file or directory
musl-1.1.22-r3
busybox-1.30.1-r3
alpine-baselayout-3.1.2-r0
alpine-keys-2.1-r2
libcrypto1.1-1.1.1d-r2
libssl1.1-1.1.1d-r2
ca-certificates-cacert-20190108-r0
libtls-standalone-2.9.1-r0
ssl_client-1.30.1-r3
zlib-1.2.11-r1
apk-tools-2.10.4-r2
scanelf-1.2.3-r0
musl-utils-1.1.22-r3
libc-utils-0.7.1-r0
xz-libs-5.2.4-r0
xz-5.2.4-r0
ncurses-terminfo-base-6.1_p20190518-r2
ncurses-libs-6.1_p20190518-r2
readline-8.0.0-r0
bash-5.0.0-r0
ca-certificates-20190108-r0
libacl-2.2.52-r6
libattr-2.4.48-r0
coreutils-8.31-r0
linux-pam-1.3.0-r1
shadow-4.6-r2
tzdata-2019c-r0
openssh-keygen-8.1_p1-r0
openssh-server-common-8.1_p1-r0
openssh-server-8.1_p1-r0

```

</p>
</details>
</section>

</main>