## Test Results docker-base-image

## Test's: 6/6 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Init Scripts for: debian-10-v1.0.1 | PASSED |
| Test Service Scripts for: debian-10-v1.0.1 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.1 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.1 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-base-image:alpine-3.10-v1.0.1

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
drwxr-xr-x 4 user user 4096 Mar 23 22:44 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:40 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apk
[services.d] done.

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
## christopher102994/docker-base-image:debian-10-v1.0.1

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
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:41 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:45 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:41 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apt-get
[services.d] done.

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
## christopher102994/docker-base-image:ubuntu-18-v1.0.1

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
USERNAME=user
PUID=900
PGID=900
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 23 22:42 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:46 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:42 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apt-get
[services.d] done.

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