## Test Results docker-xteve

## Test's: 6/6 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.0 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Screenshot ubuntu-18-v1.0.0 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.0 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.0 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-xteve:alpine-3.10-v1.0.0

[![alpine-3.10-v1.0.0](alpine-3.10-v1.0.0.png =600x*)](alpine-3.10-v1.0.0.png)

### Build Version: alpine-3.10-v1.0.0

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
drwxr-xr-x 1 user user 4096 Mar 24 16:12 /app
drwxr-xr-x 4 user user 4096 Mar 24 16:16 /config
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
apk: unrecognized option: |
apk: unrecognized option: o
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
sdl2-2.0.10-r0
libxau-1.0.9-r0
libbsd-0.9.1-r0
libxdmcp-1.1.3-r0
libxcb-1.13.1-r0
libx11-1.6.8-r1
alsa-lib-1.1.9-r0
expat-2.2.8-r0
libbz2-1.0.6-r7
libpng-1.6.37-r1
freetype-2.10.0-r0
libuuid-2.33.2-r0
fontconfig-2.13.1-r0
fribidi-1.0.5-r2
libass-0.14.0-r0
gmp-6.1.2-r1
nettle-3.4.1-r1
libffi-3.2.1-r6
p11-kit-0.23.16.1-r0
libtasn1-4.14-r0
libunistring-0.9.10-r0
gnutls-3.6.8-r0
lame-3.100-r0
opus-1.3.1-r0
libogg-1.3.3-r2
libtheora-1.1.1-r14
libjpeg-turbo-2.0.4-r0
v4l-utils-libs-1.16.6-r0
libxext-1.3.4-r0
libxfixes-5.0.3-r2
libpciaccess-0.14-r0
libdrm-2.4.98-r0
wayland-libs-client-1.17.0-r0
libva-2.4.1-r0
libvdpau-1.2-r0
libvorbis-1.3.6-r2
libvpx-1.8.0-r0
x264-libs-20180304-r1
libgcc-8.3.0-r0
libstdc++-8.3.0-r0
x265-libs-3.0-r0
xvidcore-1.3.4-r1
ffmpeg-libs-4.1.4-r0
ffmpeg-4.1.4-r0
encodings-1.0.4-r1
libfontenc-1.1.4-r0
mkfontscale-1.2.1-r1
ttf-dejavu-2.37-r1
live-media-2020.03.06-r0
libraw1394-2.1.2-r1
libavc1394-0.5.4-r2
libbluray-1.1.2-r0
libcddb-1.3.2-r3
libusb-1.0.22-r0
libdc1394-2.2.6-r0
libdvbpsi-1.3.2-r0
libdvdcss-1.4.2-r0
libdvdread-6.0.1-r0
libdvdnav-6.0.0-r0
libgpg-error-1.36-r2
libgcrypt-1.8.5-r0
libcom_err-1.45.5-r0
lmdb-0.9.24-r0
talloc-2.2.0-r0
tdb-libs-1.3.18-r0
tevent-0.9.39-r0
ldb-1.5.6-r0
popt-1.16-r7
libwbclient-4.10.12-r0
samba-client-libs-4.10.12-r0
samba-common-libs-4.10.12-r0
samba-heimdal-libs-4.10.12-r0
libcap-2.27-r0
jansson-2.12-r0
db-5.3.28-r1
libsasl-2.1.27-r4
libldap-2.4.48-r0
samba-libs-4.10.12-r0
libsmbclient-4.10.12-r0
dbus-libs-1.12.16-r0
vlc-libs-3.0.8-r1
vlc-plugins-access-3.0.8-r1
speex-1.2.0-r0
libshout-2.4.3-r1
vlc-plugins-access_output-3.0.8-r1
libmad-0.15.1b-r9
speexdsp-1.2.0-r0
vlc-plugins-audio_filter-3.0.8-r1
vlc-plugins-audio_mixer-3.0.8-r1
vlc-plugins-audio_output-3.0.8-r1
flac-1.3.2-r2
a52dec-0.7.4-r7
faad2-libs-2.9.0-r0
libmpeg2-0.5.1-r8
vlc-plugins-codec-3.0.8-r1
vlc-plugins-control-3.0.8-r1
libebml-1.3.9-r0
libmatroska-1.5.2-r0
vlc-plugins-demux-3.0.8-r1
vlc-plugins-gui-3.0.8-r1
lua5.2-libs-5.2.4-r7
vlc-plugins-lua-3.0.8-r1
taglib-1.11.1-r2
vlc-plugins-meta_engine-3.0.8-r1
libxml2-2.9.9-r3
vlc-plugins-misc-3.0.8-r1
vlc-plugins-mux-3.0.8-r1
vlc-plugins-notify-3.0.8-r1
vlc-plugins-packetizer-3.0.8-r1
libintl-0.19.8.1-r4
avahi-libs-0.7-r2
eudev-libs-3.2.8-r0
vlc-plugins-services_discovery-3.0.8-r1
vlc-plugins-stream_filter-3.0.8-r1
vlc-plugins-stream_out-3.0.8-r1
libblkid-2.33.2-r0
libmount-2.33.2-r0
pcre-8.43-r0
glib-2.60.4-r0
graphite2-1.3.13-r1
harfbuzz-2.5.1-r0
vlc-plugins-text_renderer-3.0.8-r1
vlc-plugins-video_chroma-3.0.8-r1
vlc-plugins-video_filter-3.0.8-r1
vlc-plugins-video_output-3.0.8-r1
vlc-plugins-visualization-3.0.8-r1
vlc-plugins-3.0.8-r1
libice-1.0.9-r3
libsm-1.2.3-r0
libxt-1.1.5-r2
libxmu-1.1.3-r0
xset-1.2.4-r0
xprop-1.2.4-r0
xdg-utils-1.1.3-r0
mesa-19.0.6-r0
wayland-libs-server-1.17.0-r0
mesa-gbm-19.0.6-r0
mesa-glapi-19.0.6-r0
libxshmfence-1.3-r0
mesa-egl-19.0.6-r0
libxdamage-1.1.5-r0
libxxf86vm-1.1.4-r2
mesa-gl-19.0.6-r0
libxinerama-1.1.4-r1
libxpm-3.5.12-r0
libxrender-0.9.10-r3
pixman-0.38.4-r0
cairo-1.16.0-r2
shared-mime-info-1.12-r0
tiff-4.0.10-r3
gdk-pixbuf-2.38.1-r0
hicolor-icon-theme-0.17-r0
gtk-update-icon-cache-2.24.32-r1
libxcomposite-0.4.5-r0
libxcursor-1.2.0-r0
libxi-1.7.9-r2
libxrandr-1.5.2-r0
atk-2.32.0-r0
libxtst-1.2.3-r3
at-spi2-core-2.32.1-r0
at-spi2-atk-2.32.0-r0
cairo-gobject-1.16.0-r2
cups-libs-2.2.12-r0
libepoxy-1.5.3-r0
libxft-2.3.3-r0
pango-1.42.4-r2
wayland-libs-cursor-1.17.0-r0
wayland-libs-egl-1.17.0-r0
libxkbcommon-0.8.4-r1
gtk+3.0-3.24.8-r0
libnotify-0.7.8-r0
libcroco-0.6.13-r1
librsvg-2.40.21-r0
xcb-util-keysyms-0.4.0-r1
vlc-xorg-3.0.8-r1
vlc-3.0.8-r1

```

</p>
</details>
</section>

<section markdown="1">
## christopher102994/docker-xteve:ubuntu-18-v1.0.0

[![ubuntu-18-v1.0.0](ubuntu-18-v1.0.0.png =600x*)](ubuntu-18-v1.0.0.png)

### Build Version: ubuntu-18-v1.0.0

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
NVIDIA_VISIBLE_DEVICES=all
PGID=900
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 24 16:14 /app
drwxr-xr-x 4 user user 4096 Mar 24 16:18 /config
drwxr-xr-x 1 user user 4096 Mar 23 22:42 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apt-get
[services.d] done.
Starting xteve . . .

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
liba52-0.7.4/now 0.7.4-19 amd64 [installed,local]
libaa1/now 1.4p5-44build2 amd64 [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12 amd64 [installed,local]
libarchive13/now 3.2.2-3.1ubuntu0.6 amd64 [installed,local]
libaribb24-0/now 1.0.3-1 amd64 [installed,local]
libasound2/now 1.1.3-5ubuntu0.4 amd64 [installed,local]
libasound2-data/now 1.1.3-5ubuntu0.4 all [installed,local]
libass9/now 1:0.14.0-1 amd64 [installed,local]
libasyncns0/now 0.8-6 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libavahi-client3/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libavahi-common-data/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libavahi-common3/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libavc1394-0/now 0.5.4-4build1 amd64 [installed,local]
libavcodec57/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libavformat57/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libavutil55/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libbasicusageenvironment1/now 2018.02.18-1 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libbluray2/now 1:1.0.2-3 amd64 [installed,local]
libbsd0/now 0.8.7-1ubuntu0.1 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1 amd64 [installed,local]
libc6/now 2.27-3ubuntu1 amd64 [installed,local]
libcaca0/now 0.99.beta19-2ubuntu0.18.04.1 amd64 [installed,local]
libcairo2/now 1.15.10-2ubuntu0.1 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcddb2/now 1.3.2-5fakesync1 amd64 [installed,local]
libchromaprint1/now 1.4.3-1 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libcroco3/now 0.6.12-2 amd64 [installed,local]
libcrystalhd3/now 1:0.0~git20110715.fdd2f19-12 amd64 [installed,local]
libdatrie1/now 0.2.10-7 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdbus-1-3/now 1.12.2-1ubuntu1.1 amd64 [installed,local]
libdc1394-22/now 2.2.5-1 amd64 [installed,local]
libdca0/now 0.0.5-10 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libdouble-conversion1/now 2.0.1-4ubuntu1 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-common/now 2.4.99-1ubuntu1~18.04.2 all [installed,local]
libdrm-intel1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-nouveau2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-radeon1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdvbpsi10/now 1.3.2-1 amd64 [installed,local]
libdvdnav4/now 6.0.0-1 amd64 [installed,local]
libdvdread4/now 6.0.0-1 amd64 [installed,local]
libebml4v5/now 1.3.5-2ubuntu0.1 amd64 [installed,local]
libedit2/now 3.1-20170329-1 amd64 [installed,local]
libegl-mesa0/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libegl1/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libelf1/now 0.170-0.4ubuntu0.1 amd64 [installed,local]
libevdev2/now 1.5.8+dfsg-1 amd64 [installed,local]
libexpat1/now 2.2.5-3ubuntu0.2 amd64 [installed,local]
libext2fs2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libfaad2/now 2.8.8-1 amd64 [installed,local]
libfdisk1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libffi6/now 3.2.1-8 amd64 [installed,local]
libflac8/now 1.3.2-1 amd64 [installed,local]
libfontconfig1/now 2.12.6-0ubuntu2 amd64 [installed,local]
libfreetype6/now 2.8.1-2ubuntu2 amd64 [installed,local]
libfribidi0/now 0.19.7-2 amd64 [installed,local]
libgbm1/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libgcc1/now 1:8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libgcrypt20/now 1.8.1-4ubuntu1.2 amd64 [installed,local]
libgdk-pixbuf2.0-0/now 2.36.11-2 amd64 [installed,local]
libgdk-pixbuf2.0-common/now 2.36.11-2 all [installed,local]
libgl1/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libgl1-mesa-dri/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libglapi-mesa/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libgles2/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libglib2.0-0/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libglvnd0/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libglx-mesa0/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libglx0/now 1.0.0-2ubuntu2.3 amd64 [installed,local]
libgme0/now 0.6.2-1 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-2 amd64 [installed,local]
libgnutls30/now 3.5.18-1ubuntu1.3 amd64 [installed,local]
libgomp1/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libgpg-error0/now 1.27-6 amd64 [installed,local]
libgpm2/now 1.20.7-5 amd64 [installed,local]
libgraphite2-3/now 1.3.11-2 amd64 [installed,local]
libgroupsock8/now 2018.02.18-1 amd64 [installed,local]
libgsm1/now 1.0.13-4build1 amd64 [installed,local]
libgssapi-krb5-2/now 1.16-2ubuntu0.1 amd64 [installed,local]
libgudev-1.0-0/now 1:232-2 amd64 [installed,local]
libharfbuzz0b/now 1.7.2-1ubuntu1 amd64 [installed,local]
libhogweed4/now 3.4-1 amd64 [installed,local]
libice6/now 2:1.0.9-2 amd64 [installed,local]
libicu60/now 60.2-3ubuntu3.1 amd64 [installed,local]
libidn11/now 1.33-2.1ubuntu1.2 amd64 [installed,local]
libidn2-0/now 2.0.4-1.1ubuntu0.2 amd64 [installed,local]
libinput-bin/now 1.10.4-1ubuntu0.18.04.1 amd64 [installed,local]
libinput10/now 1.10.4-1ubuntu0.18.04.1 amd64 [installed,local]
libjbig0/now 2.1-3.1build1 amd64 [installed,local]
libjpeg-turbo8/now 1.5.2-0ubuntu5.18.04.3 amd64 [installed,local]
libjpeg8/now 8c-2ubuntu8 amd64 [installed,local]
libk5crypto3/now 1.16-2ubuntu0.1 amd64 [installed,local]
libkate1/now 0.4.1-7build1 amd64 [installed,local]
libkeyutils1/now 1.5.9-9.2ubuntu2 amd64 [installed,local]
libkrb5-3/now 1.16-2ubuntu0.1 amd64 [installed,local]
libkrb5support0/now 1.16-2ubuntu0.1 amd64 [installed,local]
liblirc-client0/now 0.10.0-2 amd64 [installed,local]
liblivemedia62/now 2018.02.18-1 amd64 [installed,local]
libllvm9/now 1:9-2~ubuntu18.04.2 amd64 [installed,local]
liblua5.2-0/now 5.2.4-1.1build1 amd64 [installed,local]
liblz4-1/now 0.0~r131-2ubuntu3 amd64 [installed,local]
liblzma5/now 5.2.2-1.3 amd64 [installed,local]
liblzo2-2/now 2.08-1.2 amd64 [installed,local]
libmad0/now 0.15.1b-9ubuntu18.04.1 amd64 [installed,local]
libmatroska6v5/now 1.4.8-1.1 amd64 [installed,local]
libmicrodns0/now 0.0.8-1 amd64 [installed,local]
libmount1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libmp3lame0/now 3.100-2 amd64 [installed,local]
libmpcdec6/now 2:0.1~r495-1 amd64 [installed,local]
libmpeg2-4/now 0.5.1-8 amd64 [installed,local]
libmpg123-0/now 1.25.10-1 amd64 [installed,local]
libmtdev1/now 1.1.5-1ubuntu3 amd64 [installed,local]
libmtp-common/now 1.1.13-1 all [installed,local]
libmtp9/now 1.1.13-1 amd64 [installed,local]
libncurses5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libncursesw5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libnettle6/now 3.4-1 amd64 [installed,local]
libnfs11/now 2.0.0-1~exp1 amd64 [installed,local]
libnuma1/now 2.0.11-2.1ubuntu0.1 amd64 [installed,local]
libogg0/now 1.3.2-1 amd64 [installed,local]
libopenjp2-7/now 2.3.0-2build0.18.04.1 amd64 [installed,local]
libopenmpt-modplug1/now 0.3.6-1 amd64 [installed,local]
libopenmpt0/now 0.3.6-1 amd64 [installed,local]
libopus0/now 1.1.2-1ubuntu1 amd64 [installed,local]
libp11-kit0/now 0.23.9-2 amd64 [installed,local]
libpam-modules/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-modules-bin/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-runtime/now 1.1.8-3.6ubuntu2.18.04.1 all [installed,local]
libpam0g/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpango-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpangocairo-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpangoft2-1.0-0/now 1.40.14-1ubuntu0.1 amd64 [installed,local]
libpciaccess0/now 0.14-1 amd64 [installed,local]
libpcre3/now 2:8.39-9 amd64 [installed,local]
libpixman-1-0/now 0.34.0-2 amd64 [installed,local]
libplacebo4/now 0.4.0-2 amd64 [installed,local]
libpng16-16/now 1.6.34-1ubuntu0.18.04.2 amd64 [installed,local]
libpostproc54/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libprocps6/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
libprotobuf-lite10/now 3.0.0-9.1ubuntu1 amd64 [installed,local]
libpulse0/now 1:11.1-1ubuntu7.4 amd64 [installed,local]
libqt5core5a/now 5.9.5+dfsg-0ubuntu2.5 amd64 [installed,local]
libqt5dbus5/now 5.9.5+dfsg-0ubuntu2.5 amd64 [installed,local]
libqt5gui5/now 5.9.5+dfsg-0ubuntu2.5 amd64 [installed,local]
libqt5network5/now 5.9.5+dfsg-0ubuntu2.5 amd64 [installed,local]
libqt5svg5/now 5.9.5-0ubuntu1 amd64 [installed,local]
libqt5widgets5/now 5.9.5+dfsg-0ubuntu2.5 amd64 [installed,local]
libqt5x11extras5/now 5.9.5-0ubuntu1 amd64 [installed,local]
libraw1394-11/now 2.1.2-1 amd64 [installed,local]
libresid-builder0c2a/now 2.1.1-15ubuntu1 amd64 [installed,local]
librsvg2-2/now 2.40.20-2 amd64 [installed,local]
libsamplerate0/now 0.1.9-1 amd64 [installed,local]
libsdl-image1.2/now 1.2.12-8ubuntu0.1 amd64 [installed,local]
libsdl1.2debian/now 1.2.15+dfsg2-0.1ubuntu0.1 amd64 [installed,local]
libseccomp2/now 2.4.1-0ubuntu0.18.04.2 amd64 [installed,local]
libsecret-1-0/now 0.18.6-1 amd64 [installed,local]
libsecret-common/now 0.18.6-1 all [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsensors4/now 1:3.4.0-4 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libshine3/now 3.1.1-1 amd64 [installed,local]
libshout3/now 2.4.1-2build1 amd64 [installed,local]
libsidplay2/now 2.1.1-15ubuntu1 amd64 [installed,local]
libslang2/now 2.3.1a-3ubuntu1 amd64 [installed,local]
libsm6/now 2:1.2.2-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libsnappy1v5/now 1.1.7-1 amd64 [installed,local]
libsndfile1/now 1.0.28-4ubuntu0.18.04.1 amd64 [installed,local]
libsndio6.1/now 1.1.0-3 amd64 [installed,local]
libsoxr0/now 0.1.2-3 amd64 [installed,local]
libspeex1/now 1.2~rc1.2-1ubuntu2 amd64 [installed,local]
libspeexdsp1/now 1.2~rc1.2-1ubuntu2 amd64 [installed,local]
libss2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libssh-gcrypt-4/now 0.8.0~20170825.94fa1e38-1ubuntu0.5 amd64 [installed,local]
libssh2-1/now 1.8.0-1 amd64 [installed,local]
libssl1.1/now 1.1.1-1ubuntu2.1~18.04.5 amd64 [installed,local]
libstdc++6/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libswresample2/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libswscale4/now 7:3.4.6-0ubuntu0.18.04.1 amd64 [installed,local]
libsystemd0/now 237-3ubuntu10.39 amd64 [installed,local]
libtag1v5/now 1.11.1+dfsg.1-0.2build2 amd64 [installed,local]
libtag1v5-vanilla/now 1.11.1+dfsg.1-0.2build2 amd64 [installed,local]
libtasn1-6/now 4.13-2 amd64 [installed,local]
libthai-data/now 0.1.27-2 all [installed,local]
libthai0/now 0.1.27-2 amd64 [installed,local]
libtheora0/now 1.1.1+dfsg.1-14 amd64 [installed,local]
libtiff5/now 4.0.9-5ubuntu0.3 amd64 [installed,local]
libtinfo5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libtwolame0/now 0.3.13-3 amd64 [installed,local]
libudev1/now 237-3ubuntu10.39 amd64 [installed,local]
libunistring2/now 0.9.9-0ubuntu2 amd64 [installed,local]
libupnp6/now 1:1.6.24-4 amd64 [installed,local]
libusageenvironment3/now 2018.02.18-1 amd64 [installed,local]
libusb-1.0-0/now 2:1.0.21-2 amd64 [installed,local]
libuuid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libva-drm2/now 2.1.0-3 amd64 [installed,local]
libva-wayland2/now 2.1.0-3 amd64 [installed,local]
libva-x11-2/now 2.1.0-3 amd64 [installed,local]
libva2/now 2.1.0-3 amd64 [installed,local]
libvdpau1/now 1.1.1-3ubuntu1 amd64 [installed,local]
libvlc-bin/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
libvlc5/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
libvlccore9/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
libvorbis0a/now 1.3.5-4.2 amd64 [installed,local]
libvorbisenc2/now 1.3.5-4.2 amd64 [installed,local]
libvorbisfile3/now 1.3.5-4.2 amd64 [installed,local]
libvpx5/now 1.7.0-3ubuntu0.18.04.1 amd64 [installed,local]
libvulkan1/now 1.1.70+dfsg1-1ubuntu0.18.04.1 amd64 [installed,local]
libwacom-common/now 0.29-1 all [installed,local]
libwacom2/now 0.29-1 amd64 [installed,local]
libwavpack1/now 5.1.0-2ubuntu1.4 amd64 [installed,local]
libwayland-client0/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
libwayland-egl1/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
libwayland-egl1-mesa/now 19.2.8-0ubuntu0~18.04.3 amd64 [installed,local]
libwayland-server0/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
libwebp6/now 0.6.1-2 amd64 [installed,local]
libwebpmux3/now 0.6.1-2 amd64 [installed,local]
libwrap0/now 7.6.q-27 amd64 [installed,local]
libx11-6/now 2:1.6.4-3ubuntu0.2 amd64 [installed,local]
libx11-data/now 2:1.6.4-3ubuntu0.2 all [installed,local]
libx11-xcb1/now 2:1.6.4-3ubuntu0.2 amd64 [installed,local]
libx264-152/now 2:0.152.2854+gite9a5903-2 amd64 [installed,local]
libx265-146/now 2.6-3 amd64 [installed,local]
libxau6/now 1:1.0.8-1 amd64 [installed,local]
libxcb-dri2-0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-dri3-0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-glx0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-icccm4/now 0.4.1-1ubuntu1 amd64 [installed,local]
libxcb-image0/now 0.4.0-1build1 amd64 [installed,local]
libxcb-keysyms1/now 0.4.0-1 amd64 [installed,local]
libxcb-present0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-randr0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-render-util0/now 0.3.9-1 amd64 [installed,local]
libxcb-render0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-shape0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-shm0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-sync1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-util1/now 0.4.0-0ubuntu3 amd64 [installed,local]
libxcb-xfixes0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-xinerama0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-xkb1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb-xv0/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxcb1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxdamage1/now 1:1.1.4-3 amd64 [installed,local]
libxdmcp6/now 1:1.1.2-3 amd64 [installed,local]
libxext6/now 2:1.3.3-1 amd64 [installed,local]
libxfixes3/now 1:5.0.3-1 amd64 [installed,local]
libxi6/now 2:1.7.9-1 amd64 [installed,local]
libxkbcommon-x11-0/now 0.8.2-1~ubuntu18.04.1 amd64 [installed,local]
libxkbcommon0/now 0.8.2-1~ubuntu18.04.1 amd64 [installed,local]
libxml2/now 2.9.4+dfsg1-6.1ubuntu1.3 amd64 [installed,local]
libxrender1/now 1:0.9.10-1 amd64 [installed,local]
libxshmfence1/now 1.3-1 amd64 [installed,local]
libxvidcore4/now 2:1.3.5-1 amd64 [installed,local]
libxxf86vm1/now 1:1.1.4-1 amd64 [installed,local]
libzstd1/now 1.3.3+dfsg-2ubuntu1.1 amd64 [installed,local]
libzvbi-common/now 0.2.35-13 all [installed,local]
libzvbi0/now 0.2.35-13 amd64 [installed,local]
login/now 1:4.5-1ubuntu2 amd64 [installed,local]
lsb-base/now 9.20170808ubuntu1 all [installed,local]
mawk/now 1.3.3-17ubuntu3 amd64 [installed,local]
mount/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
multiarch-support/now 2.27-3ubuntu1 amd64 [installed,local]
ncurses-base/now 6.1-1ubuntu1.18.04 all [installed,local]
ncurses-bin/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
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
vlc/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
vlc-bin/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
vlc-data/now 3.0.8-0ubuntu18.04.1 all [installed,local]
vlc-plugin-base/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
vlc-plugin-qt/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
vlc-plugin-video-output/now 3.0.8-0ubuntu18.04.1 amd64 [installed,local]
x11-common/now 1:7.7+19ubuntu7.1 all [installed,local]
xkb-data/now 2.23.1-1ubuntu1.18.04.1 all [installed,local]
zlib1g/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]

```

</p>
</details>
</section>

</main>