# Beep Boop

#### Simple webapp that replaces numbers with "beep", "boop", or "I'm sorry, Dave. I'm afraid I can't do that.", October 26. 2018

#### By Ralph Perdomo

## Description

This webapp takes a user's input (an integer) and replaces "beep" for numbers containing 0, a "boop" for numbers containing a 1, or "I'm sorry, Dave..." for numbers divisible by 3 in ascending order ending with the user's input. This is my third independent coding challenge at Epicodus.

## Setup/Installation Requirements

* clone this repository using `git clone https://github.com/pseudoralph/beep-boop`
* navigate to the downloaded repo
* launch `index.html` in a browser of your choice

Alternatively, this site can be viewed at [https://pseudoralph.github.io/beep-boop/](https://pseudoralph.github.io/beep-boop/)

## Technologies Used

HTML, CSS, JS, and jQuery

## Specifications
* It should replace numbers containing 0 with "Beep!"
  * Input: 0
  * Expected output: "Beep!"
* It should replace numbers containing 1 with "Boop!"
  * Input: 1
  * Expected output: "Boop!"
* It should replace numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  * Input: 3
  * Expected output: "I'm sorry, Dave. I'm afraid I can't do that."
* It should prioritize "I'm sorry, Dave" response over all other responses.
  * Input: 30
  * Expected output: "I'm sorry, Dave. I'm afraid I can't do that."
* It should prioritize a "Beep!" response the least.
  * Input: 10
  * Expected output: "Boop!"
* It should start at 0 and end on user's input replacing each number with its respective response
  * User inputs: 5
  * Expected output: ""Beep!", "Boop!", 2, "I'm Sorry...", 4, 5"

## Objectives

- [ ] Variable names are descriptive and use lower camel case (e.g. myVariableExample).

- [ ] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.

- [ ] All previous objectives have been met.

- [ ] Logic is broken down into "plain English" specs, listed in README.

- [ ] Project is in a presentable, portfolio-quality state.

- [ ] Required functionality is in place by Friday deadline.

- [ ] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- [ ] Application implements a loop and works as expected.

---

### License

MIT License

Copyright (c) 2018, Ralph Perdomo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
