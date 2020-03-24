## Test Results docker-musicbrainzpicard

## Test's: 3/3 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot debian-10-v1.0.0 | PASSED |
| Test Init Scripts for: debian-10-v1.0.0 | PASSED |
| Test Service Scripts for: debian-10-v1.0.0 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-musicbrainzpicard:debian-10-v1.0.0

[![debian-10-v1.0.0](debian-10-v1.0.0.png =600x*)](debian-10-v1.0.0.png)

### Build Version: debian-10-v1.0.0

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
APP_NAME=MusicBrainzPicard
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 24 22:02 /app
drwxr-xr-x 4 user user 4096 Mar 24 22:04 /config
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
libaom0/now 1.0.0-3 amd64 [installed,local]
libapt-pkg5.0/now 1.8.2 amd64 [installed,local]
libattr1/now 1:2.4.48-4 amd64 [installed,local]
libaudit-common/now 1:2.8.4-3 all [installed,local]
libaudit1/now 1:2.8.4-3 amd64 [installed,local]
libavahi-client3/now 0.7-4+b1 amd64 [installed,local]
libavahi-common-data/now 0.7-4+b1 amd64 [installed,local]
libavahi-common3/now 0.7-4+b1 amd64 [installed,local]
libavcodec58/now 7:4.1.4-1~deb10u1 amd64 [installed,local]
libavformat58/now 7:4.1.4-1~deb10u1 amd64 [installed,local]
libavutil56/now 7:4.1.4-1~deb10u1 amd64 [installed,local]
libblkid1/now 2.33.1-0.1 amd64 [installed,local]
libbluray2/now 1:1.1.0-1 amd64 [installed,local]
libbsd0/now 0.9.1-2 amd64 [installed,local]
libbz2-1.0/now 1.0.6-9.2~deb10u1 amd64 [installed,local]
libc-bin/now 2.28-10 amd64 [installed,local]
libc6/now 2.28-10 amd64 [installed,local]
libcairo2/now 1.16.0-4 amd64 [installed,local]
libcap-ng0/now 0.7.9-2 amd64 [installed,local]
libchromaprint-tools/now 1.4.3-3 amd64 [installed,local]
libchromaprint1/now 1.4.3-3 amd64 [installed,local]
libcodec2-0.8.1/now 0.8.1-2 amd64 [installed,local]
libcom-err2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libcroco3/now 0.6.12-3 amd64 [installed,local]
libcrystalhd3/now 1:0.0~git20110715.fdd2f19-13 amd64 [installed,local]
libcups2/now 2.2.10-6+deb10u2 amd64 [installed,local]
libdatrie1/now 0.2.12-2 amd64 [installed,local]
libdb5.3/now 5.3.28+dfsg1-0.5 amd64 [installed,local]
libdbus-1-3/now 1.12.16-1 amd64 [installed,local]
libdebconfclient0/now 0.249 amd64 [installed,local]
libdiscid0/now 0.6.2-3 amd64 [installed,local]
libdouble-conversion1/now 3.1.0-3 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.97-1 amd64 [installed,local]
libdrm-common/now 2.4.97-1 all [installed,local]
libdrm-intel1/now 2.4.97-1 amd64 [installed,local]
libdrm-nouveau2/now 2.4.97-1 amd64 [installed,local]
libdrm-radeon1/now 2.4.97-1 amd64 [installed,local]
libdrm2/now 2.4.97-1 amd64 [installed,local]
libedit2/now 3.1-20181209-1 amd64 [installed,local]
libegl-mesa0/now 18.3.6-2+deb10u1 amd64 [installed,local]
libegl1/now 1.1.0-1 amd64 [installed,local]
libelf1/now 0.176-1.1 amd64 [installed,local]
libevdev2/now 1.6.0+dfsg-1 amd64 [installed,local]
libexpat1/now 2.2.6-2+deb10u1 amd64 [installed,local]
libext2fs2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libfdisk1/now 2.33.1-0.1 amd64 [installed,local]
libffi6/now 3.2.1-9 amd64 [installed,local]
libfontconfig1/now 2.13.1-2 amd64 [installed,local]
libfontenc1/now 1:1.1.3-1+b2 amd64 [installed,local]
libfreetype6/now 2.9.1-3+deb10u1 amd64 [installed,local]
libfribidi0/now 1.0.5-3.1+deb10u1 amd64 [installed,local]
libgbm1/now 18.3.6-2+deb10u1 amd64 [installed,local]
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
libgme0/now 0.6.2-1 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-4 amd64 [installed,local]
libgnutls30/now 3.6.7-4+deb10u2 amd64 [installed,local]
libgomp1/now 8.3.0-6 amd64 [installed,local]
libgpg-error0/now 1.35-1 amd64 [installed,local]
libgraphite2-3/now 1.3.13-7 amd64 [installed,local]
libgsm1/now 1.0.18-2 amd64 [installed,local]
libgssapi-krb5-2/now 1.17-3 amd64 [installed,local]
libgudev-1.0-0/now 232-2 amd64 [installed,local]
libharfbuzz0b/now 2.3.1-1 amd64 [installed,local]
libhogweed4/now 3.4.1-1 amd64 [installed,local]
libice6/now 2:1.0.9-2 amd64 [installed,local]
libicu63/now 63.1-6 amd64 [installed,local]
libid3tag0/now 0.15.1b-14 amd64 [installed,local]
libidn2-0/now 2.0.5-1+deb10u1 amd64 [installed,local]
libimlib2/now 1.5.1-1 amd64 [installed,local]
libinput-bin/now 1.12.6-2 amd64 [installed,local]
libinput10/now 1.12.6-2 amd64 [installed,local]
libjbig0/now 2.1-3.1+b2 amd64 [installed,local]
libjpeg62-turbo/now 1:1.5.2-2+b1 amd64 [installed,local]
libk5crypto3/now 1.17-3 amd64 [installed,local]
libkeyutils1/now 1.6-6 amd64 [installed,local]
libkrb5-3/now 1.17-3 amd64 [installed,local]
libkrb5support0/now 1.17-3 amd64 [installed,local]
libllvm7/now 1:7.0.1-8 amd64 [installed,local]
liblz4-1/now 1.8.3-1 amd64 [installed,local]
liblzma5/now 5.2.4-1 amd64 [installed,local]
libmount1/now 2.33.1-0.1 amd64 [installed,local]
libmp3lame0/now 3.100-2+b1 amd64 [installed,local]
libmpdec2/now 2.4.2-2 amd64 [installed,local]
libmpg123-0/now 1.25.10-2 amd64 [installed,local]
libmtdev1/now 1.1.5-1+b1 amd64 [installed,local]
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
libnuma1/now 2.0.12-1 amd64 [installed,local]
libobrender32v5/now 3.6.1-8 amd64 [installed,local]
libobt2v5/now 3.6.1-8 amd64 [installed,local]
libogg0/now 1.3.2-1+b1 amd64 [installed,local]
libopenjp2-7/now 2.3.0-2+deb10u1 amd64 [installed,local]
libopenmpt0/now 0.4.3-1 amd64 [installed,local]
libopus0/now 1.3-1 amd64 [installed,local]
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
libpcre2-16-0/now 10.32-5 amd64 [installed,local]
libpcre3/now 2:8.39-12 amd64 [installed,local]
libpixman-1-0/now 0.36.0-1 amd64 [installed,local]
libpng16-16/now 1.6.36-6 amd64 [installed,local]
libprocps7/now 2:3.3.15-2 amd64 [installed,local]
libpython3-stdlib/now 3.7.3-1 amd64 [installed,local]
libpython3.7-minimal/now 3.7.3-2+deb10u1 amd64 [installed,local]
libpython3.7-stdlib/now 3.7.3-2+deb10u1 amd64 [installed,local]
libpython3.7/now 3.7.3-2+deb10u1 amd64 [installed,local]
libqt5core5a/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5dbus5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5designer5/now 5.11.3-4 amd64 [installed,local]
libqt5gui5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5help5/now 5.11.3-4 amd64 [installed,local]
libqt5network5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5printsupport5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5sql5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5test5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5widgets5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libqt5xml5/now 5.11.3+dfsg1-1+deb10u3 amd64 [installed,local]
libreadline7/now 7.0-5 amd64 [installed,local]
librsvg2-2/now 2.44.10-2.1 amd64 [installed,local]
libseccomp2/now 2.3.3-4 amd64 [installed,local]
libselinux1/now 2.8-1+b1 amd64 [installed,local]
libsemanage-common/now 2.8-2 all [installed,local]
libsemanage1/now 2.8-2 amd64 [installed,local]
libsensors-config/now 1:3.5.0-3 all [installed,local]
libsensors5/now 1:3.5.0-3 amd64 [installed,local]
libsepol1/now 2.8-1 amd64 [installed,local]
libshine3/now 3.1.1-2 amd64 [installed,local]
libsm6/now 2:1.2.3-1 amd64 [installed,local]
libsmartcols1/now 2.33.1-0.1 amd64 [installed,local]
libsnappy1v5/now 1.1.7-1 amd64 [installed,local]
libsoxr0/now 0.1.2-3 amd64 [installed,local]
libspeex1/now 1.2~rc1.2-1+b2 amd64 [installed,local]
libsqlite3-0/now 3.27.2-3 amd64 [installed,local]
libss2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libssh-gcrypt-4/now 0.8.7-1 amd64 [installed,local]
libssl1.1/now 1.1.1d-0+deb10u2 amd64 [installed,local]
libstartup-notification0/now 0.12-6 amd64 [installed,local]
libstdc++6/now 8.3.0-6 amd64 [installed,local]
libswresample3/now 7:4.1.4-1~deb10u1 amd64 [installed,local]
libsystemd0/now 241-7~deb10u3 amd64 [installed,local]
libtasn1-6/now 4.13-3 amd64 [installed,local]
libthai-data/now 0.1.28-2 all [installed,local]
libthai0/now 0.1.28-2 amd64 [installed,local]
libtheora0/now 1.1.1+dfsg.1-15 amd64 [installed,local]
libtiff5/now 4.1.0+git191117-2~deb10u1 amd64 [installed,local]
libtinfo6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libtwolame0/now 0.3.13-4 amd64 [installed,local]
libudev1/now 241-7~deb10u3 amd64 [installed,local]
libunistring2/now 0.9.10-1 amd64 [installed,local]
libunwind8/now 1.2.1-9 amd64 [installed,local]
libuuid1/now 2.33.1-0.1 amd64 [installed,local]
libva-drm2/now 2.4.0-1 amd64 [installed,local]
libva-x11-2/now 2.4.0-1 amd64 [installed,local]
libva2/now 2.4.0-1 amd64 [installed,local]
libvdpau1/now 1.1.1-10 amd64 [installed,local]
libvorbis0a/now 1.3.6-2 amd64 [installed,local]
libvorbisenc2/now 1.3.6-2 amd64 [installed,local]
libvorbisfile3/now 1.3.6-2 amd64 [installed,local]
libvpx5/now 1.7.0-3+deb10u1 amd64 [installed,local]
libwacom-common/now 0.32-1 all [installed,local]
libwacom2/now 0.32-1 amd64 [installed,local]
libwavpack1/now 5.1.0-6 amd64 [installed,local]
libwayland-client0/now 1.16.0-1 amd64 [installed,local]
libwayland-server0/now 1.16.0-1 amd64 [installed,local]
libwebp6/now 0.6.1-2 amd64 [installed,local]
libwebpmux3/now 0.6.1-2 amd64 [installed,local]
libx11-6/now 2:1.6.7-1 amd64 [installed,local]
libx11-data/now 2:1.6.7-1 all [installed,local]
libx11-xcb1/now 2:1.6.7-1 amd64 [installed,local]
libx264-155/now 2:0.155.2917+git0a84d98-2 amd64 [installed,local]
libx265-165/now 2.9-4 amd64 [installed,local]
libxau6/now 1:1.0.8-1+b2 amd64 [installed,local]
libxaw7/now 2:1.0.13-1+b2 amd64 [installed,local]
libxcb-dri2-0/now 1.13.1-2 amd64 [installed,local]
libxcb-dri3-0/now 1.13.1-2 amd64 [installed,local]
libxcb-glx0/now 1.13.1-2 amd64 [installed,local]
libxcb-icccm4/now 0.4.1-1.1 amd64 [installed,local]
libxcb-image0/now 0.4.0-1+b2 amd64 [installed,local]
libxcb-keysyms1/now 0.4.0-1+b2 amd64 [installed,local]
libxcb-present0/now 1.13.1-2 amd64 [installed,local]
libxcb-randr0/now 1.13.1-2 amd64 [installed,local]
libxcb-render-util0/now 0.3.9-1+b1 amd64 [installed,local]
libxcb-render0/now 1.13.1-2 amd64 [installed,local]
libxcb-shape0/now 1.13.1-2 amd64 [installed,local]
libxcb-shm0/now 1.13.1-2 amd64 [installed,local]
libxcb-sync1/now 1.13.1-2 amd64 [installed,local]
libxcb-util0/now 0.3.8-3+b2 amd64 [installed,local]
libxcb-xfixes0/now 1.13.1-2 amd64 [installed,local]
libxcb-xinerama0/now 1.13.1-2 amd64 [installed,local]
libxcb-xkb1/now 1.13.1-2 amd64 [installed,local]
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
libxkbcommon-x11-0/now 0.8.2-1 amd64 [installed,local]
libxkbcommon0/now 0.8.2-1 amd64 [installed,local]
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
libxvidcore4/now 2:1.3.5-1 amd64 [installed,local]
libxxf86dga1/now 2:1.1.4-1+b3 amd64 [installed,local]
libxxf86vm1/now 1:1.1.4-1+b2 amd64 [installed,local]
libzstd1/now 1.3.8+dfsg-3 amd64 [installed,local]
libzvbi-common/now 0.2.35-16 all [installed,local]
libzvbi0/now 0.2.35-16 amd64 [installed,local]
login/now 1:4.5-1.1 amd64 [installed,local]
lsb-base/now 10.2019051400 all [installed,local]
mawk/now 1.3.3-17+b3 amd64 [installed,local]
mime-support/now 3.62 all [installed,local]
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
picard/now 2.1.2-1+deb10u1 amd64 [installed,local]
procps/now 2:3.3.15-2 amd64 [installed,local]
python3-libdiscid/now 1.0-3+b1 amd64 [installed,local]
python3-minimal/now 3.7.3-1 amd64 [installed,local]
python3-mutagen/now 1.40.0-2 all [installed,local]
python3-pyqt5/now 5.11.3+dfsg-1+b3 amd64 [installed,local]
python3-sip/now 4.19.14+dfsg-2 amd64 [installed,local]
python3.7-minimal/now 3.7.3-2+deb10u1 amd64 [installed,local]
python3.7/now 3.7.3-2+deb10u1 amd64 [installed,local]
python3/now 3.7.3-1 amd64 [installed,local]
readline-common/now 7.0-5 all [installed,local]
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

</main>