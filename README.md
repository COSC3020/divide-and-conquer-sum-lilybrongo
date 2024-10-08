# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The base cases would be if the array has 0 elements, or the array has one element. The constants would include calculations and adding the final results. 

Since we were required to split the array into 3 subarrays, the time would be equivalent to $3T(n / 3) + O(1)$. This is because each time the input is divided into thirds and there are 3 calls being made recursively, the $O(1)$ represents the work done outside of the recursive calls. Knowing this, $T(n) = 3T(n / 3) + O(1)$ when n > 1, and if n <= 1 it should be T(n) = 1. We need to substitute n/3 for each n so the previous statement will turn into 9T(n/9). Therefore, in order to get the base case, $T(n) = (3^i) T(n/3^i)$ where i is going to be the number of recursive steps. Since we have this pattern in order to get the base case, we must have 3^logbase3(n) * T(n/3^(logbase3(n))) where n*T(1) results in n. Also, since the sum grows linearly, then we can find the toal time complexity will be $\Theta(n)$.


Collaborated with students Will Greiner and Daniel Collins to arrive at an answer. Also referrenced lecture slides and videos. To redo this exercise, I talked with daniel and will who helped further explain what I was missing.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
