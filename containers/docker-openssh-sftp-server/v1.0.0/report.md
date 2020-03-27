## Test Results docker-openssh-sftp-server

## Test's: 3/3 Passed

| Test | Result |
| ----------------------- | --- |
| Test Init Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Test Service Scripts for: alpine-3.10-v1.0.0 | PASSED |
| Run shell check for: docker-openssh-sftp-server | PASSED |

<div data-role="main" class="ui-content">
<div data-role="collapsible"><h2>ShellCheck Results</h2><p>

<div data-role="collapsible"><h2>File: rootfs/etc/services.d/10-openssh-server/run</h2>
<p>
<section markdown="1"> 

```

```

</p></div>

<div data-role="collapsible"><h2>File: rootfs/etc/cont-init.d/50-setup-user-from-env</h2>
<p>
<section markdown="1"> 

```

In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 9:
if [ $USERNAME != $DEFAULT_USERNAME ]; then
     ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
if [ "$USERNAME" != $DEFAULT_USERNAME ]; then


In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 11:
	usermod -l $USERNAME $DEFAULT_USERNAME
                   ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	usermod -l "$USERNAME" $DEFAULT_USERNAME


In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 13:
	groupmod --new-name $USERNAME $DEFAULT_USERNAME
                            ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	groupmod --new-name "$USERNAME" $DEFAULT_USERNAME


In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 17:
echo -e "$PASSWORD\n$PASSWORD" | passwd $USERNAME >/dev/null 2>&1
                                        ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
echo -e "$PASSWORD\n$PASSWORD" | passwd "$USERNAME" >/dev/null 2>&1


In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 20:
unset $USERNAME
      ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
unset "$USERNAME"


In /workspace/rootfs/etc/cont-init.d/50-setup-user-from-env line 21:
unset $PASSWORD
      ^-------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
unset "$PASSWORD"

For more information:
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...

```

</p></div>

<div data-role="collapsible"><h2>File: rootfs/etc/cont-init.d/70-generate-ssh-keys</h2>
<p>
<section markdown="1"> 

```

```

</p></div>

<div data-role="collapsible"><h2>File: rootfs/etc/cont-init.d/60-set-logging-levels</h2>
<p>
<section markdown="1"> 

```

In /workspace/rootfs/etc/cont-init.d/60-set-logging-levels line 11:
	echo $1 | tr a-z A-Z
             ^-- SC2086: Double quote to prevent globbing and word splitting.
                     ^-^ SC2018: Use '[:lower:]' to support accents and foreign alphabets.
                         ^-^ SC2019: Use '[:upper:]' to support accents and foreign alphabets.

Did you mean: 
	echo "$1" | tr a-z A-Z


In /workspace/rootfs/etc/cont-init.d/60-set-logging-levels line 15:
LOG_LEVEL=$(to_upper $LOG_LEVEL)
                     ^--------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
LOG_LEVEL=$(to_upper "$LOG_LEVEL")


In /workspace/rootfs/etc/cont-init.d/60-set-logging-levels line 19:
	QUIET|FATAL|ERROR|INFO|VERBOSE|DEBUG|DEBUG1|DEBUG2|DEBUG3|INFO)
                          ^--^ SC2221: This pattern always overrides a later one on line 19.
                                                                  ^--^ SC2222: This pattern never matches because of a previous pattern on line 19.

For more information:
  https://www.shellcheck.net/wiki/SC2221 -- This pattern always overrides a l...
  https://www.shellcheck.net/wiki/SC2222 -- This pattern never matches becaus...
  https://www.shellcheck.net/wiki/SC2018 -- Use '[:lower:]' to support accent...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/build/build_container.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/build/build_container.sh line 77:
source $SCRIPTS_DIR/load_env_files.sh $ENV
       ^----------------------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.
       ^----------^ SC2086: Double quote to prevent globbing and word splitting.
                                      ^--^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
source "$SCRIPTS_DIR"/load_env_files.sh "$ENV"


In /workspace/tools/build/build_container.sh line 80:
source $SCRIPTS_DIR/versioning.sh || true
       ^------------------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.
       ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
source "$SCRIPTS_DIR"/versioning.sh || true


In /workspace/tools/build/build_container.sh line 84:
	$SCRIPTS_DIR/make_container.sh
        ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	"$SCRIPTS_DIR"/make_container.sh


In /workspace/tools/build/build_container.sh line 89:
	$SCRIPTS_DIR/push_to_registry.sh
        ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	"$SCRIPTS_DIR"/push_to_registry.sh


In /workspace/tools/build/build_container.sh line 94:
	$SCRIPTS_DIR/push_readme_to_dockerhub.sh
        ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	"$SCRIPTS_DIR"/push_readme_to_dockerhub.sh


In /workspace/tools/build/build_container.sh line 99:
	$SCRIPTS_DIR/push_git_tag.sh
        ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	"$SCRIPTS_DIR"/push_git_tag.sh


In /workspace/tools/build/build_container.sh line 104:
	$SCRIPTS_DIR/docker_test.sh
        ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	"$SCRIPTS_DIR"/docker_test.sh

For more information:
  https://www.shellcheck.net/wiki/SC1090 -- Can't follow non-constant source....
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/push_readme_to_dockerhub.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 13:
		--data '{ "username" : "'$DOCKER_USERNAME'", "password" : "'$DOCKER_PASSWORD'" }' \
                                         ^--------------^ SC2086: Double quote to prevent globbing and word splitting.
                                                                            ^--------------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
		--data '{ "username" : "'"$DOCKER_USERNAME"'", "password" : "'"$DOCKER_PASSWORD"'" }' \


In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 20:
				--write-out %{response_code} \
                                             ^-- SC1083: This { is literal. Check expression (missing ;/\n?) or quote it.
                                                           ^-- SC1083: This } is literal. Check expression (missing ;/\n?) or quote it.


In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 25:
				$DOCKER_REPO_URL)
                                ^--------------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
				"$DOCKER_REPO_URL")


In /workspace/tools/scripts/push_readme_to_dockerhub.sh line 27:
if [ $RESPONSE_CODE -eq 200 ]; then
     ^------------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
if [ "$RESPONSE_CODE" -eq 200 ]; then

For more information:
  https://www.shellcheck.net/wiki/SC1083 -- This { is literal. Check expressi...
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/push_git_tag.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/scripts/push_git_tag.sh line 12:
		--data '{ "user" : { "email" : "$GIT_EMAIL", "password" : "$GIT_TOKEN" },
                       ^-- SC2016: Expressions don't expand in single quotes, use double quotes for that.


In /workspace/tools/scripts/push_git_tag.sh line 13:
				  "tag_name": "'$GIT_VERSION'",
                                                ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
				  "tag_name": "'"$GIT_VERSION"'",


In /workspace/tools/scripts/push_git_tag.sh line 14:
				  "target_commitish": "'$GIT_BRANCH'",
                                                        ^---------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
				  "target_commitish": "'"$GIT_BRANCH"'",


In /workspace/tools/scripts/push_git_tag.sh line 15:
				  "name": "'$GIT_VERSION'",
                                            ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
				  "name": "'"$GIT_VERSION"'",


In /workspace/tools/scripts/push_git_tag.sh line 16:
				  "body": "CI Release of '$GIT_VERSION'",
                                                          ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
				  "body": "CI Release of '"$GIT_VERSION"'",

For more information:
  https://www.shellcheck.net/wiki/SC2016 -- Expressions don't expand in singl...
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/push_to_registry.sh</h2>
<p>
<section markdown="1"> 

```

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/load_env_files.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/scripts/load_env_files.sh line 15:
		export $(egrep -v '^#' "$FILE" | xargs)
                       ^-- SC2046: Quote this to prevent word splitting.
                         ^---^ SC2196: egrep is non-standard and deprecated. Use grep -E instead.


In /workspace/tools/scripts/load_env_files.sh line 16:
		echo -e "Exporting the following vars from $FILE:\n$(cat $FILE)"
                                                                         ^---^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
		echo -e "Exporting the following vars from $FILE:\n$(cat "$FILE")"

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...
  https://www.shellcheck.net/wiki/SC2196 -- egrep is non-standard and depreca...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/make_container.sh</h2>
<p>
<section markdown="1"> 

```

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/docker_test.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/scripts/docker_test.sh line 9:
	TAG="$(cat $ENV | grep "IMAGE_TAG=" | sed 's#.*=##')"
                   ^--^ SC2086: Double quote to prevent globbing and word splitting.
                   ^--^ SC2002: Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.

Did you mean: 
	TAG="$(cat "$ENV" | grep "IMAGE_TAG=" | sed 's#.*=##')"


In /workspace/tools/scripts/docker_test.sh line 10:
	if [ ! -z "$TAG" ]; then
             ^-- SC2236: Use -n instead of ! -z.


In /workspace/tools/scripts/docker_test.sh line 20:
	-e DOCKER_SLEEP=${DOCKER_SLEEP:-60} \
                        ^-----------------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
	-e DOCKER_SLEEP="${DOCKER_SLEEP:-60}" \


In /workspace/tools/scripts/docker_test.sh line 30:
	-v $(pwd):/workspace \
           ^----^ SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...
  https://www.shellcheck.net/wiki/SC2002 -- Useless cat. Consider 'cmd < file...

```

</p></div>

<div data-role="collapsible"><h2>File: tools/scripts/versioning.sh</h2>
<p>
<section markdown="1"> 

```

In /workspace/tools/scripts/versioning.sh line 11:
if [ $? -eq 0 ]; then
     ^-- SC2181: Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.


In /workspace/tools/scripts/versioning.sh line 12:
    GIT_VERSION=$(echo $GIT_VERSION |  egrep -o '[0-9]*\.[0-9]*\.[0-9]*' )
                       ^----------^ SC2086: Double quote to prevent globbing and word splitting.
                                       ^---^ SC2196: egrep is non-standard and deprecated. Use grep -E instead.

Did you mean: 
    GIT_VERSION=$(echo "$GIT_VERSION" |  egrep -o '[0-9]*\.[0-9]*\.[0-9]*' )


In /workspace/tools/scripts/versioning.sh line 13:
    MAJOR_VERSION=$(echo $GIT_VERSION | cut -d. -f1)
                         ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
    MAJOR_VERSION=$(echo "$GIT_VERSION" | cut -d. -f1)


In /workspace/tools/scripts/versioning.sh line 14:
    MINOR_VERSION=$(echo $GIT_VERSION | cut -d. -f2)
                         ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
    MINOR_VERSION=$(echo "$GIT_VERSION" | cut -d. -f2)


In /workspace/tools/scripts/versioning.sh line 15:
    PATCH_VERSION=$(echo $GIT_VERSION | cut -d. -f3)
                         ^----------^ SC2086: Double quote to prevent globbing and word splitting.

Did you mean: 
    PATCH_VERSION=$(echo "$GIT_VERSION" | cut -d. -f3)


In /workspace/tools/scripts/versioning.sh line 24:
GIT_MESSAGE=$(git show -s --format=%s | tr a-z A-Z)
                                           ^-^ SC2018: Use '[:lower:]' to support accents and foreign alphabets.
                                               ^-^ SC2019: Use '[:upper:]' to support accents and foreign alphabets.


In /workspace/tools/scripts/versioning.sh line 61:
GIT_REPO="${GIT_REPO:-$(basename $(git rev-parse --show-toplevel))}"
                                 ^-- SC2046: Quote this to prevent word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...
  https://www.shellcheck.net/wiki/SC2018 -- Use '[:lower:]' to support accent...
  https://www.shellcheck.net/wiki/SC2019 -- Use '[:upper:]' to support accent...

```

</p></div>

</p></div></div>

<main>

<section markdown="1">
## christopher102994/docker-openssh-sftp-server:alpine-3.10-v1.0.0

### Build Version: alpine-3.10-v1.0.0

<div data-role="collapsible"><h2>Logs</h2><p>

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
drwxr-xr-x 1 user user 4096 Mar 26 00:20 /app
drwxr-xr-x 4 user user 4096 Mar 27 01:43 /config
drwxr-xr-x 1 user user 4096 Mar 26 00:20 /defaults
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
SHA256:xDdtEK+OiyOkqPT0eQA7gdLBHKbPXgEfv3ZzP26K+Rc root@f11dfab6c612
The key's randomart image is:
+--[ED25519 256]--+
| o+..     o.     |
| o+o o .   +     |
|....o . o o +    |
|.+.o . o . +     |
|. o = o S o      |
| . +.o . = .E    |
| o.+. . . . o.   |
|o + o oo + .o.   |
|o  . +o.+.o+.    |
+----[SHA256]-----+
Generating public/private rsa key pair.
Your identification has been saved in /config/.ssh/ssh_host_rsa_key.
Your public key has been saved in /config/.ssh/ssh_host_rsa_key.pub.
The key fingerprint is:
SHA256:c168a97qylrDb0Wzw0xYJ49d1KgzqTYKVoRo+7jrNmg root@f11dfab6c612
The key's randomart image is:
+---[RSA 4096]----+
|     . .       oo|
|    o . .     + +|
|   . . .     = *.|
|    .   .  .* = o|
|     o .S ..oB o |
|    . +  =+. .*  |
|   . o . o=... . |
|  E +   .o ooo   |
| . ooo  ..o**..  |
+----[SHA256]-----+
Successfully Generated SSH keys.
[cont-init.d] 70-generate-ssh-keys: exited 0.
[cont-init.d] done.
[services.d] starting services
[services.d] done.
[run]: The Package Manager is apk
Starting openssh-server
Server listening on 0.0.0.0 port 22.
Server listening on :: port 22.

```

</p></div>


<div data-role="collapsible"><h2>Package Info</h2><p>

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

</p></div>

</section>

</main>