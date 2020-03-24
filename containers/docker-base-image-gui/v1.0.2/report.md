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

### Build Version: alpine-3.10-v1.0.2

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
drwxr-xr-x 1 user user 4096 Mar 24 20:31 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:41 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:21 /defaults
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
libjpeg-turbo-2.0.4-r0
libxau-1.0.9-r0
libbsd-0.9.1-r0
libxdmcp-1.1.3-r0
libxcb-1.13.1-r0
libx11-1.6.8-r1
libxcomposite-0.4.5-r0
libxext-1.3.4-r0
libxi-1.7.9-r2
libxtst-1.2.3-r3
pcre-8.43-r0
nginx-1.16.1-r2
libice-1.0.9-r3
libuuid-2.33.2-r0
libsm-1.2.3-r0
libxfixes-5.0.3-r2
libxrender-0.9.10-r3
libxcursor-1.2.0-r0
libxinerama-1.1.4-r1
libxrandr-1.5.2-r0
libffi-3.2.1-r6
libintl-0.19.8.1-r4
libblkid-2.33.2-r0
libmount-2.33.2-r0
glib-2.60.4-r0
libbz2-1.0.6-r7
libpng-1.6.37-r1
freetype-2.10.0-r0
giflib-5.1.9-r0
libid3tag-0.15.1b-r7
tiff-4.0.10-r3
imlib2-1.5.1-r0
expat-2.2.8-r0
fontconfig-2.13.1-r0
libxft-2.3.3-r0
pixman-0.38.4-r0
cairo-1.16.0-r2
fribidi-1.0.5-r2
libgcc-8.3.0-r0
graphite2-1.3.13-r1
harfbuzz-2.5.1-r0
pango-1.42.4-r2
libxml2-2.9.9-r3
libcroco-0.6.13-r1
shared-mime-info-1.12-r0
gdk-pixbuf-2.38.1-r0
librsvg-2.40.21-r0
openbox-libs-3.6.1-r2
xcb-util-0.4.0-r1
startup-notification-0.12-r3
openbox-3.6.1-r2
openssl-1.1.1d-r2
xdpyinfo-1.3.2-r0
encodings-1.0.4-r1
font-alias-1.0.3-r1
libfontenc-1.1.4-r0
mkfontscale-1.2.1-r1
util-macros-1.19.2-r0
font-misc-misc-1.1.2-r1
font-cursor-misc-1.0.3-r1
xkeyboard-config-2.27-r0
libxkbfile-1.1.0-r0
xkbcomp-1.4.2-r0
libxt-1.1.5-r2
libxmu-1.1.3-r0
xauth-1.0.10-r1
libsmartcols-2.33.2-r0
findmnt-2.33.2-r0
mcookie-2.33.2-r0
xmodmap-1.0.10-r0
mcpp-libs-2.7.2-r1
mcpp-2.7.2-r1
xrdb-1.2.0-r0
xinit-1.4.1-r0
mesa-19.0.6-r0
libxdamage-1.1.5-r0
libxxf86vm-1.1.4-r2
libpciaccess-0.14-r0
libdrm-2.4.98-r0
mesa-glapi-19.0.6-r0
libxshmfence-1.3-r0
mesa-gl-19.0.6-r0
libxfont2-2.0.3-r2
xvfb-1.20.5-r0

```

</p>
</details>
</section>

<section markdown="1">
## christopher102994/docker-base-image-gui:debian-10-v1.0.2

[![debian-10-v1.0.2](debian-10-v1.0.2.png =600x*)](debian-10-v1.0.2.png)

### Build Version: debian-10-v1.0.2

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
drwxr-xr-x 1 user user 4096 Mar 24 20:34 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:43 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:22 /defaults
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

```
</p>
</details>

### Package info

<details><summary>Expand</summary>
<p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.118 all [installed,local]
apt/now 1.8.2 amd64 [installed,local]
base-files/now 10.3+deb10u3 amd64 [installed,local]
base-passwd/now 3.5.46 amd64 [installed,local]
bash/now 5.0-4 amd64 [installed,local]
bsdutils/now 1:2.33.1-0.1 amd64 [installed,local]
ca-certificates/now 20190110 all [installed,local]
coreutils/now 8.30-3 amd64 [installed,local]
cron/now 3.0pl1-134+deb10u1 amd64 [installed,local]
dash/now 0.5.10.2-5 amd64 [installed,local]
debconf/now 1.5.71 all [installed,local]
debian-archive-keyring/now 2019.1 all [installed,local]
debianutils/now 4.8.6.1 amd64 [installed,local]
diffutils/now 1:3.7-3 amd64 [installed,local]
dpkg/now 1.19.7 amd64 [installed,local]
e2fsprogs/now 1.44.5-1+deb10u3 amd64 [installed,local]
fdisk/now 2.33.1-0.1 amd64 [installed,local]
findutils/now 4.6.0+git+20190209-2 amd64 [installed,local]
fontconfig-config/now 2.13.1-2 all [installed,local]
fontconfig/now 2.13.1-2 amd64 [installed,local]
fonts-dejavu-core/now 2.37-1 all [installed,local]
gcc-8-base/now 8.3.0-6 amd64 [installed,local]
gpgv/now 2.2.12-1+deb10u1 amd64 [installed,local]
grep/now 3.3-1 amd64 [installed,local]
gzip/now 1.9-3 amd64 [installed,local]
hostname/now 3.21 amd64 [installed,local]
init-system-helpers/now 1.56+nmu1 all [installed,local]
libacl1/now 2.2.53-4 amd64 [installed,local]
libapt-pkg5.0/now 1.8.2 amd64 [installed,local]
libattr1/now 1:2.4.48-4 amd64 [installed,local]
libaudit-common/now 1:2.8.4-3 all [installed,local]
libaudit1/now 1:2.8.4-3 amd64 [installed,local]
libblkid1/now 2.33.1-0.1 amd64 [installed,local]
libbsd0/now 0.9.1-2 amd64 [installed,local]
libbz2-1.0/now 1.0.6-9.2~deb10u1 amd64 [installed,local]
libc-bin/now 2.28-10 amd64 [installed,local]
libc6/now 2.28-10 amd64 [installed,local]
libcairo2/now 1.16.0-4 amd64 [installed,local]
libcap-ng0/now 0.7.9-2 amd64 [installed,local]
libcom-err2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libcroco3/now 0.6.12-3 amd64 [installed,local]
libdatrie1/now 0.2.12-2 amd64 [installed,local]
libdb5.3/now 5.3.28+dfsg1-0.5 amd64 [installed,local]
libdebconfclient0/now 0.249 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.97-1 amd64 [installed,local]
libdrm-common/now 2.4.97-1 all [installed,local]
libdrm-intel1/now 2.4.97-1 amd64 [installed,local]
libdrm-nouveau2/now 2.4.97-1 amd64 [installed,local]
libdrm-radeon1/now 2.4.97-1 amd64 [installed,local]
libdrm2/now 2.4.97-1 amd64 [installed,local]
libedit2/now 3.1-20181209-1 amd64 [installed,local]
libelf1/now 0.176-1.1 amd64 [installed,local]
libexpat1/now 2.2.6-2+deb10u1 amd64 [installed,local]
libext2fs2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libfdisk1/now 2.33.1-0.1 amd64 [installed,local]
libffi6/now 3.2.1-9 amd64 [installed,local]
libfontconfig1/now 2.13.1-2 amd64 [installed,local]
libfontenc1/now 1:1.1.3-1+b2 amd64 [installed,local]
libfreetype6/now 2.9.1-3+deb10u1 amd64 [installed,local]
libfribidi0/now 1.0.5-3.1+deb10u1 amd64 [installed,local]
libgcc1/now 1:8.3.0-6 amd64 [installed,local]
libgcrypt20/now 1.8.4-5 amd64 [installed,local]
libgd3/now 2.2.5-5.2 amd64 [installed,local]
libgdk-pixbuf2.0-0/now 2.38.1+dfsg-1 amd64 [installed,local]
libgdk-pixbuf2.0-common/now 2.38.1+dfsg-1 all [installed,local]
libgeoip1/now 1.6.12-1 amd64 [installed,local]
libgif7/now 5.1.4-3 amd64 [installed,local]
libgl1-mesa-dri/now 18.3.6-2+deb10u1 amd64 [installed,local]
libgl1/now 1.1.0-1 amd64 [installed,local]
libglapi-mesa/now 18.3.6-2+deb10u1 amd64 [installed,local]
libglib2.0-0/now 2.58.3-2+deb10u2 amd64 [installed,local]
libglvnd0/now 1.1.0-1 amd64 [installed,local]
libglx-mesa0/now 18.3.6-2+deb10u1 amd64 [installed,local]
libglx0/now 1.1.0-1 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-4 amd64 [installed,local]
libgnutls30/now 3.6.7-4+deb10u2 amd64 [installed,local]
libgpg-error0/now 1.35-1 amd64 [installed,local]
libgraphite2-3/now 1.3.13-7 amd64 [installed,local]
libharfbuzz0b/now 2.3.1-1 amd64 [installed,local]
libhogweed4/now 3.4.1-1 amd64 [installed,local]
libice6/now 2:1.0.9-2 amd64 [installed,local]
libicu63/now 63.1-6 amd64 [installed,local]
libid3tag0/now 0.15.1b-14 amd64 [installed,local]
libidn2-0/now 2.0.5-1+deb10u1 amd64 [installed,local]
libimlib2/now 1.5.1-1 amd64 [installed,local]
libjbig0/now 2.1-3.1+b2 amd64 [installed,local]
libjpeg62-turbo/now 1:1.5.2-2+b1 amd64 [installed,local]
libllvm7/now 1:7.0.1-8 amd64 [installed,local]
liblz4-1/now 1.8.3-1 amd64 [installed,local]
liblzma5/now 5.2.4-1 amd64 [installed,local]
libmount1/now 2.33.1-0.1 amd64 [installed,local]
libncurses6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libncursesw6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libnettle6/now 3.4.1-1 amd64 [installed,local]
libnginx-mod-http-auth-pam/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-dav-ext/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-echo/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-geoip/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-image-filter/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-subs-filter/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-upstream-fair/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-http-xslt-filter/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-mail/now 1.14.2-2+deb10u1 amd64 [installed,local]
libnginx-mod-stream/now 1.14.2-2+deb10u1 amd64 [installed,local]
libobrender32v5/now 3.6.1-8 amd64 [installed,local]
libobt2v5/now 3.6.1-8 amd64 [installed,local]
libp11-kit0/now 0.23.15-2 amd64 [installed,local]
libpam-modules-bin/now 1.3.1-5 amd64 [installed,local]
libpam-modules/now 1.3.1-5 amd64 [installed,local]
libpam-runtime/now 1.3.1-5 all [installed,local]
libpam0g/now 1.3.1-5 amd64 [installed,local]
libpango-1.0-0/now 1.42.4-7~deb10u1 amd64 [installed,local]
libpangocairo-1.0-0/now 1.42.4-7~deb10u1 amd64 [installed,local]
libpangoft2-1.0-0/now 1.42.4-7~deb10u1 amd64 [installed,local]
libpangoxft-1.0-0/now 1.42.4-7~deb10u1 amd64 [installed,local]
libpciaccess0/now 0.14-1 amd64 [installed,local]
libpcre3/now 2:8.39-12 amd64 [installed,local]
libpixman-1-0/now 0.36.0-1 amd64 [installed,local]
libpng16-16/now 1.6.36-6 amd64 [installed,local]
libprocps7/now 2:3.3.15-2 amd64 [installed,local]
librsvg2-2/now 2.44.10-2.1 amd64 [installed,local]
libseccomp2/now 2.3.3-4 amd64 [installed,local]
libselinux1/now 2.8-1+b1 amd64 [installed,local]
libsemanage-common/now 2.8-2 all [installed,local]
libsemanage1/now 2.8-2 amd64 [installed,local]
libsensors-config/now 1:3.5.0-3 all [installed,local]
libsensors5/now 1:3.5.0-3 amd64 [installed,local]
libsepol1/now 2.8-1 amd64 [installed,local]
libsm6/now 2:1.2.3-1 amd64 [installed,local]
libsmartcols1/now 2.33.1-0.1 amd64 [installed,local]
libss2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libssl1.1/now 1.1.1d-0+deb10u2 amd64 [installed,local]
libstartup-notification0/now 0.12-6 amd64 [installed,local]
libstdc++6/now 8.3.0-6 amd64 [installed,local]
libsystemd0/now 241-7~deb10u3 amd64 [installed,local]
libtasn1-6/now 4.13-3 amd64 [installed,local]
libthai-data/now 0.1.28-2 all [installed,local]
libthai0/now 0.1.28-2 amd64 [installed,local]
libtiff5/now 4.1.0+git191117-2~deb10u1 amd64 [installed,local]
libtinfo6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libudev1/now 241-7~deb10u3 amd64 [installed,local]
libunistring2/now 0.9.10-1 amd64 [installed,local]
libunwind8/now 1.2.1-9 amd64 [installed,local]
libuuid1/now 2.33.1-0.1 amd64 [installed,local]
libwebp6/now 0.6.1-2 amd64 [installed,local]
libx11-6/now 2:1.6.7-1 amd64 [installed,local]
libx11-data/now 2:1.6.7-1 all [installed,local]
libx11-xcb1/now 2:1.6.7-1 amd64 [installed,local]
libxau6/now 1:1.0.8-1+b2 amd64 [installed,local]
libxaw7/now 2:1.0.13-1+b2 amd64 [installed,local]
libxcb-dri2-0/now 1.13.1-2 amd64 [installed,local]
libxcb-dri3-0/now 1.13.1-2 amd64 [installed,local]
libxcb-glx0/now 1.13.1-2 amd64 [installed,local]
libxcb-present0/now 1.13.1-2 amd64 [installed,local]
libxcb-render0/now 1.13.1-2 amd64 [installed,local]
libxcb-shape0/now 1.13.1-2 amd64 [installed,local]
libxcb-shm0/now 1.13.1-2 amd64 [installed,local]
libxcb-sync1/now 1.13.1-2 amd64 [installed,local]
libxcb-util0/now 0.3.8-3+b2 amd64 [installed,local]
libxcb1/now 1.13.1-2 amd64 [installed,local]
libxcomposite1/now 1:0.4.4-2 amd64 [installed,local]
libxcursor1/now 1:1.1.15-2 amd64 [installed,local]
libxdamage1/now 1:1.1.4-3+b3 amd64 [installed,local]
libxdmcp6/now 1:1.1.2-3 amd64 [installed,local]
libxext6/now 2:1.3.3-1+b2 amd64 [installed,local]
libxfixes3/now 1:5.0.3-1 amd64 [installed,local]
libxfont2/now 1:2.0.3-1 amd64 [installed,local]
libxft2/now 2.3.2-2 amd64 [installed,local]
libxi6/now 2:1.7.9-1 amd64 [installed,local]
libxinerama1/now 2:1.1.4-2 amd64 [installed,local]
libxkbfile1/now 1:1.0.9-2+b11 amd64 [installed,local]
libxml2/now 2.9.4+dfsg1-7+b3 amd64 [installed,local]
libxmu6/now 2:1.1.2-2+b3 amd64 [installed,local]
libxmuu1/now 2:1.1.2-2+b3 amd64 [installed,local]
libxpm4/now 1:3.5.12-1 amd64 [installed,local]
libxrandr2/now 2:1.5.1-1 amd64 [installed,local]
libxrender1/now 1:0.9.10-1 amd64 [installed,local]
libxshmfence1/now 1.3-1 amd64 [installed,local]
libxslt1.1/now 1.1.32-2.2~deb10u1 amd64 [installed,local]
libxt6/now 1:1.1.5-1+b3 amd64 [installed,local]
libxtst6/now 2:1.2.3-1 amd64 [installed,local]
libxv1/now 2:1.0.11-1 amd64 [installed,local]
libxxf86dga1/now 2:1.1.4-1+b3 amd64 [installed,local]
libxxf86vm1/now 1:1.1.4-1+b2 amd64 [installed,local]
libzstd1/now 1.3.8+dfsg-3 amd64 [installed,local]
login/now 1:4.5-1.1 amd64 [installed,local]
lsb-base/now 10.2019051400 all [installed,local]
mawk/now 1.3.3-17+b3 amd64 [installed,local]
mount/now 2.33.1-0.1 amd64 [installed,local]
ncurses-base/now 6.1+20181013-2+deb10u2 all [installed,local]
ncurses-bin/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
nginx-common/now 1.14.2-2+deb10u1 all [installed,local]
nginx-full/now 1.14.2-2+deb10u1 amd64 [installed,local]
nginx/now 1.14.2-2+deb10u1 all [installed,local]
openbox/now 3.6.1-8 amd64 [installed,local]
openssl/now 1.1.1d-0+deb10u2 amd64 [installed,local]
passwd/now 1:4.5-1.1 amd64 [installed,local]
perl-base/now 5.28.1-6 amd64 [installed,local]
procps/now 2:3.3.15-2 amd64 [installed,local]
sed/now 4.7-1 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
shared-mime-info/now 1.10-1 amd64 [installed,local]
sysvinit-utils/now 2.93-8 amd64 [installed,local]
tar/now 1.30+dfsg-6 amd64 [installed,local]
tzdata/now 2019c-0+deb10u1 all [installed,local]
ucf/now 3.0038+nmu1 all [installed,local]
util-linux/now 2.33.1-0.1 amd64 [installed,local]
x11-common/now 1:7.7+19 all [installed,local]
x11-utils/now 7.7+4 amd64 [installed,local]
x11-xkb-utils/now 7.7+4 amd64 [installed,local]
xkb-data/now 2.26-2 all [installed,local]
xserver-common/now 2:1.20.4-1 all [installed,local]
xvfb/now 2:1.20.4-1 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-1 amd64 [installed,local]

```

</p>
</details>
</section>

<section markdown="1">
## christopher102994/docker-base-image-gui:ubuntu-18-v1.0.2

[![ubuntu-18-v1.0.2](ubuntu-18-v1.0.2.png =600x*)](ubuntu-18-v1.0.2.png)

### Build Version: ubuntu-18-v1.0.2

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
drwxr-xr-x 1 user user 4096 Mar 24 20:37 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:45 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:23 /defaults
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

```
</p>
</details>

### Package info

<details><summary>Expand</summary>
<p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.116ubuntu1 all [installed,local]
apt/now 1.6.12 amd64 [installed,local]
base-files/now 10.1ubuntu2.8 amd64 [installed,local]
base-passwd/now 3.5.44 amd64 [installed,local]
bash/now 4.4.18-2ubuntu1.2 amd64 [installed,local]
bsdutils/now 1:2.31.1-0.4ubuntu3.5 amd64 [installed,local]
bzip2/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
ca-certificates/now 20180409 all [installed,local]
coreutils/now 8.28-1ubuntu1 amd64 [installed,local]
cron/now 3.0pl1-128.1ubuntu1 amd64 [installed,local]
dash/now 0.5.8-2.10 amd64 [installed,local]
debconf/now 1.5.66ubuntu1 all [installed,local]
debianutils/now 4.8.4 amd64 [installed,local]
diffutils/now 1:3.6-1 amd64 [installed,local]
dpkg/now 1.19.0.5ubuntu2.3 amd64 [installed,local]
e2fsprogs/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
fdisk/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
findutils/now 4.6.0+git+20170828-2 amd64 [installed,local]
fontconfig/now 2.12.6-0ubuntu2 amd64 [installed,local]
fontconfig-config/now 2.12.6-0ubuntu2 all [installed,local]
fonts-dejavu-core/now 2.37-1 all [installed,local]
gcc-8-base/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
gpgv/now 2.2.4-1ubuntu1.2 amd64 [installed,local]
grep/now 3.1-2build1 amd64 [installed,local]
gzip/now 1.6-5ubuntu1 amd64 [installed,local]
hostname/now 3.20 amd64 [installed,local]
init-system-helpers/now 1.51 all [installed,local]
iproute2/now 4.15.0-2ubuntu1 amd64 [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libbsd0/now 0.8.7-1ubuntu0.1 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1 amd64 [installed,local]
libc6/now 2.27-3ubuntu1 amd64 [installed,local]
libcairo2/now 1.15.10-2ubuntu0.1 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libcroco3/now 0.6.12-2 amd64 [installed,local]
libdatrie1/now 0.2.10-7 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-common/now 2.4.99-1ubuntu1~18.04.2 all [installed,local]
libdrm-intel1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-nouveau2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-radeon1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libedit2/now 3.1-20170329-1 amd64 [installed,local]
libelf1/now 0.170-0.4ubuntu0.1 amd64 [installed,local]
libexpat1/now 2.2.5-3ubuntu0.2 amd64 [installed,local]
libext2fs2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libfdisk1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libffi6/now 3.2.1-8 amd64 [installed,local]
libfontconfig1/now 2.12.6-0ubuntu2 amd64 [installed,local]
libfontenc1/now 1:1.1.3-1 amd64 [installed,local]
libfreetype6/now 2.8.1-2ubuntu2 amd64 [installed,local]
libgcc1/now 1:8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libgcrypt20/now 1.8.1-4ubuntu1.2 amd64 [installed,local]
libgd3/now 2.2.5-4ubuntu0.3 amd64 [installed,local]
libgdk-pixbuf2.0-0/now 2.36.11-2 amd64 [installed,local]
libgdk-pixbuf2.0-common/now 2.36.11-2 all [installed,local]
libgeoip1/now 1.6.12-1 amd64 [installed,local]
libgif7/now 5.1.4-2ubuntu0.1 amd64 [installed,local]
libgl1/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libgl1-mesa-dri/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libgl1-mesa-glx/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libglapi-mesa/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libglib2.0-0/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libglvnd0/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libglx-mesa0/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libglx0/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-2 amd64 [installed,local]
libgnutls30/now 3.5.18-1ubuntu1.3 amd64 [installed,local]
libgpg-error0/now 1.27-6 amd64 [installed,local]
libgraphite2-3/now 1.3.11-2 amd64 [installed,local]
libharfbuzz0b/now 1.7.2-1ubuntu1 amd64 [installed,local]
libhogweed4/now 3.4-1 amd64 [installed,local]
libice6/now 2:1.0.9-2 amd64 [installed,local]
libicu60/now 60.2-3ubuntu3.1 amd64 [installed,local]
libid3tag0/now 0.15.1b-13 amd64 [installed,local]
libidn2-0/now 2.0.4-1.1ubuntu0.2 amd64 [installed,local]
libimlib2/now 1.4.10-1 amd64 [installed,local]
libjbig0/now 2.1-3.1build1 amd64 [installed,local]
libjpeg-turbo8/now 1.5.2-0ubuntu5.18.04.3 amd64 [installed,local]
libjpeg8/now 8c-2ubuntu8 amd64 [installed,local]
libllvm9/now 1:9-2~ubuntu18.04.2 amd64 [installed,local]
liblz4-1/now 0.0~r131-2ubuntu3 amd64 [installed,local]
liblzma5/now 5.2.2-1.3 amd64 [installed,local]
libmnl0/now 1.0.4-2 amd64 [installed,local]
libmount1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libncurses5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libncursesw5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libnettle6/now 3.4-1 amd64 [installed,local]
libnginx-mod-http-geoip/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-http-image-filter/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-http-xslt-filter/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-mail/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-stream/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libobrender32v5/now 3.6.1-7ubuntu0.1 amd64 [installed,local]
libobt2v5/now 3.6.1-7ubuntu0.1 amd64 [installed,local]
libp11-kit0/now 0.23.9-2 amd64 [installed,local]
libpam-modules/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-modules-bin/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-runtime/now 1.1.8-3.6ubuntu2.18.04.1 all [installed,local]
libpam0g/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpango-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpangocairo-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpangoft2-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpangoxft-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpciaccess0/now 0.14-1 amd64 [installed,local]
libpcre3/now 2:8.39-9 amd64 [installed,local]
libpixman-1-0/now 0.34.0-2 amd64 [installed,local]
libpng16-16/now 1.6.34-1ubuntu0.18.04.2 amd64 [installed,local]
libprocps6/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
librsvg2-2/now 2.40.20-2 amd64 [installed,local]
libseccomp2/now 2.4.1-0ubuntu0.18.04.2 amd64 [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsensors4/now 1:3.4.0-4 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libsm6/now 2:1.2.2-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libss2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libssl1.1/now 1.1.1-1ubuntu2.1~18.04.5 amd64 [installed,local]
libstartup-notification0/now 0.12-5 amd64 [installed,local]
libstdc++6/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libsystemd0/now 237-3ubuntu10.39 amd64 [installed,local]
libtasn1-6/now 4.13-2 amd64 [installed,local]
libthai-data/now 0.1.27-2 all [installed,local]
libthai0/now 0.1.27-2 amd64 [installed,local]
libtiff5/now 4.0.9-5ubuntu0.3 amd64 [installed,local]
libtinfo5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libudev1/now 237-3ubuntu10.39 amd64 [installed,local]
libunistring2/now 0.9.9-0ubuntu2 amd64 [installed,local]
libuuid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libwebp6/now 0.6.1-2 amd64 [installed,local]
libx11-6/now 2:1.6.4-3ubuntu0.2 amd64 [installed,local]
libx11-data/now 2:1.6.4-3ubuntu0.2 all [installed,local]
libx11-xcb1/now 2:1.6.4-3ubuntu0.2 amd64 [installed,local]
libxau6/now 1:1.0.8-1 amd64 [installed,local]
libxaw7/now 2:1.0.13-1 amd64 [installed,local]
libxcb-dri2-0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-dri3-0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-glx0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-present0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-render0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-shape0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-shm0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-sync1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-util1/now 0.4.0-0ubuntu3 amd64 [installed,local]
libxcb1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcomposite1/now 1:0.4.4-2 amd64 [installed,local]
libxcursor1/now 1:1.1.15-1 amd64 [installed,local]
libxdamage1/now 1:1.1.4-3 amd64 [installed,local]
libxdmcp6/now 1:1.1.2-3 amd64 [installed,local]
libxext6/now 2:1.3.3-1 amd64 [installed,local]
libxfixes3/now 1:5.0.3-1 amd64 [installed,local]
libxfont2/now 1:2.0.3-1 amd64 [installed,local]
libxft2/now 2.3.2-1 amd64 [installed,local]
libxi6/now 2:1.7.9-1 amd64 [installed,local]
libxinerama1/now 2:1.1.3-1 amd64 [installed,local]
libxkbfile1/now 1:1.0.9-2 amd64 [installed,local]
libxml2/now 2.9.4+dfsg1-6.1ubuntu1.3 amd64 [installed,local]
libxmu6/now 2:1.1.2-2 amd64 [installed,local]
libxmuu1/now 2:1.1.2-2 amd64 [installed,local]
libxpm4/now 1:3.5.12-1 amd64 [installed,local]
libxrandr2/now 2:1.5.1-1 amd64 [installed,local]
libxrender1/now 1:0.9.10-1 amd64 [installed,local]
libxshmfence1/now 1.3-1 amd64 [installed,local]
libxslt1.1/now 1.1.29-5ubuntu0.2 amd64 [installed,local]
libxt6/now 1:1.1.5-1 amd64 [installed,local]
libxtst6/now 2:1.2.3-1 amd64 [installed,local]
libxv1/now 2:1.0.11-1 amd64 [installed,local]
libxxf86dga1/now 2:1.1.4-1 amd64 [installed,local]
libxxf86vm1/now 1:1.1.4-1 amd64 [installed,local]
libzstd1/now 1.3.3+dfsg-2ubuntu1.1 amd64 [installed,local]
login/now 1:4.5-1ubuntu2 amd64 [installed,local]
lsb-base/now 9.20170808ubuntu1 all [installed,local]
mawk/now 1.3.3-17ubuntu3 amd64 [installed,local]
mount/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
multiarch-support/now 2.27-3ubuntu1 amd64 [installed,local]
ncurses-base/now 6.1-1ubuntu1.18.04 all [installed,local]
ncurses-bin/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
nginx/now 1.14.0-0ubuntu1.7 all [installed,local]
nginx-common/now 1.14.0-0ubuntu1.7 all [installed,local]
nginx-core/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
openbox/now 3.6.1-7ubuntu0.1 amd64 [installed,local]
openssl/now 1.1.1-1ubuntu2.1~18.04.5 amd64 [installed,local]
passwd/now 1:4.5-1ubuntu2 amd64 [installed,local]
perl-base/now 5.26.1-6ubuntu0.3 amd64 [installed,local]
procps/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
sed/now 4.4-2 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
shared-mime-info/now 1.9-2 amd64 [installed,local]
sysvinit-utils/now 2.88dsf-59.10ubuntu1 amd64 [installed,local]
tar/now 1.29b-2ubuntu0.1 amd64 [installed,local]
tzdata/now 2019c-0ubuntu0.18.04 all [installed,local]
ubuntu-keyring/now 2018.09.18.1~18.04.0 all [installed,local]
ucf/now 3.0038 all [installed,local]
util-linux/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
x11-common/now 1:7.7+19ubuntu7.1 all [installed,local]
x11-utils/now 7.7+3build1 amd64 [installed,local]
x11-xkb-utils/now 7.7+3ubuntu0.18.04.1 amd64 [installed,local]
xauth/now 1:1.0.10-1 amd64 [installed,local]
xkb-data/now 2.23.1-1ubuntu1.18.04.1 all [installed,local]
xserver-common/now 2:1.19.6-1ubuntu4.4 all [installed,local]
xvfb/now 2:1.19.6-1ubuntu4.4 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]

```

</p>
</details>
</section>

</main>