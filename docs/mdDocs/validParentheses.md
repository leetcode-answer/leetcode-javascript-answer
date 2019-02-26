---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, 有效的括号
---

# 有效的括号 #

## 问题描述 ##

给定一个只包括 `(`，`)`，`{`，`}`，`[`，`]` 的字符串，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

**注意**空字符串可被认为是有效字符串。

::: tip
输入: "()"

输出: true
:::

::: tip
输入: "()[]{}"

输出: true
:::

::: tip
输入: "(]"

输出: false
:::

::: tip
输入: "([)]"

输出: false
:::

::: tip
输入: "{[]}"

输出: true
:::

## 解题思路 ##

``` javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return true;
    let arr = s.split(''),
        res = [],
        left = ['(', '[', '{'],
        right = [')', ']', '}'];
    arr.map((element, index, array) => {
        if(index === 0){
            res.push(element);
        }else{
            let leftIndex = left.indexOf(res[res.length - 1]),
                rightIndex = right.indexOf(element);
            if(leftIndex > -1 && rightIndex > -1 && leftIndex === rightIndex){
                res.pop();
            }else{
                res.push(element);
            }
        }
    });
    return res.length ? false : true;
};
```