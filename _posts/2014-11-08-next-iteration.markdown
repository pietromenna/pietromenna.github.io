---
layout: post
title:  "Next Iteration"
date:   2014-11-08 10:06:00
categories: personal
---

I started coding tic-tac-toe in a very iterative way, until now there were only two sessions of one hour or so each.  

During each interaction, first I wrote some test code (using an xUnit like framework called [Qunit][1]), and then wrote some "productive code". 

In some cases, I skipped the sequence: wrote first code, then the test code. But in the iteraction I will try to stick to red-green-refactor.

Until now, all code written is useless: none other than the tests can use it.

In order to fix this, next iteraction of code will be different. I will do some HTML and the UI. A quick mock up can be seen in the image below:

![tic-tac-toe](public/tic-tac-toe-mockup1.png "Tic Tac Toe Mockup for UI")

About the code: I am not really happy with the code I have currently, therefore I think some refactors may be needed. Luckily I have written tests which will ensure everything keeps working.

Wish me good luck!

[1]: http://qunitjs.com/