## Test Results docker-toonamiaftermath

## Test's: 4/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.0 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Run shell check for: docker-toonamiaftermath | PASSED |

<main>

<section markdown="1">
 
## ShellCheck Results

<details><summary>Expand</summary><blockquote><p>

<details><summary>File: tools/scripts/push_readme_to_dockerhub.sh</summary><p>

```

In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 20:
				--write-out %{response_code} \
                                             ^-- SC1083: This { is literal. Check expression (missing ;/\n?) or quote it.
                                                           ^-- SC1083: This } is literal. Check expression (missing ;/\n?) or quote it.

For more information:
  https://www.shellcheck.net/wiki/SC1083 -- This { is literal. Check expressi...

```

</p></details>

<details><summary>File: tools/scripts/push_git_tag.sh</summary><p>

```

In /workspace/tools/scripts/push_git_tag.sh line 12:
		--data '{ "user" : { "email" : "${GIT_EMAIL}", "password" : "${GIT_TOKEN}" },
                       ^-- SC2016: Expressions don't expand in single quotes, use double quotes for that.

For more information:
  https://www.shellcheck.net/wiki/SC2016 -- Expressions don't expand in singl...

```

</p></details>

<details><summary>File: tools/scripts/load_env_files.sh</summary><p>

```

In /workspace/tools/scripts/load_env_files.sh line 15:
		export $(grep -Ev '^#' "${FILE}" | xargs)
                       ^-- SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: tools/scripts/docker_test.sh</summary><p>

```

In /workspace/tools/scripts/docker_test.sh line 9:
	TAG="$(cat "${ENV}" | grep "IMAGE_TAG=" | sed 's#.*=##')"
                   ^------^ SC2002: Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.

For more information:
  https://www.shellcheck.net/wiki/SC2002 -- Useless cat. Consider 'cmd < file...

```

</p></details>

<details><summary>File: tools/scripts/versioning.sh</summary><p>

```

In /workspace/tools/scripts/versioning.sh line 11:
if [ $? -eq 0 ]; then
     ^-- SC2181: Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.

For more information:
  https://www.shellcheck.net/wiki/SC2181 -- Check exit code directly with e.g...

```

</p></details>

</blockquote></p></details>
</section>
 

<section markdown="1">

## christopher102994/docker-toonamiaftermath:alpine-3.10-v1.0.0

[![alpine-3.10-v1.0.0](alpine-3.10-v1.0.0.png =600x*)](alpine-3.10-v1.0.0.png)

### Build Version: alpine-3.10-v1.0.0

### Logs

<details><summary>Expand</summary><p>

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
drwxr-xr-x 1 user user 4096 Apr  9 01:45 /app
drwxr-xr-x 4 user user 4096 Apr  9 01:48 /config
drwxr-xr-x 1 user user 4096 Apr  9 01:45 /defaults
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

</p></details>

### Package Info

<details><summary>Expand</summary><p>

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
gnutls-3.6.8-r1
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
gdbm-1.13-r1
sqlite-libs-3.28.0-r2
python3-3.7.5-r1
unzip-6.0-r6
zip-3.0-r7

```

</p></details>
</section>

</main>