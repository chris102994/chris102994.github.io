## Test Results docker-musicbrainzpicard

## Test's: 4/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot debian-11-v1.0.0 | PASSED |
| Test Init Scripts for: debian-11-v1.0.0 | PASSED |
| Test Service Scripts for: debian-11-v1.0.0 | PASSED |
| Run shell check for: docker-musicbrainzpicard | PASSED |

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

## christopher102994/docker-musicbrainzpicard:debian-11-v1.0.0

[![debian-11-v1.0.0](debian-11-v1.0.0.png =600x*)](debian-11-v1.0.0.png)

### Build Version: debian-11-v1.0.0

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
drwxr-xr-x 1 user user 4096 Mar 28 03:18 /app
drwxr-xr-x 4 user user 4096 Mar 28 03:20 /config
drwxr-xr-x 1 user user 4096 Mar 26 00:21 /defaults
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

</p></details>

### Package Info

<details><summary>Expand</summary><p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.118 all [installed,local]
adwaita-icon-theme/now 3.36.0-1 all [installed,local]
alsa-topology-conf/now 1.2.2-1 all [installed,local]
alsa-ucm-conf/now 1.2.2-1 all [installed,local]
apt/now 1.8.4 amd64 [installed,local]
at-spi2-core/now 2.36.0-2 amd64 [installed,local]
base-files/now 11 amd64 [installed,local]
base-passwd/now 3.5.47 amd64 [installed,local]
bash/now 5.0-6 amd64 [installed,local]
bsdutils/now 1:2.34-0.1 amd64 [installed,local]
bzip2/now 1.0.8-2 amd64 [installed,local]
ca-certificates/now 20190110 all [installed,local]
coreutils/now 8.30-3+b1 amd64 [installed,local]
cron/now 3.0pl1-136 amd64 [installed,local]
dash/now 0.5.10.2-6 amd64 [installed,local]
dbus-user-session/now 1.12.16-2 amd64 [installed,local]
dbus/now 1.12.16-2 amd64 [installed,local]
dconf-gsettings-backend/now 0.36.0-1 amd64 [installed,local]
dconf-service/now 0.36.0-1 amd64 [installed,local]
debconf/now 1.5.73 all [installed,local]
debian-archive-keyring/now 2019.1 all [installed,local]
debianutils/now 4.9.1 amd64 [installed,local]
diffutils/now 1:3.7-3 amd64 [installed,local]
dmsetup/now 2:1.02.167-1+b1 amd64 [installed,local]
dpkg/now 1.19.7 amd64 [installed,local]
e2fsprogs/now 1.45.5-2 amd64 [installed,local]
fdisk/now 2.34-0.1 amd64 [installed,local]
file/now 1:5.38-4 amd64 [installed,local]
findutils/now 4.7.0-1 amd64 [installed,local]
fontconfig-config/now 2.13.1-2 all [installed,local]
fontconfig/now 2.13.1-2+b1 amd64 [installed,local]
fonts-dejavu-core/now 2.37-1 all [installed,local]
gcc-10-base/now 10-20200324-1 amd64 [installed,local]
gcc-9-base/now 9.2.1-29 amd64 [installed,local]
glib-networking-common/now 2.64.0-1 all [installed,local]
glib-networking-services/now 2.64.0-1 amd64 [installed,local]
glib-networking/now 2.64.0-1 amd64 [installed,local]
gpgv/now 2.2.19-1 amd64 [installed,local]
grep/now 3.4-1 amd64 [installed,local]
gsettings-desktop-schemas/now 3.36.0-1 all [installed,local]
gstreamer1.0-plugins-base/now 1.16.2-2 amd64 [installed,local]
gtk-update-icon-cache/now 3.24.14-1 amd64 [installed,local]
gzip/now 1.9-3+b1 amd64 [installed,local]
hicolor-icon-theme/now 0.17-2 all [installed,local]
hostname/now 3.23 amd64 [installed,local]
i965-va-driver/now 2.4.0+dfsg1-1 amd64 [installed,local]
init-system-helpers/now 1.57 all [installed,local]
intel-media-va-driver/now 19.4.0r+dfsg1-1 amd64 [installed,local]
iso-codes/now 4.4-1 all [installed,local]
krb5-locales/now 1.17-7 all [installed,local]
libaacs0/now 0.9.0-2 amd64 [installed,local]
libacl1/now 2.2.53-5 amd64 [installed,local]
libaom0/now 1.0.0.errata1-3 amd64 [installed,local]
libapparmor1/now 2.13.3-7 amd64 [installed,local]
libapt-pkg5.0/now 1.8.4 amd64 [installed,local]
libargon2-1/now 0~20171227-0.2 amd64 [installed,local]
libasound2-data/now 1.2.2-2.1 all [installed,local]
libasound2/now 1.2.2-2.1 amd64 [installed,local]
libasyncns0/now 0.8-6+b1 amd64 [installed,local]
libatk-bridge2.0-0/now 2.34.1-3 amd64 [installed,local]
libatk1.0-0/now 2.34.1-1 amd64 [installed,local]
libatk1.0-data/now 2.34.1-1 all [installed,local]
libatspi2.0-0/now 2.36.0-2 amd64 [installed,local]
libattr1/now 1:2.4.48-5 amd64 [installed,local]
libaudit-common/now 1:2.8.5-2 all [installed,local]
libaudit1/now 1:2.8.5-2+b1 amd64 [installed,local]
libavahi-client3/now 0.7-5 amd64 [installed,local]
libavahi-common-data/now 0.7-5 amd64 [installed,local]
libavahi-common3/now 0.7-5 amd64 [installed,local]
libavcodec58/now 7:4.2.2-1+b1 amd64 [installed,local]
libavformat58/now 7:4.2.2-1+b1 amd64 [installed,local]
libavutil56/now 7:4.2.2-1+b1 amd64 [installed,local]
libbdplus0/now 0.1.2-3 amd64 [installed,local]
libblkid1/now 2.34-0.1 amd64 [installed,local]
libbluray2/now 1:1.1.2-2 amd64 [installed,local]
libbrotli1/now 1.0.7-6 amd64 [installed,local]
libbsd0/now 0.10.0-1 amd64 [installed,local]
libbz2-1.0/now 1.0.8-2 amd64 [installed,local]
libc-bin/now 2.29-10 amd64 [installed,local]
libc6/now 2.29-10 amd64 [installed,local]
libcairo-gobject2/now 1.16.0-4 amd64 [installed,local]
libcairo2/now 1.16.0-4 amd64 [installed,local]
libcap-ng0/now 0.7.9-2.1+b1 amd64 [installed,local]
libcap2-bin/now 1:2.32-1 amd64 [installed,local]
libcap2/now 1:2.32-1 amd64 [installed,local]
libcdparanoia0/now 3.10.2+debian-13+b1 amd64 [installed,local]
libchromaprint-tools/now 1.4.3-3 amd64 [installed,local]
libchromaprint1/now 1.4.3-3 amd64 [installed,local]
libcodec2-0.9/now 0.9.2-2 amd64 [installed,local]
libcolord2/now 1.4.4-2 amd64 [installed,local]
libcom-err2/now 1.45.5-2 amd64 [installed,local]
libcroco3/now 0.6.13-1 amd64 [installed,local]
libcrypt1/now 1:4.4.10-10 amd64 [installed,local]
libcryptsetup12/now 2:2.3.0-1 amd64 [installed,local]
libcups2/now 2.3.1-11 amd64 [installed,local]
libdatrie1/now 0.2.12-3 amd64 [installed,local]
libdb5.3/now 5.3.28+dfsg1-0.6 amd64 [installed,local]
libdbus-1-3/now 1.12.16-2 amd64 [installed,local]
libdconf1/now 0.36.0-1 amd64 [installed,local]
libdebconfclient0/now 0.251 amd64 [installed,local]
libdevmapper1.02.1/now 2:1.02.167-1+b1 amd64 [installed,local]
libdiscid0/now 0.6.2-3 amd64 [installed,local]
libdouble-conversion3/now 3.1.5-5 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.100-4 amd64 [installed,local]
libdrm-common/now 2.4.100-4 all [installed,local]
libdrm-intel1/now 2.4.100-4 amd64 [installed,local]
libdrm-nouveau2/now 2.4.100-4 amd64 [installed,local]
libdrm-radeon1/now 2.4.100-4 amd64 [installed,local]
libdrm2/now 2.4.100-4 amd64 [installed,local]
libedit2/now 3.1-20191231-1 amd64 [installed,local]
libegl-mesa0/now 19.3.3-1 amd64 [installed,local]
libegl1/now 1.3.1-1 amd64 [installed,local]
libelf1/now 0.176-1.1 amd64 [installed,local]
libepoxy0/now 1.5.4-1 amd64 [installed,local]
libevdev2/now 1.9.0+dfsg-1 amd64 [installed,local]
libexpat1/now 2.2.9-1 amd64 [installed,local]
libext2fs2/now 1.45.5-2 amd64 [installed,local]
libfdisk1/now 2.34-0.1 amd64 [installed,local]
libffi7/now 3.3-3 amd64 [installed,local]
libflac8/now 1.3.3-1 amd64 [installed,local]
libfontconfig1/now 2.13.1-2+b1 amd64 [installed,local]
libfontenc1/now 1:1.1.3-1+b2 amd64 [installed,local]
libfreetype6/now 2.10.1-2 amd64 [installed,local]
libfribidi0/now 1.0.8-2 amd64 [installed,local]
libgbm1/now 19.3.3-1 amd64 [installed,local]
libgcc-s1/now 10-20200324-1 amd64 [installed,local]
libgcc1/now 1:10-20200324-1 amd64 [installed,local]
libgcrypt20/now 1.8.5-3 amd64 [installed,local]
libgd3/now 2.2.5-5.2 amd64 [installed,local]
libgdk-pixbuf2.0-0/now 2.40.0+dfsg-3 amd64 [installed,local]
libgdk-pixbuf2.0-common/now 2.40.0+dfsg-3 all [installed,local]
libgeoip1/now 1.6.12-6 amd64 [installed,local]
libgif7/now 5.1.9-1 amd64 [installed,local]
libgl1-mesa-dri/now 19.3.3-1 amd64 [installed,local]
libgl1/now 1.3.1-1 amd64 [installed,local]
libglapi-mesa/now 19.3.3-1 amd64 [installed,local]
libglib2.0-0/now 2.64.1-1 amd64 [installed,local]
libglvnd0/now 1.3.1-1 amd64 [installed,local]
libglx-mesa0/now 19.3.3-1 amd64 [installed,local]
libglx0/now 1.3.1-1 amd64 [installed,local]
libgme0/now 0.6.2-1+b1 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-4 amd64 [installed,local]
libgnutls30/now 3.6.12-2 amd64 [installed,local]
libgomp1/now 10-20200324-1 amd64 [installed,local]
libgpg-error0/now 1.37-1 amd64 [installed,local]
libgraphite2-3/now 1.3.13-11 amd64 [installed,local]
libgsm1/now 1.0.18-2 amd64 [installed,local]
libgssapi-krb5-2/now 1.17-7 amd64 [installed,local]
libgstreamer-plugins-base1.0-0/now 1.16.2-2 amd64 [installed,local]
libgstreamer1.0-0/now 1.16.2-2 amd64 [installed,local]
libgtk-3-0/now 3.24.14-1 amd64 [installed,local]
libgtk-3-bin/now 3.24.14-1 amd64 [installed,local]
libgtk-3-common/now 3.24.14-1 all [installed,local]
libgudev-1.0-0/now 233-1 amd64 [installed,local]
libharfbuzz0b/now 2.6.4-1 amd64 [installed,local]
libhogweed5/now 3.5.1+really3.5.1-2 amd64 [installed,local]
libice6/now 2:1.0.9-2 amd64 [installed,local]
libicu63/now 63.2-3 amd64 [installed,local]
libid3tag0/now 0.15.1b-14 amd64 [installed,local]
libidn2-0/now 2.2.0-2 amd64 [installed,local]
libigdgmm11/now 19.4.1+ds1-1 amd64 [installed,local]
libimlib2/now 1.6.1-1 amd64 [installed,local]
libinput-bin/now 1.15.4-1 amd64 [installed,local]
libinput10/now 1.15.4-1 amd64 [installed,local]
libip4tc2/now 1.8.4-3 amd64 [installed,local]
libjbig0/now 2.1-3.1+b2 amd64 [installed,local]
libjpeg62-turbo/now 1:1.5.2-2+b1 amd64 [installed,local]
libjson-c4/now 0.13.1+dfsg-7 amd64 [installed,local]
libjson-glib-1.0-0/now 1.4.4-2 amd64 [installed,local]
libjson-glib-1.0-common/now 1.4.4-2 all [installed,local]
libk5crypto3/now 1.17-7 amd64 [installed,local]
libkeyutils1/now 1.6.1-2 amd64 [installed,local]
libkmod2/now 27-2 amd64 [installed,local]
libkrb5-3/now 1.17-7 amd64 [installed,local]
libkrb5support0/now 1.17-7 amd64 [installed,local]
liblcms2-2/now 2.9-4+b1 amd64 [installed,local]
libllvm9/now 1:9.0.1-10 amd64 [installed,local]
liblz4-1/now 1.9.2-2 amd64 [installed,local]
liblzma5/now 5.2.4-1+b1 amd64 [installed,local]
libmagic-mgc/now 1:5.38-4 amd64 [installed,local]
libmagic1/now 1:5.38-4 amd64 [installed,local]
libmount1/now 2.34-0.1 amd64 [installed,local]
libmp3lame0/now 3.100-3 amd64 [installed,local]
libmpdec2/now 2.4.2-3 amd64 [installed,local]
libmpg123-0/now 1.25.13-1 amd64 [installed,local]
libmtdev1/now 1.1.5-1.1 amd64 [installed,local]
libncurses6/now 6.2-1 amd64 [installed,local]
libncursesw6/now 6.2-1 amd64 [installed,local]
libnettle7/now 3.5.1+really3.5.1-2 amd64 [installed,local]
libnginx-mod-http-auth-pam/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-dav-ext/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-echo/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-geoip/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-image-filter/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-subs-filter/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-upstream-fair/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-http-xslt-filter/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-mail/now 1.16.1-3 amd64 [installed,local]
libnginx-mod-stream/now 1.16.1-3 amd64 [installed,local]
libnss-systemd/now 244.3-1 amd64 [installed,local]
libnuma1/now 2.0.12-1+b1 amd64 [installed,local]
libobrender32v5/now 3.6.1-8 amd64 [installed,local]
libobt2v5/now 3.6.1-8 amd64 [installed,local]
libogg0/now 1.3.2-1+b1 amd64 [installed,local]
libopenjp2-7/now 2.3.1-1 amd64 [installed,local]
libopenmpt0/now 0.4.11-1 amd64 [installed,local]
libopus0/now 1.3-1+b1 amd64 [installed,local]
liborc-0.4-0/now 1:0.4.31-1 amd64 [installed,local]
libp11-kit0/now 0.23.20-1 amd64 [installed,local]
libpam-cap/now 1:2.32-1 amd64 [installed,local]
libpam-modules-bin/now 1.3.1-5 amd64 [installed,local]
libpam-modules/now 1.3.1-5 amd64 [installed,local]
libpam-runtime/now 1.3.1-5 all [installed,local]
libpam-systemd/now 244.3-1 amd64 [installed,local]
libpam0g/now 1.3.1-5 amd64 [installed,local]
libpango-1.0-0/now 1.42.4-8 amd64 [installed,local]
libpangocairo-1.0-0/now 1.42.4-8 amd64 [installed,local]
libpangoft2-1.0-0/now 1.42.4-8 amd64 [installed,local]
libpangoxft-1.0-0/now 1.42.4-8 amd64 [installed,local]
libpciaccess0/now 0.14-1 amd64 [installed,local]
libpcre2-16-0/now 10.34-7 amd64 [installed,local]
libpcre2-8-0/now 10.34-7 amd64 [installed,local]
libpcre3/now 2:8.39-12+b1 amd64 [installed,local]
libpixman-1-0/now 0.36.0-1 amd64 [installed,local]
libpng16-16/now 1.6.37-2 amd64 [installed,local]
libprocps8/now 2:3.3.16-4 amd64 [installed,local]
libproxy1v5/now 0.4.15-9 amd64 [installed,local]
libpsl5/now 0.21.0-1 amd64 [installed,local]
libpulse0/now 13.0-5 amd64 [installed,local]
libpython3-stdlib/now 3.8.2-2 amd64 [installed,local]
libpython3.7-minimal/now 3.7.7-1 amd64 [installed,local]
libpython3.7-stdlib/now 3.7.7-1 amd64 [installed,local]
libpython3.7/now 3.7.7-1 amd64 [installed,local]
libpython3.8-minimal/now 3.8.2-1 amd64 [installed,local]
libpython3.8-stdlib/now 3.8.2-1 amd64 [installed,local]
libqt5core5a/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5dbus5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5designer5/now 5.12.5-2+b2 amd64 [installed,local]
libqt5gui5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5help5/now 5.12.5-2+b2 amd64 [installed,local]
libqt5multimedia5-plugins/now 5.12.5-1+b1 amd64 [installed,local]
libqt5multimedia5/now 5.12.5-1+b1 amd64 [installed,local]
libqt5multimediagsttools5/now 5.12.5-1+b1 amd64 [installed,local]
libqt5multimediawidgets5/now 5.12.5-1+b1 amd64 [installed,local]
libqt5network5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5opengl5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5printsupport5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5sql5-sqlite/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5sql5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5svg5/now 5.12.5-2 amd64 [installed,local]
libqt5test5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5widgets5/now 5.12.5+dfsg-9 amd64 [installed,local]
libqt5xml5/now 5.12.5+dfsg-9 amd64 [installed,local]
libreadline8/now 8.0-4 amd64 [installed,local]
librest-0.7-0/now 0.8.1-1+b1 amd64 [installed,local]
librsvg2-2/now 2.46.4-1 amd64 [installed,local]
librsvg2-common/now 2.46.4-1 amd64 [installed,local]
libseccomp2/now 2.4.2-2 amd64 [installed,local]
libselinux1/now 3.0-1+b1 amd64 [installed,local]
libsemanage-common/now 3.0-1 all [installed,local]
libsemanage1/now 3.0-1+b1 amd64 [installed,local]
libsensors-config/now 1:3.6.0-2 all [installed,local]
libsensors5/now 1:3.6.0-2 amd64 [installed,local]
libsepol1/now 3.0-1 amd64 [installed,local]
libshine3/now 3.1.1-2 amd64 [installed,local]
libsm6/now 2:1.2.3-1 amd64 [installed,local]
libsmartcols1/now 2.34-0.1 amd64 [installed,local]
libsnappy1v5/now 1.1.8-1 amd64 [installed,local]
libsndfile1/now 1.0.28-7 amd64 [installed,local]
libsoup-gnome2.4-1/now 2.70.0-1 amd64 [installed,local]
libsoup2.4-1/now 2.70.0-1 amd64 [installed,local]
libsoxr0/now 0.1.3-1 amd64 [installed,local]
libspeex1/now 1.2~rc1.2-1.1 amd64 [installed,local]
libsqlite3-0/now 3.31.1-4 amd64 [installed,local]
libss2/now 1.45.5-2 amd64 [installed,local]
libssh-gcrypt-4/now 0.9.3-2 amd64 [installed,local]
libssl1.1/now 1.1.1d-2 amd64 [installed,local]
libstartup-notification0/now 0.12-6 amd64 [installed,local]
libstdc++6/now 10-20200324-1 amd64 [installed,local]
libswresample3/now 7:4.2.2-1+b1 amd64 [installed,local]
libsystemd0/now 244.3-1 amd64 [installed,local]
libtasn1-6/now 4.15.0-2 amd64 [installed,local]
libthai-data/now 0.1.28-3 all [installed,local]
libthai0/now 0.1.28-3 amd64 [installed,local]
libtheora0/now 1.1.1+dfsg.1-15 amd64 [installed,local]
libtiff5/now 4.1.0+git191117-2 amd64 [installed,local]
libtinfo6/now 6.2-1 amd64 [installed,local]
libtwolame0/now 0.4.0-2 amd64 [installed,local]
libudev1/now 244.3-1 amd64 [installed,local]
libunistring2/now 0.9.10-2 amd64 [installed,local]
libunwind8/now 1.2.1-9 amd64 [installed,local]
libuuid1/now 2.34-0.1 amd64 [installed,local]
libva-drm2/now 2.7.0~pre1-1 amd64 [installed,local]
libva-x11-2/now 2.7.0~pre1-1 amd64 [installed,local]
libva2/now 2.7.0~pre1-1 amd64 [installed,local]
libvdpau-va-gl1/now 0.4.2-1+b1 amd64 [installed,local]
libvdpau1/now 1.3-1 amd64 [installed,local]
libvisual-0.4-0/now 0.4.0-17 amd64 [installed,local]
libvorbis0a/now 1.3.6-2 amd64 [installed,local]
libvorbisenc2/now 1.3.6-2 amd64 [installed,local]
libvorbisfile3/now 1.3.6-2 amd64 [installed,local]
libvpx6/now 1.8.2-1 amd64 [installed,local]
libvulkan1/now 1.2.131.2-1 amd64 [installed,local]
libwacom-bin/now 1.1-2 amd64 [installed,local]
libwacom-common/now 1.1-2 all [installed,local]
libwacom2/now 1.1-2 amd64 [installed,local]
libwavpack1/now 5.2.0-1 amd64 [installed,local]
libwayland-client0/now 1.18.0-1 amd64 [installed,local]
libwayland-cursor0/now 1.18.0-1 amd64 [installed,local]
libwayland-egl1/now 1.18.0-1 amd64 [installed,local]
libwayland-server0/now 1.18.0-1 amd64 [installed,local]
libwebp6/now 0.6.1-2+b1 amd64 [installed,local]
libwebpmux3/now 0.6.1-2+b1 amd64 [installed,local]
libwrap0/now 7.6.q-30 amd64 [installed,local]
libx11-6/now 2:1.6.9-2 amd64 [installed,local]
libx11-data/now 2:1.6.9-2 all [installed,local]
libx11-xcb1/now 2:1.6.9-2 amd64 [installed,local]
libx264-155/now 2:0.155.2917+git0a84d98-2 amd64 [installed,local]
libx265-179/now 3.2.1-1 amd64 [installed,local]
libxau6/now 1:1.0.8-1+b2 amd64 [installed,local]
libxaw7/now 2:1.0.13-1+b2 amd64 [installed,local]
libxcb-dri2-0/now 1.13.1-5 amd64 [installed,local]
libxcb-dri3-0/now 1.13.1-5 amd64 [installed,local]
libxcb-glx0/now 1.13.1-5 amd64 [installed,local]
libxcb-icccm4/now 0.4.1-1.1 amd64 [installed,local]
libxcb-image0/now 0.4.0-1+b2 amd64 [installed,local]
libxcb-keysyms1/now 0.4.0-1+b2 amd64 [installed,local]
libxcb-present0/now 1.13.1-5 amd64 [installed,local]
libxcb-randr0/now 1.13.1-5 amd64 [installed,local]
libxcb-render-util0/now 0.3.9-1+b1 amd64 [installed,local]
libxcb-render0/now 1.13.1-5 amd64 [installed,local]
libxcb-shape0/now 1.13.1-5 amd64 [installed,local]
libxcb-shm0/now 1.13.1-5 amd64 [installed,local]
libxcb-sync1/now 1.13.1-5 amd64 [installed,local]
libxcb-util0/now 0.3.8-3+b2 amd64 [installed,local]
libxcb-xfixes0/now 1.13.1-5 amd64 [installed,local]
libxcb-xinerama0/now 1.13.1-5 amd64 [installed,local]
libxcb-xinput0/now 1.13.1-5 amd64 [installed,local]
libxcb-xkb1/now 1.13.1-5 amd64 [installed,local]
libxcb1/now 1.13.1-5 amd64 [installed,local]
libxcomposite1/now 1:0.4.4-2 amd64 [installed,local]
libxcursor1/now 1:1.2.0-2 amd64 [installed,local]
libxdamage1/now 1:1.1.5-1 amd64 [installed,local]
libxdmcp6/now 1:1.1.2-3 amd64 [installed,local]
libxext6/now 2:1.3.3-1+b2 amd64 [installed,local]
libxfixes3/now 1:5.0.3-1 amd64 [installed,local]
libxfont2/now 1:2.0.3-1 amd64 [installed,local]
libxft2/now 2.3.2-2 amd64 [installed,local]
libxi6/now 2:1.7.9-1 amd64 [installed,local]
libxinerama1/now 2:1.1.4-2 amd64 [installed,local]
libxkbcommon-x11-0/now 0.10.0-1 amd64 [installed,local]
libxkbcommon0/now 0.10.0-1 amd64 [installed,local]
libxkbfile1/now 1:1.1.0-1 amd64 [installed,local]
libxml2/now 2.9.10+dfsg-4 amd64 [installed,local]
libxmu6/now 2:1.1.2-2+b3 amd64 [installed,local]
libxmuu1/now 2:1.1.2-2+b3 amd64 [installed,local]
libxpm4/now 1:3.5.12-1 amd64 [installed,local]
libxrandr2/now 2:1.5.1-1 amd64 [installed,local]
libxrender1/now 1:0.9.10-1 amd64 [installed,local]
libxshmfence1/now 1.3-1 amd64 [installed,local]
libxslt1.1/now 1.1.34-4 amd64 [installed,local]
libxt6/now 1:1.1.5-1+b3 amd64 [installed,local]
libxtst6/now 2:1.2.3-1 amd64 [installed,local]
libxv1/now 2:1.0.11-1 amd64 [installed,local]
libxvidcore4/now 2:1.3.7-1 amd64 [installed,local]
libxxf86dga1/now 2:1.1.4-1+b3 amd64 [installed,local]
libxxf86vm1/now 1:1.1.4-1+b2 amd64 [installed,local]
libz3-4/now 4.8.7-4 amd64 [installed,local]
libzstd1/now 1.4.4+dfsg-3 amd64 [installed,local]
libzvbi-common/now 0.2.35-17 all [installed,local]
libzvbi0/now 0.2.35-17 amd64 [installed,local]
login/now 1:4.8.1-1 amd64 [installed,local]
logsave/now 1.45.5-2 amd64 [installed,local]
lsb-base/now 11.1.0 all [installed,local]
mawk/now 1.3.4.20200120-2 amd64 [installed,local]
mesa-va-drivers/now 19.3.3-1 amd64 [installed,local]
mesa-vdpau-drivers/now 19.3.3-1 amd64 [installed,local]
mime-support/now 3.64 all [installed,local]
mount/now 2.34-0.1 amd64 [installed,local]
ncurses-base/now 6.1+20191019-1 all [installed,local]
ncurses-bin/now 6.2-1 amd64 [installed,local]
nginx-common/now 1.16.1-3 all [installed,local]
nginx-full/now 1.16.1-3 amd64 [installed,local]
nginx/now 1.16.1-3 all [installed,local]
ocl-icd-libopencl1/now 2.2.12-3 amd64 [installed,local]
openbox/now 3.6.1-8 amd64 [installed,local]
openssl/now 1.1.1d-2 amd64 [installed,local]
passwd/now 1:4.8.1-1 amd64 [installed,local]
perl-base/now 5.30.0-9 amd64 [installed,local]
picard/now 2.3.1-1+b1 amd64 [installed,local]
procps/now 2:3.3.16-4 amd64 [installed,local]
publicsuffix/now 20200201.2258-1 all [installed,local]
python3-libdiscid/now 1.1-1+b1 amd64 [installed,local]
python3-minimal/now 3.8.2-2 amd64 [installed,local]
python3-mutagen/now 1.44.0-1 all [installed,local]
python3-pyqt5.qtmultimedia/now 5.14.1+dfsg-3 amd64 [installed,local]
python3-pyqt5/now 5.14.1+dfsg-3 amd64 [installed,local]
python3-sip/now 4.19.21+dfsg-2 amd64 [installed,local]
python3.8-minimal/now 3.8.2-1 amd64 [installed,local]
python3.8/now 3.8.2-1 amd64 [installed,local]
python3/now 3.8.2-2 amd64 [installed,local]
qt5-gtk-platformtheme/now 5.12.5+dfsg-9 amd64 [installed,local]
qttranslations5-l10n/now 5.12.5-1 all [installed,local]
readline-common/now 8.0-4 all [installed,local]
sed/now 4.7-1 amd64 [installed,local]
sensible-utils/now 0.0.12+nmu1 all [installed,local]
shared-mime-info/now 1.10-1 amd64 [installed,local]
systemd-sysv/now 244.3-1 amd64 [installed,local]
systemd/now 244.3-1 amd64 [installed,local]
sysvinit-utils/now 2.96-2.1 amd64 [installed,local]
tar/now 1.30+dfsg-6+b1 amd64 [installed,local]
tzdata/now 2019c-3 all [installed,local]
ucf/now 3.0038+nmu1 all [installed,local]
util-linux/now 2.34-0.1 amd64 [installed,local]
va-driver-all/now 2.7.0~pre1-1 amd64 [installed,local]
vdpau-driver-all/now 1.3-1 amd64 [installed,local]
x11-common/now 1:7.7+20 all [installed,local]
x11-utils/now 7.7+5 amd64 [installed,local]
x11-xkb-utils/now 7.7+5 amd64 [installed,local]
xkb-data/now 2.29-2 all [installed,local]
xserver-common/now 2:1.20.7-4 all [installed,local]
xvfb/now 2:1.20.7-4 amd64 [installed,local]
xz-utils/now 5.2.4-1+b1 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-1.2 amd64 [installed,local]

```

</p></details>
</section>

</main>