---
title: 'Codewars - Beginner Series #3 Sum of Numbers'
author: 'Ray Velasquez'
---

I'll start off by saying I'm not very proud of this one.  It didn't take long but I definitely over thought it.  Should've been A => B but I took a wandering path instead.

![Imgur](https://www.cbc.ca/kidsnews/content/RaptorsWin.gif)


***

- ##### - Details  

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

***

- ##### - First, I defined the length of the array I wanted to build

        const length = Math.abs(b - a)

The Math.abs came after I realized that I would need the absolute value of these numbers since there could be some negatives involved.

***

- ##### - Then, I used a method I wasn't too familiar with and glad I came across it.

        const numberArr = Array.from({length: length+1}, (_, i) => i + c)
  
All this is doing is accepting the length of my array as an object (I had to add 1 since my previous logic wasn't correct) then taking in a map function to start at a constant I've defined as `c`.

***

- ##### - Here's my logic on my `c` constant

        let c = null
        a < b ? c = a : c = b

I'm first declaring `c` as a variable then running a ternary operator to define `c` as my array starting point depending on which value is smaller between a and b.


- ##### Time to sum them up

        const total = numberArr.reduce((total, item) => {
            return total += item}, 0)

I used the array method .reduce() to sum up the array since I was familiar with this method and it happens to be one of my faves.

***

- ##### SOLUTION

Here's the final code block:


        function getSum( a,b ) {
            let c = null
            const length = Math.abs(b - a)

            a < b ? c = a : c = b
  
            const numberArr = Array.from({length: length+1}, (_, i) => i + c)
  
            const total = numberArr.reduce((total, item) => {
                return total += item}, 0)
  
            return total
        }

![Imgur](https://adamsarson.files.wordpress.com/2014/01/01-25-14-ilonen-regulation-putt.gif)