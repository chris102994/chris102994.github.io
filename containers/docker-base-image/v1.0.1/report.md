## Test Results docker-base-image

## Test's: 6/6 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Init Scripts for: debian-10-v1.0.1 | PASSED |
| Test Service Scripts for: debian-10-v1.0.1 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.1 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.1 | PASSED |

<main>

<section markdown="1">
## christopher102994/docker-base-image:alpine-3.10-v1.0.1

### Build Version: alpine-3.10-v1.0.1

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
drwxr-xr-x 1 user user 4096 Mar 24 20:21 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:25 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:21 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apk

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

```

</p>
</details>
</section>

<section markdown="1">
## christopher102994/docker-base-image:debian-10-v1.0.1

### Build Version: debian-10-v1.0.1

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
drwxr-xr-x 1 user user 4096 Mar 24 20:22 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:26 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:22 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apt-get
[services.d] done.

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
libbz2-1.0/now 1.0.6-9.2~deb10u1 amd64 [installed,local]
libc-bin/now 2.28-10 amd64 [installed,local]
libc6/now 2.28-10 amd64 [installed,local]
libcap-ng0/now 0.7.9-2 amd64 [installed,local]
libcom-err2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libdb5.3/now 5.3.28+dfsg1-0.5 amd64 [installed,local]
libdebconfclient0/now 0.249 amd64 [installed,local]
libext2fs2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libfdisk1/now 2.33.1-0.1 amd64 [installed,local]
libffi6/now 3.2.1-9 amd64 [installed,local]
libgcc1/now 1:8.3.0-6 amd64 [installed,local]
libgcrypt20/now 1.8.4-5 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-4 amd64 [installed,local]
libgnutls30/now 3.6.7-4+deb10u2 amd64 [installed,local]
libgpg-error0/now 1.35-1 amd64 [installed,local]
libhogweed4/now 3.4.1-1 amd64 [installed,local]
libidn2-0/now 2.0.5-1+deb10u1 amd64 [installed,local]
liblz4-1/now 1.8.3-1 amd64 [installed,local]
liblzma5/now 5.2.4-1 amd64 [installed,local]
libmount1/now 2.33.1-0.1 amd64 [installed,local]
libncurses6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libncursesw6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libnettle6/now 3.4.1-1 amd64 [installed,local]
libp11-kit0/now 0.23.15-2 amd64 [installed,local]
libpam-modules-bin/now 1.3.1-5 amd64 [installed,local]
libpam-modules/now 1.3.1-5 amd64 [installed,local]
libpam-runtime/now 1.3.1-5 all [installed,local]
libpam0g/now 1.3.1-5 amd64 [installed,local]
libpcre3/now 2:8.39-12 amd64 [installed,local]
libprocps7/now 2:3.3.15-2 amd64 [installed,local]
libseccomp2/now 2.3.3-4 amd64 [installed,local]
libselinux1/now 2.8-1+b1 amd64 [installed,local]
libsemanage-common/now 2.8-2 all [installed,local]
libsemanage1/now 2.8-2 amd64 [installed,local]
libsepol1/now 2.8-1 amd64 [installed,local]
libsmartcols1/now 2.33.1-0.1 amd64 [installed,local]
libss2/now 1.44.5-1+deb10u3 amd64 [installed,local]
libssl1.1/now 1.1.1d-0+deb10u2 amd64 [installed,local]
libstdc++6/now 8.3.0-6 amd64 [installed,local]
libsystemd0/now 241-7~deb10u3 amd64 [installed,local]
libtasn1-6/now 4.13-3 amd64 [installed,local]
libtinfo6/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
libudev1/now 241-7~deb10u3 amd64 [installed,local]
libunistring2/now 0.9.10-1 amd64 [installed,local]
libuuid1/now 2.33.1-0.1 amd64 [installed,local]
libzstd1/now 1.3.8+dfsg-3 amd64 [installed,local]
login/now 1:4.5-1.1 amd64 [installed,local]
lsb-base/now 10.2019051400 all [installed,local]
mawk/now 1.3.3-17+b3 amd64 [installed,local]
mount/now 2.33.1-0.1 amd64 [installed,local]
ncurses-base/now 6.1+20181013-2+deb10u2 all [installed,local]
ncurses-bin/now 6.1+20181013-2+deb10u2 amd64 [installed,local]
openssl/now 1.1.1d-0+deb10u2 amd64 [installed,local]
passwd/now 1:4.5-1.1 amd64 [installed,local]
perl-base/now 5.28.1-6 amd64 [installed,local]
procps/now 2:3.3.15-2 amd64 [installed,local]
sed/now 4.7-1 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
sysvinit-utils/now 2.93-8 amd64 [installed,local]
tar/now 1.30+dfsg-6 amd64 [installed,local]
tzdata/now 2019c-0+deb10u1 all [installed,local]
util-linux/now 2.33.1-0.1 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-1 amd64 [installed,local]

```

</p>
</details>
</section>

<section markdown="1">
## christopher102994/docker-base-image:ubuntu-18-v1.0.1

### Build Version: ubuntu-18-v1.0.1

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
PGID=900
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Mar 24 20:23 /app
drwxr-xr-x 4 user user 4096 Mar 24 20:27 /config
drwxr-xr-x 1 user user 4096 Mar 24 20:23 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apt-get

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
gcc-8-base/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
gpgv/now 2.2.4-1ubuntu1.2 amd64 [installed,local]
grep/now 3.1-2build1 amd64 [installed,local]
gzip/now 1.6-5ubuntu1 amd64 [installed,local]
hostname/now 3.20 amd64 [installed,local]
init-system-helpers/now 1.51 all [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1 amd64 [installed,local]
libc6/now 2.27-3ubuntu1 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libext2fs2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libfdisk1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libffi6/now 3.2.1-8 amd64 [installed,local]
libgcc1/now 1:8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libgcrypt20/now 1.8.1-4ubuntu1.2 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-2 amd64 [installed,local]
libgnutls30/now 3.5.18-1ubuntu1.3 amd64 [installed,local]
libgpg-error0/now 1.27-6 amd64 [installed,local]
libhogweed4/now 3.4-1 amd64 [installed,local]
libidn2-0/now 2.0.4-1.1ubuntu0.2 amd64 [installed,local]
liblz4-1/now 0.0~r131-2ubuntu3 amd64 [installed,local]
liblzma5/now 5.2.2-1.3 amd64 [installed,local]
libmount1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libncurses5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libncursesw5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libnettle6/now 3.4-1 amd64 [installed,local]
libp11-kit0/now 0.23.9-2 amd64 [installed,local]
libpam-modules/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-modules-bin/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpam-runtime/now 1.1.8-3.6ubuntu2.18.04.1 all [installed,local]
libpam0g/now 1.1.8-3.6ubuntu2.18.04.1 amd64 [installed,local]
libpcre3/now 2:8.39-9 amd64 [installed,local]
libprocps6/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
libseccomp2/now 2.4.1-0ubuntu0.18.04.2 amd64 [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libss2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libssl1.1/now 1.1.1-1ubuntu2.1~18.04.5 amd64 [installed,local]
libstdc++6/now 8.3.0-26ubuntu1~18.04 amd64 [installed,local]
libsystemd0/now 237-3ubuntu10.39 amd64 [installed,local]
libtasn1-6/now 4.13-2 amd64 [installed,local]
libtinfo5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libudev1/now 237-3ubuntu10.39 amd64 [installed,local]
libunistring2/now 0.9.9-0ubuntu2 amd64 [installed,local]
libuuid1/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
libzstd1/now 1.3.3+dfsg-2ubuntu1.1 amd64 [installed,local]
login/now 1:4.5-1ubuntu2 amd64 [installed,local]
lsb-base/now 9.20170808ubuntu1 all [installed,local]
mawk/now 1.3.3-17ubuntu3 amd64 [installed,local]
mount/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
ncurses-base/now 6.1-1ubuntu1.18.04 all [installed,local]
ncurses-bin/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
openssl/now 1.1.1-1ubuntu2.1~18.04.5 amd64 [installed,local]
passwd/now 1:4.5-1ubuntu2 amd64 [installed,local]
perl-base/now 5.26.1-6ubuntu0.3 amd64 [installed,local]
procps/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
sed/now 4.4-2 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
sysvinit-utils/now 2.88dsf-59.10ubuntu1 amd64 [installed,local]
tar/now 1.29b-2ubuntu0.1 amd64 [installed,local]
tzdata/now 2019c-0ubuntu0.18.04 all [installed,local]
ubuntu-keyring/now 2018.09.18.1~18.04.0 all [installed,local]
util-linux/now 2.31.1-0.4ubuntu3.5 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]

```

</p>
</details>
</section>

</main>