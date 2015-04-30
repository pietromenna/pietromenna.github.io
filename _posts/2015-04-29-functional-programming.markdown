---
layout: post
title:  "Functional Programming"
date:   2015-04-29 22:21:00
categories: personal
comments_enabled: true
---

#My limited experience with Functional Programming#

What I have been doing all this time at [Recurse Center][1]? I have been trying to learn the **all hot & new functional programming paradigm:** by learning [Clojure][2]. I also tried to understand why this paradigm is so popular these days.

##First, I felt in love##
A simple example, sometimes is better then thousand explainations! I remember the College clases of writing boring Java code like the one below:

	public static class SumOfSquaresHelper
	{
	   public static int Square(int i)
	   {
	      return i * i;
	   }

	   public static int SumOfSquares(int n)
	   {
	      int sum = 0;
	      for (int i = 1; i <= n; i++)
	      {
	         sum += Square(i);
	      }
	      return sum;
	   }
	}

Please, compare to this:

	(defn square [x] (* x x))
	(defn sum-of-squares [n] (reduce + (map square (range 0 (inc n)))

Unless you are paid by the number (of non-useful) lines of code you write, you will fall in love with the expresiveness and simplicity of [LISP][6]. 

By the way, yes, I used static which is **ugly and bad** in the example in Java, but LISP is so simple, and its sintax is also so compact, that programs are usually very readable (once you get used to the lots of parens).

##Then came the pain ##

I began with [tryclojure][3], then I tried some [4clojure][4] problems, but my main source of learning was by trying to finish all the problems from [120 hour epic sax marathon][5]. It was great, and I still plan to finish it all before finishing my batch, but it was exausting. There are like 5 problems I did not finish yet.

I find remarkable how hard it is to **understand** simple concepts in their extreme: **recursion**, **reduce** and **map**. The three of them are very simple ideas, but to learn this very simple ideas it is really painful, and a lot of exercices ar required. I have not yet mastered those.

This reminded me a phrase from *Uncle Bob Martin*, which is something like a programming paradigm is *substracting and not adding something* to the way we program ([reference][8]). In the case of FP, direct assignments is substracted from the language. OK! We can still do assignments in Clojure, it is just (def name value), but it is considered bad to do it unless it is a constant value!

Feeling the dificulty I decided to try to do a project which is the bittorrent client written in Clojure. Which only increased the pain. Damn, I am so used to *assignment statements*.

##Why functional programming?##
After browsing on the web, I found out that LISP is from **1958**! WHAT!?! This seems like really **OLD**, and it the new trend? Why is it that only now we go this direction?

To answer the question, I think we have to understand what we gain by limiting the *assignment statements* we use while we program: we gain that we do not have modifications on "variables" on runtime, so it is very good to work with concurrency. I think it came now because of the [Moore's Law][7] problem that we now do not get faster processors, but more cores per processor. Remember the age in which a 486 was like 2x slower than a Pentium? Now we have been in the i3, i5 and i7 like 5 years?

## Conclusion ##

Functional programming paradigm is here to stay. I like it and I will continue trying more with it. But I am not sure if it is the right fit for all the problems we might face while coding, maybe it is good for some domains but not all.



[1]: https://www.recurse.com
[2]: http://clojure.org
[3]: http://tryclj.org
[4]: http://www.4clojure.com
[5]: http://iloveponies.github.io/120-hour-epic-sax-marathon/
[6]: https://www.youtube.com/watch?v=HM1Zb3xmvMc
[7]: https://en.wikipedia.org/wiki/Moore%27s_law
[8]: http://cleancoders.com/episode/clean-code-the-last-programming-language/show