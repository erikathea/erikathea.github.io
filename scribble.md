---
layout: page
title: Blog
permalink: /blog/
---

<p class="rss-subscribe pull-right label label-warning">Subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

<ul class="post-list list-unstyled">
  {% for post in site.posts %}
    <li>
      <small class="post-meta label label-success">{{ post.date | date: "%b %-d, %Y" }}{% if post.author %} by {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}</small>
      <h2>
        <span>{% include svg/rocket.html %}</span> <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      {{ post.excerpt }}
      <hr/>
    </li>
  {% endfor %}
</ul>
