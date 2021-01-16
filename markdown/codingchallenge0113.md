---
title: 'Codewars - Credit Card/Jaden Case/Digital Root'
author: 'Ray Velasquez'
date: '01-16-2021'
---

Late post but knocked out 4 challenges a few days ago in Ruby and JavaScript.  I'm still working on cleaning up my code and keeping it DRY, however, I feel like these weren't too bad.


***

- ##### - Getting Right Into It 

Some of these were quite simple but it was cool to take a look at some of the other solutions once I was done to see how I could improve.  I won't go step by step as I have in some of my other posts but I'll just walk through the highlight of the challenges.

***

- ##### - Multiples of 3 or 5 (JavaScript)

        function solution(number){
            let num = 0
            if (number < 0) {
                return num = 0
            } else {
  
            for (let i=0; i<number; i++){
            if (i%3 === 0 && i%5 === 0) {
                num = num + i
            } else if (i % 3 === 0 || i % 5 === 0) {
                num = num + i
      
            } else {
      
            }
            }
            return num
            }
  
        }       

I added a step in this code with the else if which was not necessary but you live and you learn.  I created a top level conditional to make sure to return 0 if the number was less than 0 but that was also unnecessary.  Either way the code works but needed some cleaning up.

***

- ##### - Credit Card Mask (JavaScript)

        function maskify(cc) {
            newArr = cc.split('')
            finalArr = []
            newArr.map((letter,index)=> {
                if (index < newArr.length-4){
                finalArr.push('#')
                } else {
                finalArr.push(letter)
                }
            })
            return finalArr.join('')
            
        }
  
This code is written to replace all the characters with a `#` except the last 4 characters.  I learned that I could have just chained some methods and achieved the same result in less code but this made the most sense to me at the time.

***

- ##### - Jaden Casing Strings (Ruby)

        class String
            def toJadenCase
                self.split.map(&:capitalize).join(' ')
            end
        end

Apparently Jaden Smith has an interesting way of typing out his tweets where he capitalizes every first letter as if it's a title.  The capitalize function in Ruby allows you to do this exact operation so I'm using it in a map to adjust every words accordingly.  Proud of this one because of how clean it is.

***

- ##### - Sum of Digits/Digital Root

        def digital_root(n)
            sum = nil
            newArr = n.to_s.split(//).map{|num| num.to_i}
            length = newArr.length
            if length <= 1
                sum = newArr[0]
            else
            while length > 1 
                sum = newArr.reduce(:+)
                newArr = sum.to_s.split(//).map{|num| num.to_i}
                length = newArr.length
            end
            return sum
            end
        end

I had fun with this one because it felt more like a puzzle than the others.  This function accepts any number, returns the sum of all the numbers, then continues to loop until that summation is a single digit -- it then returns that single digit.  I'm not a big while loop fan but it was the perfect application for it.


I'm going to keep at it on the challenges.  See ya!