## Test Results docker-base-image

## Test's: 7/7 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.1 | PASSED |
| Test Init Scripts for: debian-11-v1.0.1 | PASSED |
| Test Service Scripts for: debian-11-v1.0.1 | PASSED |
| Test Init Scripts for: ubuntu-18-v1.0.1 | PASSED |
| Test Service Scripts for: ubuntu-18-v1.0.1 | PASSED |
| Run shell check for: docker-base-image | PASSED |

<main>

<section markdown="1">
 
## ShellCheck Results

<details><summary>Expand</summary><blockquote><p>

<details><summary>File: `rootfs/usr/local/bin/pkg-manager`</summary><p>

```

In /workspace/rootfs/usr/local/bin/pkg-manager line 6:
    log $(basename $0) "not_supported: $(basename "$0") doesn't support this package manager."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/pkg-manager line 19:
    log $(basename $0) "The Package Manager is $MANAGER"
        ^------------^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `rootfs/usr/local/bin/check_and_terminate_process`</summary><p>

```

In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 4:
	log $(basename $0) "usage: $(basename "$0") PROCESS_NAME
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 23:
		log $(basename $0) "Previous instance of $1 detected. Terminating it . . ."
                    ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 24:
		kill -15 $(pgrep -o $1) # -15 is SIGTERM
                         ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 27:
		for i in $(seq 1 5); do
                ^-^ SC2034: i appears unused. Verify use (or export if used externally).


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 34:
			log $(basename $0) "Previous instance of $1 still running after 5 seconds. Killing it . . ."
                            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 35:
			kill -9 $(pgrep -o $1) # -9 is SIGKILL
                                ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/check_and_terminate_process line 60:
if [ $(get_number_of_processes $1) -ne 0 ]; then
     ^---------------------------^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2034 -- i appears unused. Verify use (or ...
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `rootfs/usr/local/bin/inst-pkg`</summary><p>

```

In /workspace/rootfs/usr/local/bin/inst-pkg line 9:
    log $(basename $0) "usage: $(basename "$0") [--virtual NAME ] PKG [PKG...]"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 14:
    log $(basename $0) "not_supported: $(basename "$0") doesn't support this package manager."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 19:
    log $(basename $0) "Cleaning up..."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 42:
    log $(basename $0) "Installing package(s)..."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 45:
                        log $(basename $0) "Updating packages. . . "
                            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 47:
                        log $(basename $0) "Installing $@"
                            ^------------^ SC2046: Quote this to prevent word splitting.
                                                       ^-- SC2145: Argument mixes string and array. Use * or separate argument.


In /workspace/rootfs/usr/local/bin/inst-pkg line 51:
                        log $(basename $0) "Installing $@"
                            ^------------^ SC2046: Quote this to prevent word splitting.
                                                       ^-- SC2145: Argument mixes string and array. Use * or separate argument.


In /workspace/rootfs/usr/local/bin/inst-pkg line 72:
    if [ ! -z "PKGS_ALREADY_INSTALLED" ]; then
         ^-- SC2236: Use -n instead of ! -z.
               ^--------------------^ SC2157: Argument to -z is always false due to literal strings.


In /workspace/rootfs/usr/local/bin/inst-pkg line 73:
        [ -z $(echo $PKGS_ALREADY_INSTALLED | sed 's/[[:space:]]\+//g' ) ] || log $(basename $0) "Already installed: $PKGS_ALREADY_INSTALLED"
             ^-- SC2046: Quote this to prevent word splitting.
                                                                                  ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 75:
    if [ ! -z "PKGS_TO_INSTALL" ]; then
         ^-- SC2236: Use -n instead of ! -z.
               ^-------------^ SC2157: Argument to -z is always false due to literal strings.


In /workspace/rootfs/usr/local/bin/inst-pkg line 76:
        [ -z $(echo $PKGS_TO_INSTALL | sed 's/[[:space:]]\+//g' ) ] || log $(basename $0) "To be installed: $PKGS_TO_INSTALL"
             ^-- SC2046: Quote this to prevent word splitting.
                                                                           ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 81:
    log $(basename $0) "Ensuring that everything was installed"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 83:
    for PKG in "$*"
               ^--^ SC2066: Since you double quoted this, it will not word split, and the loop will only run once.


In /workspace/rootfs/usr/local/bin/inst-pkg line 91:
        log $(basename $0) "Successfully installed: $@"
            ^------------^ SC2046: Quote this to prevent word splitting.
                                                    ^-- SC2145: Argument mixes string and array. Use * or separate argument.


In /workspace/rootfs/usr/local/bin/inst-pkg line 94:
        log $(basename $0) "The following packages couldn't be installed: $UNINSTALLED_PKGS"
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 117:
    log $(basename $0) "This script must be run as root!"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 126:
. pkg-manager
  ^---------^ SC1091: Not following: pkg-manager was not specified as input (see shellcheck -x).


In /workspace/rootfs/usr/local/bin/inst-pkg line 134:
        log $(basename $0) "No virtual packages listed..."
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 139:
    log $(basename $0) "Package Group Name: $VIRTUAL_PKG"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 141:
        log $(basename $0) "ERROR: Virtual Package '$VIRTUAL_PKG' already exists..."
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/inst-pkg line 151:
if [ ! -z "$PKGS_TO_INSTALL" ]; then 
     ^-- SC2236: Use -n instead of ! -z.

For more information:
  https://www.shellcheck.net/wiki/SC2066 -- Since you double quoted this, it ...
  https://www.shellcheck.net/wiki/SC2145 -- Argument mixes string and array. ...
  https://www.shellcheck.net/wiki/SC2157 -- Argument to -z is always false du...

```

</p></details>

<details><summary>File: `rootfs/usr/local/bin/rm-pkg`</summary><p>

```

In /workspace/rootfs/usr/local/bin/rm-pkg line 9:
    log $(basename $0) "usage: $(basename "$0") PKG [PKG...]"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/rm-pkg line 14:
    log $(basename $0) "not_supported: $(basename "$0") doesn't support this package manager."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/rm-pkg line 19:
    log $(basename $0) "Cleaning up..."
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/rm-pkg line 42:
    log $(basename $0) "Removing package(s) $@"
        ^------------^ SC2046: Quote this to prevent word splitting.
                                            ^-- SC2145: Argument mixes string and array. Use * or separate argument.


In /workspace/rootfs/usr/local/bin/rm-pkg line 45:
                        apt-get -q purge -y $@
                                            ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In /workspace/rootfs/usr/local/bin/rm-pkg line 49:
                        apk --no-cache del $@
                                           ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In /workspace/rootfs/usr/local/bin/rm-pkg line 61:
    log $(basename $0) "This script must be run as root!"
        ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/usr/local/bin/rm-pkg line 70:
. pkg-manager
  ^---------^ SC1091: Not following: pkg-manager was not specified as input (see shellcheck -x).

For more information:
  https://www.shellcheck.net/wiki/SC2068 -- Double quote array expansions to ...
  https://www.shellcheck.net/wiki/SC2145 -- Argument mixes string and array. ...
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `rootfs/etc/services.d/cron/run`</summary><p>

```

In /workspace/rootfs/etc/services.d/cron/run line 3:
. pkg-manager
  ^---------^ SC1091: Not following: pkg-manager was not specified as input (see shellcheck -x).

For more information:
  https://www.shellcheck.net/wiki/SC1091 -- Not following: pkg-manager was no...

```

</p></details>

<details><summary>File: `rootfs/etc/cont-init.d/10-display-container-info`</summary><p>

```

In /workspace/rootfs/etc/cont-init.d/10-display-container-info line 3:
log $(basename $0) "
    ^------------^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `rootfs/etc/cont-init.d/05-init-mounted-folders`</summary><p>

```

In /workspace/rootfs/etc/cont-init.d/05-init-mounted-folders line 9:
	log $(basename $0) "First boot with mounted /config/data detected."
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/etc/cont-init.d/05-init-mounted-folders line 17:
	log $(basename $0) "First boot with mounted /config/log detected."
            ^------------^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

<details><summary>File: `rootfs/etc/cont-init.d/01-users-and-groups`</summary><p>

```

In /workspace/rootfs/etc/cont-init.d/01-users-and-groups line 9:
	log $(basename $0) "Changing user 'user' to $USERNAME"
            ^------------^ SC2046: Quote this to prevent word splitting.


In /workspace/rootfs/etc/cont-init.d/01-users-and-groups line 14:
	log $(basename $0) "Changing group 'user' to $GROUPNAME"
            ^------------^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...

```

</p></details>

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

## christopher102994/docker-base-image:alpine-3.10-v1.0.1

### Build Version: alpine-3.10-v1.0.1

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
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Sep 10 22:43 /app
drwxr-xr-x 4 user user 4096 Sep 10 22:48 /config
drwxr-xr-x 1 user user 4096 Sep 10 22:43 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apk

```

</p></details>

### Package Info

<details><summary>Expand</summary><p>

```
WARNING: Ignoring APKINDEX.00740ba1.tar.gz: No such file or directory
WARNING: Ignoring APKINDEX.d8b2a6f4.tar.gz: No such file or directory
musl-1.1.22-r3
busybox-1.30.1-r4
alpine-baselayout-3.1.2-r0
alpine-keys-2.1-r2
libcrypto1.1-1.1.1g-r0
libssl1.1-1.1.1g-r0
ca-certificates-cacert-20191127-r2
libtls-standalone-2.9.1-r0
ssl_client-1.30.1-r4
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
ca-certificates-20191127-r2
libacl-2.2.52-r6
libattr-2.4.48-r0
coreutils-8.31-r0
linux-pam-1.3.0-r1
shadow-4.6-r2
tzdata-2020a-r0

```

</p></details>
</section>

<section markdown="1">

## christopher102994/docker-base-image:debian-11-v1.0.1

### Build Version: debian-11-v1.0.1

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
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Sep 10 22:44 /app
drwxr-xr-x 4 user user 4096 Sep 10 22:49 /config
drwxr-xr-x 1 user user 4096 Sep 10 22:44 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apt-get
[services.d] done.

```

</p></details>

### Package Info

<details><summary>Expand</summary><p>

```

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Listing...
adduser/now 3.118 all [installed,local]
apt/now 2.1.10 amd64 [installed,local]
base-files/now 11 amd64 [installed,local]
base-passwd/now 3.5.47 amd64 [installed,local]
bash/now 5.0-7 amd64 [installed,local]
bsdutils/now 1:2.36-3 amd64 [installed,local]
ca-certificates/now 20200601 all [installed,local]
coreutils/now 8.30-3+b1 amd64 [installed,local]
cron/now 3.0pl1-136 amd64 [installed,local]
dash/now 0.5.10.2-7 amd64 [installed,local]
debconf/now 1.5.74 all [installed,local]
debian-archive-keyring/now 2019.1 all [installed,local]
debianutils/now 4.9.1 amd64 [installed,local]
diffutils/now 1:3.7-3 amd64 [installed,local]
dpkg/now 1.20.5 amd64 [installed,local]
e2fsprogs/now 1.45.6-1 amd64 [installed,local]
findutils/now 4.7.0-1 amd64 [installed,local]
gcc-10-base/now 10.2.0-6 amd64 [installed,local]
gcc-9-base/now 9.3.0-15 amd64 [installed,local]
gpgv/now 2.2.20-1 amd64 [installed,local]
grep/now 3.4-1 amd64 [installed,local]
gzip/now 1.10-2 amd64 [installed,local]
hostname/now 3.23 amd64 [installed,local]
init-system-helpers/now 1.58 all [installed,local]
libacl1/now 2.2.53-8 amd64 [installed,local]
libapt-pkg6.0/now 2.1.10 amd64 [installed,local]
libattr1/now 1:2.4.48-5 amd64 [installed,local]
libaudit-common/now 1:2.8.5-3 all [installed,local]
libaudit1/now 1:2.8.5-3+b1 amd64 [installed,local]
libblkid1/now 2.36-3 amd64 [installed,local]
libbz2-1.0/now 1.0.8-4 amd64 [installed,local]
libc-bin/now 2.31-3 amd64 [installed,local]
libc6/now 2.31-3 amd64 [installed,local]
libcap-ng0/now 0.7.9-2.2 amd64 [installed,local]
libcom-err2/now 1.45.6-1 amd64 [installed,local]
libcrypt1/now 1:4.4.17-1 amd64 [installed,local]
libdb5.3/now 5.3.28+dfsg1-0.6 amd64 [installed,local]
libdebconfclient0/now 0.253 amd64 [installed,local]
libext2fs2/now 1.45.6-1 amd64 [installed,local]
libffi7/now 3.3-4 amd64 [installed,local]
libgcc-s1/now 10.2.0-6 amd64 [installed,local]
libgcrypt20/now 1.8.6-2 amd64 [installed,local]
libgmp10/now 2:6.2.0+dfsg-6 amd64 [installed,local]
libgnutls30/now 3.6.14-2+b1 amd64 [installed,local]
libgpg-error0/now 1.38-2 amd64 [installed,local]
libhogweed6/now 3.6-2 amd64 [installed,local]
libidn2-0/now 2.3.0-1 amd64 [installed,local]
liblz4-1/now 1.9.2-2 amd64 [installed,local]
liblzma5/now 5.2.4-1+b1 amd64 [installed,local]
libmount1/now 2.36-3 amd64 [installed,local]
libncurses6/now 6.2-1 amd64 [installed,local]
libncursesw6/now 6.2-1 amd64 [installed,local]
libnettle8/now 3.6-2 amd64 [installed,local]
libp11-kit0/now 0.23.21-2 amd64 [installed,local]
libpam-modules-bin/now 1.3.1-5 amd64 [installed,local]
libpam-modules/now 1.3.1-5 amd64 [installed,local]
libpam-runtime/now 1.3.1-5 all [installed,local]
libpam0g/now 1.3.1-5 amd64 [installed,local]
libpcre2-8-0/now 10.34-7 amd64 [installed,local]
libpcre3/now 2:8.39-13 amd64 [installed,local]
libprocps8/now 2:3.3.16-5 amd64 [installed,local]
libseccomp2/now 2.4.3-1+b1 amd64 [installed,local]
libselinux1/now 3.1-2 amd64 [installed,local]
libsemanage-common/now 3.1-1 all [installed,local]
libsemanage1/now 3.1-1 amd64 [installed,local]
libsepol1/now 3.1-1 amd64 [installed,local]
libsmartcols1/now 2.36-3 amd64 [installed,local]
libss2/now 1.45.6-1 amd64 [installed,local]
libssl1.1/now 1.1.1g-1 amd64 [installed,local]
libstdc++6/now 10.2.0-6 amd64 [installed,local]
libsystemd0/now 246.4-1 amd64 [installed,local]
libtasn1-6/now 4.16.0-2 amd64 [installed,local]
libtinfo6/now 6.2-1 amd64 [installed,local]
libudev1/now 246.4-1 amd64 [installed,local]
libunistring2/now 0.9.10-4 amd64 [installed,local]
libuuid1/now 2.36-3 amd64 [installed,local]
libzstd1/now 1.4.5+dfsg-4 amd64 [installed,local]
login/now 1:4.8.1-1 amd64 [installed,local]
logsave/now 1.45.6-1 amd64 [installed,local]
lsb-base/now 11.1.0 all [installed,local]
mawk/now 1.3.4.20200120-2 amd64 [installed,local]
mount/now 2.36-3 amd64 [installed,local]
ncurses-base/now 6.2-1 all [installed,local]
ncurses-bin/now 6.2-1 amd64 [installed,local]
openssl/now 1.1.1g-1 amd64 [installed,local]
passwd/now 1:4.8.1-1 amd64 [installed,local]
perl-base/now 5.30.3-4 amd64 [installed,local]
procps/now 2:3.3.16-5 amd64 [installed,local]
sed/now 4.7-1 amd64 [installed,local]
sensible-utils/now 0.0.12+nmu1 all [installed,local]
sysvinit-utils/now 2.96-4 amd64 [installed,local]
tar/now 1.30+dfsg-7 amd64 [installed,local]
tzdata/now 2020a-1 all [installed,local]
util-linux/now 2.36-3 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-2 amd64 [installed,local]

```

</p></details>
</section>

<section markdown="1">

## christopher102994/docker-base-image:ubuntu-18-v1.0.1

### Build Version: ubuntu-18-v1.0.1

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
drwxr-xr-x 1 user user 4096 Sep 10 22:46 /app
drwxr-xr-x 4 user user 4096 Sep 10 22:50 /config
drwxr-xr-x 1 user user 4096 Sep 10 22:46 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apt-get

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
e2fsprogs/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
fdisk/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
findutils/now 4.6.0+git+20170828-2 amd64 [installed,local]
gcc-8-base/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
gpgv/now 2.2.4-1ubuntu1.2 amd64 [installed,local]
grep/now 3.1-2build1 amd64 [installed,local]
gzip/now 1.6-5ubuntu1 amd64 [installed,local]
hostname/now 3.20 amd64 [installed,local]
init-system-helpers/now 1.51 all [installed,local]
libacl1/now 2.2.52-3build1 amd64 [installed,local]
libapt-pkg5.0/now 1.6.12ubuntu0.1 amd64 [installed,local]
libattr1/now 1:2.4.47-2build1 amd64 [installed,local]
libaudit-common/now 1:2.8.2-1ubuntu1 all [installed,local]
libaudit1/now 1:2.8.2-1ubuntu1 amd64 [installed,local]
libblkid1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libbz2-1.0/now 1.0.6-8.1ubuntu0.2 amd64 [installed,local]
libc-bin/now 2.27-3ubuntu1.2 amd64 [installed,local]
libc6/now 2.27-3ubuntu1.2 amd64 [installed,local]
libcap-ng0/now 0.7.7-3.1 amd64 [installed,local]
libcom-err2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libdb5.3/now 5.3.28-13.1ubuntu1.1 amd64 [installed,local]
libdebconfclient0/now 0.213ubuntu1 amd64 [installed,local]
libext2fs2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libfdisk1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libffi6/now 3.2.1-8 amd64 [installed,local]
libgcc1/now 1:8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libgcrypt20/now 1.8.1-4ubuntu1.2 amd64 [installed,local]
libgmp10/now 2:6.1.2+dfsg-2 amd64 [installed,local]
libgnutls30/now 3.5.18-1ubuntu1.4 amd64 [installed,local]
libgpg-error0/now 1.27-6 amd64 [installed,local]
libhogweed4/now 3.4-1 amd64 [installed,local]
libidn2-0/now 2.0.4-1.1ubuntu0.2 amd64 [installed,local]
liblz4-1/now 0.0~r131-2ubuntu3 amd64 [installed,local]
liblzma5/now 5.2.2-1.3 amd64 [installed,local]
libmount1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
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
libseccomp2/now 2.4.3-1ubuntu3.18.04.3 amd64 [installed,local]
libselinux1/now 2.7-2build2 amd64 [installed,local]
libsemanage-common/now 2.7-2build2 all [installed,local]
libsemanage1/now 2.7-2build2 amd64 [installed,local]
libsepol1/now 2.7-1 amd64 [installed,local]
libsmartcols1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libss2/now 1.44.1-1ubuntu1.3 amd64 [installed,local]
libssl1.1/now 1.1.1-1ubuntu2.1~18.04.6 amd64 [installed,local]
libstdc++6/now 8.4.0-1ubuntu1~18.04 amd64 [installed,local]
libsystemd0/now 237-3ubuntu10.42 amd64 [installed,local]
libtasn1-6/now 4.13-2 amd64 [installed,local]
libtinfo5/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
libudev1/now 237-3ubuntu10.42 amd64 [installed,local]
libunistring2/now 0.9.9-0ubuntu2 amd64 [installed,local]
libuuid1/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
libzstd1/now 1.3.3+dfsg-2ubuntu1.1 amd64 [installed,local]
login/now 1:4.5-1ubuntu2 amd64 [installed,local]
lsb-base/now 9.20170808ubuntu1 all [installed,local]
mawk/now 1.3.3-17ubuntu3 amd64 [installed,local]
mount/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
ncurses-base/now 6.1-1ubuntu1.18.04 all [installed,local]
ncurses-bin/now 6.1-1ubuntu1.18.04 amd64 [installed,local]
openssl/now 1.1.1-1ubuntu2.1~18.04.6 amd64 [installed,local]
passwd/now 1:4.5-1ubuntu2 amd64 [installed,local]
perl-base/now 5.26.1-6ubuntu0.3 amd64 [installed,local]
procps/now 2:3.3.12-3ubuntu1.2 amd64 [installed,local]
sed/now 4.4-2 amd64 [installed,local]
sensible-utils/now 0.0.12 all [installed,local]
sysvinit-utils/now 2.88dsf-59.10ubuntu1 amd64 [installed,local]
tar/now 1.29b-2ubuntu0.1 amd64 [installed,local]
tzdata/now 2020a-0ubuntu0.18.04 all [installed,local]
ubuntu-keyring/now 2018.09.18.1~18.04.0 all [installed,local]
util-linux/now 2.31.1-0.4ubuntu3.6 amd64 [installed,local]
zlib1g/now 1:1.2.11.dfsg-0ubuntu2 amd64 [installed,local]

```

</p></details>
</section>

</main>