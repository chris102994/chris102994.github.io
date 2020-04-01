## Test Results docker-hakuneko

## Test's: 4/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot ubuntu-18-v1.0.0 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.0 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.0 | PASSED |
| Run shell check for: docker-hakuneko | PASSED |

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

## christopher102994/docker-hakuneko:ubuntu-18-v1.0.0

[![ubuntu-18-v1.0.0](ubuntu-18-v1.0.0.png =600x*)](ubuntu-18-v1.0.0.png)

### Build Version: ubuntu-18-v1.0.0

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
GROUPNAME=user
DISPLAY=:0
USERNAME=user
PUID=900
PGID=900
DISPLAY_WIDTH=1280
APP_NAME=HakuNeko
DISPLAY_HEIGHT=720
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Apr  1 01:35 /app
drwxr-xr-x 4 user user 4096 Apr  1 01:37 /config
drwxr-xr-x 1 user user 4096 Mar 28 03:20 /defaults
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
[x11vnc]: Starting . . .
[openbox]: Starting . . .
[nginx]: Starting . . .

```

</p></details>

### Package Info

<details><summary>Expand</summary><p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.116ubuntu1 all [installed,local]
adwaita-icon-theme/now 3.28.0-1ubuntu1 all [installed,local]
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
dconf-gsettings-backend/now 0.26.0-2ubuntu3 amd64 [installed,local]
dconf-service/now 0.26.0-2ubuntu3 amd64 [installed,local]
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
glib-networking/now 2.56.0-1 amd64 [installed,local]
glib-networking-common/now 2.56.0-1 all [installed,local]
glib-networking-services/now 2.56.0-1 amd64 [installed,local]
gpgv/now 2.2.4-1ubuntu1.2 amd64 [installed,local]
grep/now 3.1-2build1 amd64 [installed,local]
gsettings-desktop-schemas/now 3.28.0-1ubuntu1 all [installed,local]
gtk-update-icon-cache/now 3.22.30-1ubuntu4 amd64 [installed,local]
gzip/now 1.6-5ubuntu1 amd64 [installed,local]
hakuneko-desktop/now 6.1.7 amd64 [installed,local]
hicolor-icon-theme/now 0.17-2 all [installed,local]
hostname/now 3.20 amd64 [installed,local]
humanity-icon-theme/now 0.6.15 all [installed,local]
init-system-helpers/now 1.51 all [installed,local]
iproute2/now 4.15.0-2ubuntu1 amd64 [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12 amd64 [installed,local]
libasound2/now 1.1.3-5ubuntu0.4 amd64 [installed,local]
libasound2-data/now 1.1.3-5ubuntu0.4 all [installed,local]
libatk-bridge2.0-0/now 2.26.2-1 amd64 [installed,local]
libatk1.0-0/now 2.28.1-1 amd64 [installed,local]
libatk1.0-data/now 2.28.1-1 all [installed,local]
libatspi2.0-0/now 2.28.0-1 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libavahi-client3/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libavahi-common-data/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libavahi-common3/now 0.7-3.1ubuntu1.2 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libbsd0/now 0.8.7-1ubuntu0.1 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1 amd64 [installed,local]
libc6/now 2.27-3ubuntu1 amd64 [installed,local]
libcairo-gobject2/now 1.15.10-2ubuntu0.1 amd64 [installed,local]
libcairo2/now 1.15.10-2ubuntu0.1 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcolord2/now 1.3.3-2build1 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libcroco3/now 0.6.12-2 amd64 [installed,local]
libcups2/now 2.2.7-1ubuntu2.7 amd64 [installed,local]
libdatrie1/now 0.2.10-7 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdbus-1-3/now 1.12.2-1ubuntu1.1 amd64 [installed,local]
libdconf1/now 0.26.0-2ubuntu3 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libdrm-amdgpu1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-common/now 2.4.99-1ubuntu1~18.04.2 all [installed,local]
libdrm-intel1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-nouveau2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm-radeon1/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libdrm2/now 2.4.99-1ubuntu1~18.04.2 amd64 [installed,local]
libedit2/now 3.1-20170329-1 amd64 [installed,local]
libelf1/now 0.170-0.4ubuntu0.1 amd64 [installed,local]
libepoxy0/now 1.4.3-1 amd64 [installed,local]
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
libgssapi-krb5-2/now 1.16-2ubuntu0.1 amd64 [installed,local]
libgtk-3-0/now 3.22.30-1ubuntu4 amd64 [installed,local]
libgtk-3-common/now 3.22.30-1ubuntu4 all [installed,local]
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
libjson-glib-1.0-0/now 1.4.2-3 amd64 [installed,local]
libjson-glib-1.0-common/now 1.4.2-3 all [installed,local]
libk5crypto3/now 1.16-2ubuntu0.1 amd64 [installed,local]
libkeyutils1/now 1.5.9-9.2ubuntu2 amd64 [installed,local]
libkrb5-3/now 1.16-2ubuntu0.1 amd64 [installed,local]
libkrb5support0/now 1.16-2ubuntu0.1 amd64 [installed,local]
liblcms2-2/now 2.9-1ubuntu0.1 amd64 [installed,local]
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
libnspr4/now 2:4.18-1ubuntu1 amd64 [installed,local]
libnss3/now 2:3.35-2ubuntu2.7 amd64 [installed,local]
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
libproxy1v5/now 0.4.15-1 amd64 [installed,local]
librest-0.7-0/now 0.8.0-2 amd64 [installed,local]
librsvg2-2/now 2.40.20-2 amd64 [installed,local]
librsvg2-common/now 2.40.20-2 amd64 [installed,local]
libseccomp2/now 2.4.1-0ubuntu0.18.04.2 amd64 [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsensors4/now 1:3.4.0-4 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libsm6/now 2:1.2.2-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libsoup-gnome2.4-1/now 2.62.1-1ubuntu0.4 amd64 [installed,local]
libsoup2.4-1/now 2.62.1-1ubuntu0.4 amd64 [installed,local]
libsqlite3-0/now 3.22.0-1ubuntu0.3 amd64 [installed,local]
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
libwayland-client0/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
libwayland-cursor0/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
libwayland-egl1/now 1.16.0-1ubuntu1.1~18.04.3 amd64 [installed,local]
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
libxkbcommon0/now 0.8.2-1~ubuntu18.04.1 amd64 [installed,local]
libxkbfile1/now 1:1.0.9-2 amd64 [installed,local]
libxml2/now 2.9.4+dfsg1-6.1ubuntu1.3 amd64 [installed,local]
libxmu6/now 2:1.1.2-2 amd64 [installed,local]
libxmuu1/now 2:1.1.2-2 amd64 [installed,local]
libxpm4/now 1:3.5.12-1 amd64 [installed,local]
libxrandr2/now 2:1.5.1-1 amd64 [installed,local]
libxrender1/now 1:0.9.10-1 amd64 [installed,local]
libxshmfence1/now 1.3-1 amd64 [installed,local]
libxslt1.1/now 1.1.29-5ubuntu0.2 amd64 [installed,local]
libxss1/now 1:1.2.2-1 amd64 [installed,local]
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
ubuntu-mono/now 16.10+18.04.20181005-0ubuntu1 all [installed,local]
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

</p></details>
</section>

</main>