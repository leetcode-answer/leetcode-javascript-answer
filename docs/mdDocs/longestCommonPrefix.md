---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript, 最长公共前缀
---

# 最长公共前缀 #

## 问题描述 ##

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

::: tip
输入: ["flower","flow","flight"]

输出: "fl"
:::

::: tip
输入: ["dog","racecar","car"]

输出: ""

解释: 输入不存在公共前缀。
:::

**说明:**

所有输入只包含小写字母 a-z 。

## 解题思路 ##

``` javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let res = '', variable;
    strs.map((element, index, array) => {
        if(index === 0){
            variable = element;
        }else{
            let len = variable.length < element.length ? variable.length : element.length;
            for(let i = 0; i < len; i++){
                if(variable.charAt(i) === element.charAt(i)){
                    res = res + variable.charAt(i);
                }else{
                    break;
                }
            }
            variable = res;
            res = '';
        }
    });
    return variable;
};
```