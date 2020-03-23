## Test Results docker-xteve

## Test's: 3/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.0 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Container tag ubuntu-18-v1.0.0 doesn't exist | FAIL |

<main>

<section markdown="1">
## christopher102994/docker-xteve:alpine-3.10-v1.0.0

[![alpine-3.10-v1.0.0](alpine-3.10-v1.0.0.png =600x*)](alpine-3.10-v1.0.0.png)

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
drwxr-xr-x 1 user user 4096 Mar 23 22:51 /app
drwxr-xr-x 4 user user 4096 Mar 23 22:52 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:40 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apk
Starting xteve . . .

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