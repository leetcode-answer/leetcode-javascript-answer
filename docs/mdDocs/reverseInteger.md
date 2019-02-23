---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, 整数反转
---

# 整数反转 #

## 问题描述 ##

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

::: tip
输入: 123

输出: 321
:::

::: tip
输入: -123

输出: -321
:::

::: tip
输入: 120

输出: 21
:::

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 解题思路 ##

``` javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = String(x).split(''),
        first = '-',
        last = 0,
        res = '',
        top = Math.pow(2, 31) - 1;
    if(arr[0] === '-'){
        arr.shift();
        res = arr.reverse().join('');
        return res > top ? 0 : first + res;
    }else if(arr[arr.length - 1] === '0'){
        arr.pop();
        res = arr.reverse().join('');
        return res > top ? 0 : res;
    }else{
        res = arr.reverse().join('');
        return res > top ? 0 : res;
    }
};
```