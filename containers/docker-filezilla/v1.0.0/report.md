## Test Results docker-filezilla

## Test's: 4/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot alpine-3.10-v1.0.0 | PASSED |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Run shell check for: docker-filezilla | PASSED |

<main>

<section markdown="1">
 
## ShellCheck Results

<details><summary>Expand</summary><blockquote><p>

<details><summary>File: tools/build/build_container.sh</summary><p>

```

In /workspace/tools/build/build_container.sh line 77:
source "${SCRIPTS_DIR}"/load_env_files.sh $ENV
       ^-- SC1090: Can't follow non-constant source. Use a directive to specify location.


In /workspace/tools/build/build_container.sh line 80:
source "${SCRIPTS_DIR}"/versioning.sh || true
       ^----------------------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.

For more information:
  https://www.shellcheck.net/wiki/SC1090 -- Can't follow non-constant source....

```

</p></details>

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

## christopher102994/docker-filezilla:alpine-3.10-v1.0.0

[![alpine-3.10-v1.0.0](alpine-3.10-v1.0.0.png =600x*)](alpine-3.10-v1.0.0.png)

### Build Version: alpine-3.10-v1.0.0

### Logs

<details><summary>Expand</summary><p>

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
drwxr-xr-x 1 user user 4096 Mar 30 01:44 /app
drwxr-xr-x 4 user user 4096 Mar 30 01:45 /config
drwxr-xr-x 1 user user 4096 Mar 28 03:17 /defaults
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
[x11vnc]: Starting . . .
[openbox]: Starting . . .
[nginx]: Starting . . .

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
gmp-6.1.2-r1
nettle-3.4.1-r1
libstdc++-8.3.0-r0
libfilezilla-0.16.0-r0
hicolor-icon-theme-0.17-r0
gtk-update-icon-cache-2.24.32-r1
atk-2.32.0-r0
dbus-libs-1.12.16-r0
at-spi2-core-2.32.1-r0
at-spi2-atk-2.32.0-r0
cairo-gobject-1.16.0-r2
avahi-libs-0.7-r2
p11-kit-0.23.16.1-r0
libtasn1-4.14-r0
libunistring-0.9.10-r0
gnutls-3.6.8-r0
cups-libs-2.2.12-r0
libepoxy-1.5.3-r0
wayland-libs-client-1.17.0-r0
wayland-libs-cursor-1.17.0-r0
wayland-libs-egl-1.17.0-r0
libxkbcommon-0.8.4-r1
gtk+3.0-3.24.8-r0
libidn-1.35-r0
pugixml-1.9-r0
sqlite-libs-3.28.0-r2
wxgtk-base-3.0.4-r4
sdl-1.2.15-r12
wxgtk3-3.0.4-r4
filezilla-3.42.1-r0

```

</p></details>
</section>

</main>