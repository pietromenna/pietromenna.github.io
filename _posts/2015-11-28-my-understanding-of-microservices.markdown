---
layout: post
title:  "My understanding of Microservices"
date:   2015-11-28 15:10:00
categories: personal recurse-center microservices
comments_enabled: true
---

No matter where you look into the Internet, of the trends you always read the same buzzwords: Big Data, DevOps and Microservices. I plan to explain what I understood the talks I watched [here][5], [here][6] and some others, but I am in no way an expert on the subject. 

# Monoliths and Microservices

Before begin, lets imagine that we are a shop with three "components": Finance & Accounting, Distribution and the Store. A component would be a working group of the organization represented in the system. 

Usually applications are built as ***monoliths***. In our example, it means, that in the same system, we have all the components together. They share the same source code, technology stack and datastore. It also runs everything on the same server. So imagine that we have to reset the system because of a problem with the Distribution; the "Finance & Accounting" will also be down during the system reset.

Oh, I forgot, there is the IT group which is in charged of all the applications!

Lets imagine now the same shop, but that runs as ***microservices***. We have the same "components" with the only exception of the IT group. Instead, each of the groups has like 3 - 4 people working on only on their specific application. For example, the "store" group, only works on the "store". The people from the *Store* may decide to use *NodeJS* and *MongoDB* while the *Finance & accounting* people would prefer *Ruby on Rails* and *Postgres*. 

Each group decides its own technology stack, and if one of the groups needs to reset their system, not all groups are offline because of it.

It is time to add another buzzword: [The Conway`s law][1], which states: 

> "...Organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations...”

Back to our example, everyone agrees that in the shop all the "components" needs to talk to each other in real life. They all depend on each other so the "Store" is successful.

## In microservices world, every user request is a sequence of requests

Let's say I am an external user, I want to buy something on the "store", when I buy something on the store, I do not know and I do not care if they are all in one system. I just expect my goods to be delivered and to pay for it.

When I buy something, behind the scenes, the **Store component** would communicate with the **distribution component** in charged with the shipping. Also after getting billed, probably the F&A component would get notified.

As you can see in this example, since they are all different systems (maybe even computers), as a user I do not know that. Also, you can see that the system is **distributed**.

# Let's talk in "Developer's terms"

- ***RESTful Architecture***: the communication should occur in RESTful way. In many places you can read this as the ***Smart endpoints, dumb pipes***.
- ***Distributed Data Governance***: each of the components decides its technology stack, also its data store. This is because you can choose depending on the requirements of each component. Remember, not every problem is a nail and not every solution is a hammer.
- ***Single Responsibility***: The store component, is only responsible for being a good store for customer`s to buy. Nothing else! One Component: one responsibility.
- ***You share nothing***: A developer from the Store does not have access to the datastore or even code from the F&A component. All the communication should occur via the common interface.
- ***Infrastructure automations***: Since you own your stack, you probably need to know how to generate your own system and how to run it. Developers probably woud need to have code as infrastructure to take care of its own system.

# Some of the origins

It is said that Microservices is a consequence of Conway's Law and DevOps. It is also said many ideas come from [Amazon][2].

In particular, Amazon is known for the [two pizza size team][4] (a team should have no more people than the amount of people who can be fed with 2 American pizzas). This means, the team should have a size of less than 10-12 people, and most important have the **accountability** and **autonomy**to execute its task. 

Microservices teams also follow the ***"Products, not projects"*** mentality. We can say "Product" is "Component". Each team should take care of its ***Product*** even the operations side: this is also known as the ***"You build it, you run it!"***.

# Implications & Conclusion

For developers, everything should be thought from day zero to be externalizable to be able to work on a microservices world.

Also, it has some drawback, since it is distributed system, the problems which may occur are more difficult!

[1]: https://en.wikipedia.org/wiki/Conway%27s_law
[2]: https://www.amazon.com
[4]: http://blog.jasoncrawford.org/two-pizza-teams
[5]: https://www.youtube.com/watch?v=wgdBVIX9ifA
[6]: https://www.youtube.com/watch?v=C4c0pkY4NgQ
