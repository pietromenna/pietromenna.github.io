---
layout: post
title:  "Lessons learned during a Developer on Duty: Observability"
date:   2021-09-12 22:20:00
categories: personal
comments_enabled: true
---

A month ago, I had the chance to participate as “Developer on Duty” for my team. Developer on Duty basically means you are “On-call” and that you can receive a call if there is any system down or production down problems. When I got called, I became grateful that we had some great tools to analyze issues.

You are running a cloud system, which is live, and you have real customers using the system. Unfortunately, you do not have access to run a debugger on these systems (and I guess we should not have). How to analyze the problem then? Observability (o11y) is the keyword here: infer the internal state from knowledge of its external outputs. As output, we use not only the error messages regular users are getting but also the logs.

I became familiar with two tools: Kibana (reading Logs) and Dynatrace (Tracing). I am also aware the system has some monitoring functionalities to analyze CPU load, database, etc. But I have not yet become familiar with those tools.

Kibana supports several ways to search for information about a problem, the most common search I use is correlation_id. With it, I can see all the logs that a request triggered to be raised.

Dynatrace allows the use of the same correlation id, not only on the log of the application but also across components, such as databases, other systems, etc. 

## Log level per instance or service

Specifically, on one of the nights I received a call, I noticed I could not get enough information for a given problem. I got lucky and found out that it was possible to change the log level of a given instance that is running. The log level of an application is usually a parameter, or environment parameter applications read and allows setting the minimum log level to be sent. By increasing the log level, it was possible to get more details about the problem.

## Conclusion

If possible, get familiar with the logging, tracing, and monitoring tools available in your environment. They can be convenient in some situations, and learning to use them should not take too much time. 