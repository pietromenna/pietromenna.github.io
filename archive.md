---
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

## External Posts or Publications
* [How to communicate Architecture – Technical Architecture Modeling at SAP (part 4)]
 (http://scn.sap.com/community/netweaver/blog/2015/02/11/how-to-communicate-architecture-technical-architecture-modeling-at-sap-part-4))
* [How to communicate Architecture – Technical Architecture Modeling at SAP (part 3)]
(http://scn.sap.com/community/netweaver/blog/2013/11/19/how-to-communicate-architecture-technical-architecture-modeling-at-sap-part-3))