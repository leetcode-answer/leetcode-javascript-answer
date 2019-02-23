---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, 无重复字符的最长子串
---

# 无重复字符的最长子串 #

## 问题描述 ##

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

::: tip
输入: "abcabcbb"

输出: 3

解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
:::

::: tip
输入: "bbbbb"

输出: 1

解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
:::

::: tip
输入: "pwwkew"

输出: 3

解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
:::

## 解题思路 ##

``` javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(s.length === 0) return 0;
    let arr = s.split(''),
        resultArr = [];
    for(let index = 0, length = arr.length; index < length; index++){
        let element = arr[index];
        if (!resultArr.length) {
            resultArr.push(element);
            continue;
        }
        let prevStr = resultArr[resultArr.length - 1], newStr = '';
        if (prevStr.indexOf(element) > -1) {
            newStr = element;
            let prevArr = prevStr.split('').reverse();
            for(let i = 0, len = prevArr.length; i < len; i++){
                if(newStr.indexOf(prevArr[i]) === -1){
                    newStr = prevArr[i] + newStr;
                }else{
                    break;
                }
            }
            resultArr.push(newStr);
        } else {
            prevStr = prevStr + element;
            resultArr[resultArr.length - 1] = prevStr;
        }
    }
    let len = 0;
    resultArr.map((e) => {
        if (len < e.length) {
            len = e.length;
        }
    });
    return len;
};
```