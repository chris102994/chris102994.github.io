# Test Results docker-filezilla

## Cumulative: 6/7 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot latest | PASSED |
| Test Init Scripts for: latest | PASSED |
| Test Service Scripts for: latest | PASSED |
| Container tag xxx doesn't exist | FAIL |
| Screenshot alpine-3.10 | PASSED |
| Test Init Scripts for: alpine-3.10 | PASSED |
| Test Service Scripts for: alpine-3.10 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-filezilla:latest

[![latest](latest.png =600x*)](latest.png)

### Build Version: 

### Logs

<details><summary>Expand</summary>
<p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
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
USERNAME=user
PGID=900
DISPLAY_WIDTH=1280
DISPLAY=:0
DISPLAY_HEIGHT=720
APP_NAME=FileZilla
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 21 01:40 /app
drwxr-xr-x 4 user user 4096 Mar 21 04:22 /config
drwxr-xr-x 1 user user 4096 Mar 14 01:33 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 20-certs: executing... 
[20-certs]: Generating DH Parameters (2048), this will take a while. . .
[20-certs]: Generating self-signed certificate for NGINX, this will take a while. . .
[20-certs]: Generating self-signed certificate for VNC server, this will take a while. . .
[cont-init.d] 20-certs: exited 0.
[cont-init.d] 20-vnc-password: executing... 
[cont-init.d] 20-vnc-password: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apk
[services.d] done.
[xvfb]: Starting . . .
[openbox]: Starting . . .
[x11vnc]: Starting . . .
[nginx]: Starting . . .

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

<section markdown="1">
## christopher102994/docker-filezilla:alpine-3.10

[![alpine-3.10](alpine-3.10.png =600x*)](alpine-3.10.png)

### Build Version: 

### Logs

<details><summary>Expand</summary>
<p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
[fix-attrs.d] 01-base-attrs: applying... 
[fix-attrs.d] 01-base-attrs: exited 0.
[fix-attrs.d] 02-gui-attrs: applying... 
s6-envuidgid: fatal: unknown user: 0755
[fix-attrs.d] 02-gui-attrs: exited 0.
[fix-attrs.d] done.
[cont-init.d] executing container initialization scripts...
[cont-init.d] 10-display-container-info: executing... 

-------------------------
# USER DEFINED VARIABLES:
-------------------------
DISPLAY_WIDTH=1280
DISPLAY=:0
DISPLAY_HEIGHT=720
APP_NAME=FileZilla
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Feb 27 01:28 /app
drwxr-xr-x 2 user user 4096 Feb 25 01:23 /config
drwxr-xr-x 1 user user 4096 Feb 25 01:23 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 15-init-mounted-folders: executing... 
First boot with mounted /config/data detected.
First boot with mounted /config/log detected.
[cont-init.d] 15-init-mounted-folders: exited 0.
[cont-init.d] 20-certs: executing... 
Generating DH Parameters (2048), this will take a while. . .
Generating self-signed certificate for NGINX, this will take a while. . .
Generating self-signed certificate for VNC server, this will take a while. . .
[cont-init.d] 20-certs: exited 0.
[cont-init.d] done.
[services.d] starting services
Package Manager: apk
[services.d] done.
Starting xvfb . . .
Starting novnc . . .
Starting openbox . . .
Starting nginx . . .
Starting x11vnc . . .

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