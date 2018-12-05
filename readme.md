Proof of concept to see if these kinds of testing can be automated with docker.

[![asciicast](https://asciinema.org/a/3jd7rbxySy3Oy9b7u7qk5yf2r.png)](https://asciinema.org/a/3jd7rbxySy3Oy9b7u7qk5yf2r)


# build out the images

```sh
$ docker build -t 'ganache-cli:8' ./v8
$ docker build -t 'ganache-cli:9' ./v9
$ docker build -t 'ganache-cli:10' ./v10
$ docker build -t 'ganache-cli:11' ./v11
```

# start and test one image

```sh
# start image tagged ganache-cli:8
# currently this port isn't being used by host os
docker run -p 8545:8545 ganache-cli:8

# A container is created and is listed by
docker stats

# attach and run test file
# ie ... 3939811b02c8

# you can specify only as many symbols in the name to make it unique
# in my case since there is only one container running, '393' is sufficient

$ docker exec -it 393 bash

# you should be in the /app directory of the container
# test the code with

$# node index.js
```
