---
title: Contact
permalink: "/contact/"
layout: post
---

<form action="//formspree.io/hello@erikathea.com" method="POST">
  <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="name" />
    <label class="mdl-textfield__label" for="name">Your Name</label>
  </div>
  <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="email" />
    <label class="mdl-textfield__label" for="email">your@email.com</label>
  </div>
  <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield">
    <textarea class="mdl-textfield__input" type="text" rows= "5" id="message" ></textarea>
    <label class="mdl-textfield__label" for="message">Say Hi!</label>
  </div>

  <input type="submit" value="Send" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" />
</form>