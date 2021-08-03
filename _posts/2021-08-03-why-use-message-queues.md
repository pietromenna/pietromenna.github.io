---
layout: post
title:  "Why use message queues?"
date:   2021-08-03 20:20:00
categories: personal
comments_enabled: true
---

A few weeks ago, I interviewed a candidate who worked with Message Queues, and I asked why you would use one? What is the architectural advantage of using it? The candidate did not know how to answer, so I explained what I thought they were for, and this post is because maybe it is helpful to others. 

Let say you just opened a pizza restaurant and hired two employees: a waiter and a cooker. You just have 2 tables. Since you just opened the shop, the waiter just walks to the kitchen and screams the order. Everything is alright, you can fulfill all orders in time, and everyone is happy. The cooker must start working on what he just hears, and as soon as he finishes, he calls the waiter to take the delicious pizza to the table.

This is what we call synchronous communication. The waiter is not waiting for the cooker to fulfill the order, but he waits for an acknowledgment. 

![message-queue-1](/public/message-queue-1.png "Shouting method looks like")

Let’s say your restaurant grows due to the great pizza you deliver, and you are still using the same system (shout + acknowledgment). At some point in time, the cooker in the kitchen might be so busy that it misses one order here. As a result, your restaurant has unhappy customers, and you lose popularity. So, you invent a system that works better: you waiter has a piece of paper that describes an entire order for a given table that he leaves in the kitchen. As soon as a whole order is ready, the guy in the kitchen calls the waiter to fulfill the order.

This new system has two advantages: you stop losing orders because people working in the kitchen were too busy to listen to new orders and allow more than one cooker to work on the same orders. In addition, waiters now leave the orders in an “orders queue,” and kitchen workers process “orders.” Waiters are not particularly interested if someone is there to pick orders immediately in the kitchen now.

![message-queue-2](/public/message-queue-2.png "Shouting method looks like")

Ok, now you saw the queue word.
Message queues allow asynchronously exchanging messages between services. This means that the service that posted something is not there waiting for something to happen to continue, or we miss something if the processor is available to take a message. We do not even know if the message will be processed at all.

An HTTP post is similar to the shout method. It is synchronous communication that can be lost if the service is too busy processing something else. With the message queue, you stop losing messages by decoupling the systems.

Now you may have noticed I added more waiters and workers in the kitchen picture. This is because you no longer care about “who” processes the order. Instead, it may now be a group of services or replicas of the service, allowing you to scale the number of processors you may have. This is what it means when people say message queues will enable you to “scale.”

There are other points that I could mention, but the idea was to share this simple explanation with a story. I hope you enjoyed it.