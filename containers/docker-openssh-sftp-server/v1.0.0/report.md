## Test Results docker-openssh-sftp-server

## Test's: 3/3 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Run shell check for: docker-openssh-sftp-server | PASSED |

<main>

<section markdown="1">
 
## ShellCheck Results

<details><summary>Expand</summary><blockquote><p>

<details><summary>File: `rootfs/etc/cont-init.d/60-set-logging-levels`</summary><p>

```

In /workspace/rootfs/etc/cont-init.d/60-set-logging-levels line 11:
	echo $1 | tr a-z A-Z
                     ^-^ SC2018: Use '[:lower:]' to support accents and foreign alphabets.
                         ^-^ SC2019: Use '[:upper:]' to support accents and foreign alphabets.


In /workspace/rootfs/etc/cont-init.d/60-set-logging-levels line 19:
	QUIET|FATAL|ERROR|INFO|VERBOSE|DEBUG|DEBUG1|DEBUG2|DEBUG3|INFO)
                          ^--^ SC2221: This pattern always overrides a later one on line 19.
                                                                  ^--^ SC2222: This pattern never matches because of a previous pattern on line 19.

For more information:
  https://www.shellcheck.net/wiki/SC2221 -- This pattern always overrides a l...
  https://www.shellcheck.net/wiki/SC2222 -- This pattern never matches becaus...
  https://www.shellcheck.net/wiki/SC2018 -- Use '[:lower:]' to support accent...

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

## christopher102994/docker-openssh-sftp-server:alpine-3.10-v1.0.0

### Build Version: alpine-3.10-v1.0.0

### Logs

<details><summary>Expand</summary><p>

```
[s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[s6-init] ensuring user provided files have correct perms...exited 0.
[fix-attrs.d] applying ownership & permissions fixes...
[fix-attrs.d] 50-sftp-attrs: applying... 
[fix-attrs.d] 50-sftp-attrs: exited 0.
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
LOG_LEVEL=INFO
USERNAME=user
PGID=900
PASSWORD=password
GROUPNAME=user
-------------------------
# UID/GID of user:
-------------------------
UID: 900
GID: 900
-------------------------
# FOLDER PERMISSIONS:
-------------------------
drwxr-xr-x 1 user user 4096 Apr 14 00:00 /app
drwxr-xr-x 4 user user 4096 Apr 15 13:31 /config
drwxr-xr-x 1 user user 4096 Apr 14 00:00 /defaults
-------------------------
[cont-init.d] 10-display-container-info: exited 0.
[cont-init.d] 50-setup-user-from-env: executing... 
Successfully set USERNAME and PASSWORD.
[cont-init.d] 50-setup-user-from-env: exited 0.
[cont-init.d] 60-set-logging-levels: executing... 
Successfully set Log Level to INFO
[cont-init.d] 60-set-logging-levels: exited 0.
[cont-init.d] 70-generate-ssh-keys: executing... 
Generating public/private ed25519 key pair.
Your identification has been saved in /config/.ssh/ssh_host_ed25519_key.
Your public key has been saved in /config/.ssh/ssh_host_ed25519_key.pub.
The key fingerprint is:
SHA256:btBNnGRfWtrkAN/tDNC6hmHHmxg+QYuigpFhOiR5Pkg root@8085732c92b5
The key's randomart image is:
+--[ED25519 256]--+
| .        +.o.+  |
|+E.      +.+ %.. |
|**       o+o=.= .|
|* o   ...o* +  + |
| + . ...So.B +  o|
|. . .  o  = =    |
|   .    o  o     |
|       .         |
|                 |
+----[SHA256]-----+
Generating public/private rsa key pair.
Your identification has been saved in /config/.ssh/ssh_host_rsa_key.
Your public key has been saved in /config/.ssh/ssh_host_rsa_key.pub.
The key fingerprint is:
SHA256:ZpjzcZREFKSLYcqkginwgrfZfG0jKC/dta/Ck4Ryhis root@8085732c92b5
The key's randomart image is:
+---[RSA 4096]----+
|         +*.     |
|         o .     |
|.   . o . o      |
|+o + o = o       |
|B +.o.= S .      |
|.+o=+..*.o       |
|  +*++oo=.       |
|E oo..*o..       |
| . ..  o.o.      |
+----[SHA256]-----+
Successfully Generated SSH keys.
[cont-init.d] 70-generate-ssh-keys: exited 0.
[cont-init.d] done.
[services.d] starting services
[run]: The Package Manager is apk
Starting openssh-server
[services.d] done.
Server listening on 0.0.0.0 port 22.
Server listening on :: port 22.

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
openssh-keygen-8.1_p1-r0
openssh-server-common-8.1_p1-r0
openssh-server-8.1_p1-r0

```

</p></details>
</section>

</main>