---
title: leetcode-javascript-answer
lang: zh-CN
description: leetcode中使用javascript的解题答案。
meta:
  - name: keywords
    content: leetcode, javascript
---

# twoSum #

## 问题描述 ##

给定一个整数数组`nums`和一个目标值`target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

::: tip
给定 `nums = [2, 7, 11, 15], target = 9`

因为 `nums[0] + nums[1] = 2 + 7 = 9`
所以返回 `[0, 1]`
:::

## 解题思路 ##

### 两次`for`循环 ###

``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0,len = nums.length; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return null;
};
```

### 一次`for`循环 ###

``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0,len = nums.length; i < len; i++){
        let element = nums[i],
            diff = target - element,
            index = nums.indexOf(diff, i + 1);
        if(index > -1){
            return [i, index];
        }
    }
    return null;
};
```