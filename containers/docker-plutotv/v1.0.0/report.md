## Test Results docker-plutotv

## Test's: 4/4 Passed

| Test | Result |
| ----------------------- | --- |
| Screenshot ubuntu-18-v1.0.0 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.0 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.0 | PASSED |
| Run shell check for: docker-plutotv | PASSED |

<main>

<section markdown="1">
 
## ShellCheck Results

<details><summary>Expand</summary><blockquote><p>

<details><summary>File: `tools/scripts/push_readme_to_dockerhub.sh`</summary><p>

```

In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 20:
				--write-out %{response_code} \
                                             ^-- SC1083: This { is literal. Check expression (missing ;/\n?) or quote it.
                                                           ^-- SC1083: This } is literal. Check expression (missing ;/\n?) or quote it.

For more information:
  https://www.shellcheck.net/wiki/SC1083 -- This { is literal. Check expressi...

```

</p></details>

<details><summary>File: `tools/scripts/push_git_tag.sh`</summary><p>

```

In /workspace/tools/scripts/push_git_tag.sh line 12:
		--data '{ "user" : { "email" : "${GIT_EMAIL}", "password" : "${GIT_TOKEN}" },
                       ^-- SC2016: Expressions don't expand in single quotes, use double quotes for that.

For more information:
  https://www.shellcheck.net/wiki/SC2016 -- Expressions don't expand in singl...

```

</p></details>

<details><summary>File: `tools/scripts/load_env_files.sh`</summary><p>

```

In /workspace/tools/scripts/load_env_files.sh line 15:
		export $(grep -Ev '^#' "${FILE}" | xargs)
                       ^-- SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `tools/scripts/docker_test.sh`</summary><p>

```

In /workspace/tools/scripts/docker_test.sh line 9:
	TAG="$(cat "${ENV}" | grep "IMAGE_TAG=" | sed 's#.*=##')"
                   ^------^ SC2002: Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.

For more information:
  https://www.shellcheck.net/wiki/SC2002 -- Useless cat. Consider 'cmd < file...

```

</p></details>

<details><summary>File: `tools/scripts/versioning.sh`</summary><p>

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

## christopher102994/docker-plutotv:ubuntu-18-v1.0.0

[![ubuntu-18-v1.0.0](ubuntu-18-v1.0.0.png =600x*)](ubuntu-18-v1.0.0.png)

### Build Version: ubuntu-18-v1.0.0

### Logs

<details><summary>Expand</summary><p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
[fix-attrs.d] 50-plutotv-attrs: applying... 
[fix-attrs.d] 50-plutotv-attrs: exited 0.
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
LC_ALL=C.UTF-8
GROUPNAME=user
USERNAME=user
PUID=900
FIRST_RUN=TRUE
PGID=900
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar  1 14:32 /app
drwxr-xr-x 4 user user 4096 Mar  1 14:36 /config
drwxr-xr-x 1 user user 4096 Mar  1 14:32 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 40-fix-plutotv-attrs: executing... 
First boot with mounted /data/PlutoTV detected.
[cont-init.d] 40-fix-plutotv-attrs: exited 0.
[cont-init.d] 50-first-run: executing... 
[cont-init.d] 50-first-run: exited 0.
[cont-init.d] 60-fix-nginx-config: executing... 
Ensuring proper NGINX configuration.
[cont-init.d] 60-fix-nginx-config: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apt-get
[nginx]: Starting . . .
nginx: [alert] could not open error log file: open() "/var/log/nginx/error.log" failed (2: No such file or directory)

```

</p></details>

### Package Info

<details><summary>Expand</summary><p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.116ubuntu1 all [installed,local]
apt/now 1.6.12ubuntu0.1 amd64 [installed,local]
base-files/now 10.1ubuntu2.9 amd64 [installed,local]
base-passwd/now 3.5.44 amd64 [installed,local]
bash/now 4.4.18-2ubuntu1.2 amd64 [installed,local]
binutils/now 2.30-21ubuntu1~18.04.5 amd64 [installed,local]
binutils-common/now 2.30-21ubuntu1~18.04.5 amd64 [installed,local]
binutils-x86-64-linux-gnu/now 2.30-21ubuntu1~18.04.5 amd64 [installed,local]
bsdutils/now 1:2.31.1-0.4ubuntu3.6 amd64 [installed,local]
bzip2/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
ca-certificates/now 20190110~18.04.1 all [installed,local]
coreutils/now 8.28-1ubuntu1 amd64 [installed,local]
cron/now 3.0pl1-128.1ubuntu1 amd64 [installed,local]
dash/now 0.5.8-2.10 amd64 [installed,local]
debconf/now 1.5.66ubuntu1 all [installed,local]
debianutils/now 4.8.4 amd64 [installed,local]
diffutils/now 1:3.6-1 amd64 [installed,local]
dpkg/now 1.19.0.5ubuntu2.3 amd64 [installed,local]
dpkg-dev/now 1.19.0.5ubuntu2.3 all [installed,local]
e2fsprogs/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
fdisk/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
findutils/now 4.6.0+git+20170828-2 amd64 [installed,local]
fontconfig-config/now 2.12.6-0ubuntu2 all [installed,local]
fonts-dejavu-core/now 2.37-1 all [installed,local]
gcc-6-base/now 6.5.0-2ubuntu1~18.04 amd64 [installed,local]
gcc-7-base/now 7.5.0-3ubuntu1~18.04 amd64 [installed,local]
gcc-8-base/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
gir1.2-glib-2.0/now 1.56.1-1 amd64 [installed,local]
gir1.2-harfbuzz-0.0/now 1.7.2-1ubuntu1 amd64 [installed,local]
gpgv/now 2.2.4-1ubuntu1.2 amd64 [installed,local]
grep/now 3.1-2build1 amd64 [installed,local]
gzip/now 1.6-5ubuntu1 amd64 [installed,local]
hostname/now 3.20 amd64 [installed,local]
icu-devtools/now 60.2-3ubuntu3.1 amd64 [installed,local]
init-system-helpers/now 1.51 all [installed,local]
iproute2/now 4.15.0-2ubuntu1.3 amd64 [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12ubuntu0.1 amd64 [installed,local]
libasan3/now 6.5.0-2ubuntu1~18.04 amd64 [installed,local]
libatomic1/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libbinutils/now 2.30-21ubuntu1~18.04.5 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libbsd0/now 0.8.7-1ubuntu0.1 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1.2 amd64 [installed,local]
libc-dev-bin/now 2.27-3ubuntu1.4 amd64 [installed,local]
libc6/now 2.27-3ubuntu1.4 amd64 [installed,local]
libc6-dev/now 2.27-3ubuntu1.4 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcilkrts5/now 7.5.0-3ubuntu1~18.04 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libdpkg-perl/now 1.19.0.5ubuntu2.3 all [installed,local]
libelf1/now 0.170-0.4ubuntu0.1 amd64 [installed,local]
libexpat1/now 2.2.5-3ubuntu0.2 amd64 [installed,local]
libext2fs2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libfdisk1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libffi6/now 3.2.1-8 amd64 [installed,local]
libfontconfig1/now 2.12.6-0ubuntu2 amd64 [installed,local]
libfreetype6/now 2.8.1-2ubuntu2.1 amd64 [installed,local]
libgcc-6-dev/now 6.5.0-2ubuntu1~18.04 amd64 [installed,local]
libgcc1/now 1:8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libgcrypt20/now 1.8.1-4ubuntu1.2 amd64 [installed,local]
libgd3/now 2.2.5-4ubuntu0.4 amd64 [installed,local]
libgdbm-compat4/now 1.14.1-6 amd64 [installed,local]
libgdbm5/now 1.14.1-6 amd64 [installed,local]
libgeoip1/now 1.6.12-1 amd64 [installed,local]
libgirepository-1.0-1/now 1.56.1-1 amd64 [installed,local]
libglib2.0-0/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libglib2.0-bin/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libglib2.0-data/now 2.56.4-0ubuntu0.18.04.6 all [installed,local]
libglib2.0-dev/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libglib2.0-dev-bin/now 2.56.4-0ubuntu0.18.04.6 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-2 amd64 [installed,local]
libgnutls30/now 3.5.18-1ubuntu1.4 amd64 [installed,local]
libgomp1/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libgpg-error0/now 1.27-6 amd64 [installed,local]
libgraphite2-3/now 1.3.11-2 amd64 [installed,local]
libgraphite2-dev/now 1.3.11-2 amd64 [installed,local]
libharfbuzz-dev/now 1.7.2-1ubuntu1 amd64 [installed,local]
libharfbuzz-gobject0/now 1.7.2-1ubuntu1 amd64 [installed,local]
libharfbuzz-icu0/now 1.7.2-1ubuntu1 amd64 [installed,local]
libharfbuzz0b/now 1.7.2-1ubuntu1 amd64 [installed,local]
libhogweed4/now 3.4-1 amd64 [installed,local]
libicu-dev/now 60.2-3ubuntu3.1 amd64 [installed,local]
libicu-le-hb-dev/now 1.0.3+git161113-4 amd64 [installed,local]
libicu-le-hb0/now 1.0.3+git161113-4 amd64 [installed,local]
libicu60/now 60.2-3ubuntu3.1 amd64 [installed,local]
libiculx60/now 60.2-3ubuntu3.1 amd64 [installed,local]
libidn2-0/now 2.0.4-1.1ubuntu0.2 amd64 [installed,local]
libitm1/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libjbig0/now 2.1-3.1build1 amd64 [installed,local]
libjpeg-turbo8/now 1.5.2-0ubuntu5.18.04.4 amd64 [installed,local]
libjpeg8/now 8c-2ubuntu8 amd64 [installed,local]
liblsan0/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
liblz4-1/now 0.0~r131-2ubuntu3 amd64 [installed,local]
liblzma5/now 5.2.2-1.3 amd64 [installed,local]
libmnl0/now 1.0.4-2 amd64 [installed,local]
libmount1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libmpdec2/now 2.4.2-1ubuntu1 amd64 [installed,local]
libmpx2/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libncurses5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libncursesw5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libnettle6/now 3.4-1 amd64 [installed,local]
libnginx-mod-http-geoip/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-http-image-filter/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-http-xslt-filter/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-mail/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libnginx-mod-stream/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
libp11-kit0/now 0.23.9-2 amd64 [installed,local]
libpam-modules/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-modules-bin/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-runtime/now 1.1.8-3.6ubuntu2.18.04.1 all [installed,local]
libpam0g/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpcre16-3/now 2:8.39-9 amd64 [installed,local]
libpcre3/now 2:8.39-9 amd64 [installed,local]
libpcre3-dev/now 2:8.39-9 amd64 [installed,local]
libpcre32-3/now 2:8.39-9 amd64 [installed,local]
libpcrecpp0v5/now 2:8.39-9 amd64 [installed,local]
libperl5.26/now 5.26.1-6ubuntu0.5 amd64 [installed,local]
libpng16-16/now 1.6.34-1ubuntu0.18.04.2 amd64 [installed,local]
libprocps6/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
libpython3-stdlib/now 3.6.7-1~18.04 amd64 [installed,local]
libpython3.6-minimal/now 3.6.9-1~18.04ubuntu1.4 amd64 [installed,local]
libpython3.6-stdlib/now 3.6.9-1~18.04ubuntu1.4 amd64 [installed,local]
libquadmath0/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libreadline7/now 7.0-3 amd64 [installed,local]
libseccomp2/now 2.4.3-1ubuntu3.18.04.3 amd64 [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libsqlite3-0/now 3.22.0-1ubuntu0.4 amd64 [installed,local]
libss2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libssl1.1/now 1.1.1-1ubuntu2.1~18.04.6 amd64 [installed,local]
libstdc++-6-dev/now 6.5.0-2ubuntu1~18.04 amd64 [installed,local]
libstdc++6/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libsystemd0/now 237-3ubuntu10.42 amd64 [installed,local]
libtasn1-6/now 4.13-2 amd64 [installed,local]
libtiff5/now 4.0.9-5ubuntu0.4 amd64 [installed,local]
libtinfo5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libtsan0/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libubsan0/now 7.5.0-3ubuntu1~18.04 amd64 [installed,local]
libudev1/now 237-3ubuntu10.42 amd64 [installed,local]
libunistring2/now 0.9.9-0ubuntu2 amd64 [installed,local]
libuuid1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libwebp6/now 0.6.1-2 amd64 [installed,local]
libx11-6/now 2:1.6.4-3ubuntu0.3 amd64 [installed,local]
libx11-data/now 2:1.6.4-3ubuntu0.3 all [installed,local]
libxau6/now 1:1.0.8-1ubuntu1 amd64 [installed,local]
libxcb1/now 1.13-2~ubuntu18.04 amd64 [installed,local]
libxdmcp6/now 1:1.1.2-3 amd64 [installed,local]
libxml2/now 2.9.4+dfsg1-6.1ubuntu1.3 amd64 [installed,local]
libxml2-dev/now 2.9.4+dfsg1-6.1ubuntu1.3 amd64 [installed,local]
libxpm4/now 1:3.5.12-1 amd64 [installed,local]
libxslt1-dev/now 1.1.29-5ubuntu0.2 amd64 [installed,local]
libxslt1.1/now 1.1.29-5ubuntu0.2 amd64 [installed,local]
libzstd1/now 1.3.3+dfsg-2ubuntu1.1 amd64 [installed,local]
linux-libc-dev/now 4.15.0-136.140 amd64 [installed,local]
login/now 1:4.5-1ubuntu2 amd64 [installed,local]
lsb-base/now 9.20170808ubuntu1 all [installed,local]
make/now 4.1-9.1ubuntu1 amd64 [installed,local]
mawk/now 1.3.3-17ubuntu3 amd64 [installed,local]
mime-support/now 3.60ubuntu1 all [installed,local]
mount/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
multiarch-support/now 2.27-3ubuntu1.4 amd64 [installed,local]
ncurses-base/now 6.1-1ubuntu1.18.04 all [installed,local]
ncurses-bin/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
nginx/now 1.14.0-0ubuntu1.7 all [installed,local]
nginx-common/now 1.14.0-0ubuntu1.7 all [installed,local]
nginx-core/now 1.14.0-0ubuntu1.7 amd64 [installed,local]
openssl/now 1.1.1-1ubuntu2.1~18.04.6 amd64 [installed,local]
passwd/now 1:4.5-1ubuntu2 amd64 [installed,local]
patch/now 2.7.6-2ubuntu1.1 amd64 [installed,local]
perl/now 5.26.1-6ubuntu0.5 amd64 [installed,local]
perl-base/now 5.26.1-6ubuntu0.5 amd64 [installed,local]
perl-modules-5.26/now 5.26.1-6ubuntu0.5 all [installed,local]
pkg-config/now 0.29.1-0ubuntu2 amd64 [installed,local]
procps/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
python-pip-whl/now 9.0.1-2.3~ubuntu1.18.04.4 all [installed,local]
python3/now 3.6.7-1~18.04 amd64 [installed,local]
python3-distutils/now 3.6.9-1~18.04 all [installed,local]
python3-lib2to3/now 3.6.9-1~18.04 all [installed,local]
python3-minimal/now 3.6.7-1~18.04 amd64 [installed,local]
python3-pip/now 9.0.1-2.3~ubuntu1.18.04.4 all [installed,local]
python3.6/now 3.6.9-1~18.04ubuntu1.4 amd64 [installed,local]
python3.6-minimal/now 3.6.9-1~18.04ubuntu1.4 amd64 [installed,local]
readline-common/now 7.0-3 all [installed,local]
sed/now 4.4-2 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
sysvinit-utils/now 2.88dsf-59.10ubuntu1 amd64 [installed,local]
tar/now 1.29b-2ubuntu0.1 amd64 [installed,local]
tzdata/now 2020a-0ubuntu0.18.04 all [installed,local]
ubuntu-keyring/now 2018.09.18.1~18.04.0 all [installed,local]
ucf/now 3.0038 all [installed,local]
util-linux/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
xz-utils/now 5.2.2-1.3 amd64 [installed,local]
zip/now 3.0-11build1 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]
zlib1g-dev/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]

```

</p></details>
</section>

</main>