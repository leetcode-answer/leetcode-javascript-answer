---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, Z 字形变换
---

# Z 字形变换 #

## 问题描述 ##

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

::: tip
L&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;R

E&nbsp;T&nbsp;O&nbsp;E&nbsp;S&nbsp;I&nbsp;I&nbsp;G

E&nbsp;&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;N
:::

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

::: tip
输入: s = "LEETCODEISHIRING", numRows = 3

输出: "LCIRETOESIIGEDHN"
:::

::: tip
输入: s = "LEETCODEISHIRING", numRows = 4

输出: "LDREOEIIECIHNTSG"

解释:

L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R

E&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;I

E&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;N

T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G
:::

## 解题思路 ##

``` javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let len = s.length, twoRows = 2 * numRows - 2, str = "";
    if (len == 0 || numRows <= 1) return s;
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < len; j += twoRows) {
            str = str.concat(s.charAt(j));
            if (i != 0 && i != numRows - 1 && j - 2 * i + twoRows < len) {
                str = str.concat(s.charAt(j - 2 * i + twoRows))
            }
        }
    }
    return str;
};
```