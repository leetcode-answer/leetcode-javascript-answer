---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, 回文数
---

# 回文数 #

## 问题描述 ##

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

::: tip
输入: 121

输出: true
:::

::: tip
输入: -121

输出: false

解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
:::

::: tip
输入: 10

输出: false

解释: 从右向左读, 为 01 。因此它不是一个回文数。
:::

## 解题思路 ##

``` javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === String(x).split('').reverse().join('')*1 ? true : false
};
```