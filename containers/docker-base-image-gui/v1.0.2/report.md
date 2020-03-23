## Test Results docker-base-image-gui

## Test's: 7/9 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.2 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.2 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.2 | PASSED |
| Screenshot debian-10-v1.0.2 | PASSED |
| Test Init Scripts for: debian-10-v1.0.2 | PASSED |
| Test Service Scripts for: debian-10-v1.0.2 | FAILED |
| Screenshot ubuntu-18-v1.0.2 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.2 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.2 | FAILED |

<main>

<section markdown="1">
## christopher102994/docker-base-image-gui:alpine-3.10-v1.0.2

[![alpine-3.10-v1.0.2](alpine-3.10-v1.0.2.png =600x*)](alpine-3.10-v1.0.2.png)

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
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:43 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:52 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:40 /defaults
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
## christopher102994/docker-base-image-gui:debian-10-v1.0.2

[![debian-10-v1.0.2](debian-10-v1.0.2.png =600x*)](debian-10-v1.0.2.png)

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
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:46 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:55 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:41 /defaults
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
[run]: The Package Manager is apt-get
[services.d] done.
[xvfb]: Starting . . .
[openbox]: Starting . . .
[x11vnc]: Starting . . .
[nginx]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .

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
## christopher102994/docker-base-image-gui:ubuntu-18-v1.0.2

[![ubuntu-18-v1.0.2](ubuntu-18-v1.0.2.png =600x*)](ubuntu-18-v1.0.2.png)

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
GROUPNAME=user
DISPLAY=:0
USERNAME=user
PUID=900
PGID=900
DISPLAY_WIDTH=1280
DISPLAY_HEIGHT=720
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:49 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:57 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:42 /defaults
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
[run]: The Package Manager is apt-get
[services.d] done.
[xvfb]: Starting . . .
[openbox]: Starting . . .
[x11vnc]: Starting . . .
[nginx]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .
[x11vnc]: Starting . . .

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