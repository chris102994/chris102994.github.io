## Test Results docker-toonamiaftermath

## Test's: 3/3 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.0 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-toonamiaftermath:alpine-3.10-v1.0.0

[![alpine-3.10-v1.0.0](alpine-3.10-v1.0.0.png =600x*)](alpine-3.10-v1.0.0.png)

### Build Version: 

### Logs

<details><summary>Expand</summary>
<p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
[fix-attrs.d] 50-toonami-attrs: applying... 
[fix-attrs.d] 50-toonami-attrs: exited 0.
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
FIRST_RUN=TRUE
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 24 00:42 /app
drwxr-xr-x 4 user user 4096 Mar 24 00:43 /config
drwxr-xr-x 1 user user 4096 Mar 24 00:42 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 40-fix-toonami-attrs: executing... 
[cont-init.d] 40-fix-toonami-attrs: exited 0.
[cont-init.d] 50-first-run: executing... 
[cont-init.d] 50-first-run: exited 0.
[cont-init.d] 60-fix-xeteve-attrs: executing... 
Archive:  /defaults/xteve_default.zip
  inflating: /config/authentication.json  
  inflating: /config/MEFSLBL3WKWEQXYX469O.m3u  
  inflating: /config/xteve.m3u       
  inflating: /config/xteve.xml       
  inflating: /config/XYDP47B15C52LOH6R46J.xml  
 extracting: /config/pms.json        
  inflating: /config/settings.json   
  inflating: /config/urls.json       
  inflating: /config/xepg.json       
If you wish to reset to the default parameters passed then remove the files in your mounted /data file.
[cont-init.d] 60-fix-xeteve-attrs: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apk
[services.d] done.
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