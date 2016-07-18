---
layout: post
title:  "Never install a database again"
date:   2016-07-17 23:28:00
categories: personal recurse-center
comments_enabled: true
---

Yesterday I went to [FISL][1] to watch some of the talks. I learned a lot in just a few hours and got impressed how networking and events such as conferences can make participants to learn such amount of content in just few time.

Some of the talks I went to listen were about [Docker][2] and others about UX and [MongoDB][3].

# Docker

The [speaker][4] of the docker talk I went to see, said an interesting phrase: "Never install a database again". His point was that Docker allowed us to have the service we need without having to install in a local environment again.

Some years ago, when we wanted to to have development environments which we could share with someone else, we created a [Vagrant][5] image. Which was a virtualized, full installation of a operating system, the databases required, and the libraries required. 

Whenever we needed to upgrade a component in that image (lets say a new version of ruby), you needed to create a new image and distribute it again. We can say that the image would be large.

Docker allows to share a container (which happens to be a minimal image of a operating system which only provides a single service). By service we can assume a "Database", or a "Web Server", or **any other type of application communicates via network socket**.

# Docker composer

What most impressed me was that in a 1 hour time, it was shown how to generate 4 development environments by using [Docker Compose][6]. 

With Docker Compose it is possible to define the services which interact with you application. It is basically a way to define multi-container environment for your application in which each container contains a part of your application.

In order to define the multi-container environment, the developer has to set up a `docker-compose.yml` which described the application. More information [here][6].

# Not installing MongoDB as example (but having available)

Cool, but I just want to benefit to install easily a Database, not using composer or anything like that yet! Let`s try MongoDB.

In order to achieve this, we can follow the steps:

1. Install Docker, in my case, I installed [Docker for Mac][7]. There is also the [Windows][8] version, and of course the linuxes versions which depends on your linux flavor you use.

2. All next steps are on the terminals. Ensure your deamon is running.

         $ docker version
         Client:
          Version:      1.12.0-rc2
          API version:  1.24
          Go version:   go1.6.2
          Git commit:   906eacd
          Built:        Fri Jun 17 20:35:33 2016
          OS/Arch:      darwin/amd64
          Experimental: true
         Cannot connect to the Docker daemon. Is the docker daemon running on this host?

If you get that, you need to ensure that Docker deamon is running. In that case you will get something similar to:

        $ docker version
        Client:
         Version:      1.12.0-rc2
         API version:  1.24
         Go version:   go1.6.2
         Git commit:   906eacd
         Built:        Fri Jun 17 20:35:33 2016
         OS/Arch:      darwin/amd64
         Experimental: true
        
        Server:
         Version:      1.12.0-rc2
         API version:  1.24
         Go version:   go1.6.2
         Git commit:   a7119de
         Built:        Fri Jun 17 22:09:20 2016
         OS/Arch:      linux/amd64
         Experimental: true`


3. Get the image you are looking for. Also if you have a chance, browse for it on [Docker Hub][9]. For mongo it is [here][10]. For getting the image, use `docker pull`

        $ docker pull mongo
        Using default tag: latest
        latest: Pulling from library/mongo
        8ceedfe606fc: Already exists
        de56a622d4ac: Already exists
        6f6965220a2d: Already exists
        290580b9cb91: Already exists
        74518025c1d4: Already exists
        7caf7e3d8fb7: Pull complete
        dcfe9afaf914: Pull complete
        b3c5b8f22de4: Pull complete
        b66f9b8214cf: Pull complete
        Digest:         sha256:fc89af57055910959cd94c3f852150fc0dafc95e2b081            b57d109711dbcf0d506
        Status: Downloaded newer image for mongo:latest

4. You are ready now, just run the image my forwarding the port of the service you need:

        $ docker run -d -p 27017:27017 -p 28017:28017 mongo
        
        curl localhost:27017
        It looks like you are trying to access MongoDB over HTTP on the native driver port.

5. It worked!

Now I have a working mongodb service running on my machine and I am ready to learn Mongo! 

# Conclusion

It is possible to avoid the hassle of installing software which is not always necesary on your computer by using Docker. Docker also provides mechanisms for developers to create virtual environments which are replicable on any machine which runs Dockers thanks to the container technology.

[1]: http://softwarelivre.org/fisl17
[2]: https://www.docker.com/
[3]: https://www.mongodb.com/
[4]: https://twitter.com/paulodiovani
[5]: https://www.vagrantup.com/
[6]: https://docs.docker.com/compose/
[7]: https://docs.docker.com/engine/installation/mac/
[8]: https://docs.docker.com/engine/installation/windows/
[9]: https://hub.docker.com/
[10]: https://hub.docker.com/_/mongo/