"use client"
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './globals.css'

const lotteryData = {
  "2024/1/1": [3, 9, 27, 30, 33],
  "2024/1/2": [21, 22, 25, 30, 37],
  "2024/1/3": [1, 5, 21, 32, 37],
  "2024/1/4": [11, 27, 28, 29, 37],
  "2024/1/5": [10, 11, 14, 21, 33],
  "2024/1/6": [1, 16, 33, 37, 39],
  "2024/1/8": [7, 22, 35, 38, 39],
  "2024/1/9": [9, 17, 19, 23, 27],
  "2024/1/10": [3, 6, 15, 19, 24],
  "2024/1/11": [15, 23, 34, 36, 37],
  "2024/1/12": [1, 3, 12, 23, 31],
  "2024/1/13": [14, 20, 27, 33, 38],
  "2024/1/15": [1, 3, 10, 11, 35],
  "2024/1/16": [2, 5, 9, 27, 29],
  "2024/1/17": [10, 17, 32, 38, 39],
  "2024/1/18": [10, 27, 31, 32, 33],
  "2024/1/19": [2, 3, 13, 17, 35],
  "2024/1/20": [15, 20, 28, 36, 37],
  "2024/1/22": [3, 15, 17, 25, 36],
  "2024/1/23": [8, 16, 18, 19, 35],
  "2024/1/24": [4, 12, 29, 33, 36],
  "2024/1/25": [1, 14, 32, 34, 36],
  "2024/1/26": [6, 9, 12, 22, 31],
  "2024/1/27": [1, 8, 9, 30, 35],
  "2024/1/29": [1, 3, 18, 22, 28],
  "2024/1/30": [3, 11, 21, 23, 36],
  "2024/1/31": [6, 10, 21, 32, 38],
  "2024/2/1": [10, 17, 19, 29, 37],
  "2024/2/2": [10, 22, 26, 32, 33],
  "2024/2/3": [14, 20, 21, 23, 34],
  "2024/2/5": [12, 15, 16, 23, 28],
  "2024/2/6": [6, 13, 16, 32, 39],
  "2024/2/7": [6, 11, 15, 28, 31],
  "2024/2/8": [20, 25, 31, 35, 38],
  "2024/2/9": [6, 20, 22, 36, 37],
  "2024/2/10": [3, 18, 19, 21, 22],
  "2024/2/12": [6, 8, 22, 29, 38],
  "2024/2/13": [23, 24, 28, 30, 31],
  "2024/2/14": [4, 16, 27, 30, 37],
  "2024/2/15": [2, 4, 15, 17, 30],
  "2024/2/16": [7, 11, 16, 34, 36],
  "2024/2/17": [12, 18, 31, 38, 39],
  "2024/2/19": [5, 9, 17, 24, 25],
  "2024/2/20": [21, 26, 29, 30, 34],
  "2024/2/21": [1, 3, 4, 35, 37],
  "2024/2/22": [3, 5, 12, 15, 33],
  "2024/2/23": [1, 3, 15, 18, 35],
  "2024/2/24": [2, 7, 10, 15, 33],
  "2024/2/26": [23, 25, 29, 31, 32],
  "2024/2/27": [11, 27, 30, 31, 38],
  "2024/2/28": [7, 14, 28, 29, 38],
  "2024/2/29": [7, 15, 22, 26, 37],
  "2024/3/1": [5, 12, 13, 21, 36],
  "2024/3/2": [17, 19, 29, 36, 37],
  "2024/3/4": [1, 3, 5, 19, 38],
  "2024/3/5": [26, 34, 36, 37, 39],
  "2024/3/6": [9, 19, 23, 36, 38],
  "2024/3/7": [2, 6, 20, 23, 36],
  "2024/3/8": [8, 11, 15, 20, 36],
  "2024/3/9": [5, 10, 27, 37, 38],
  "2024/3/11": [2, 8, 16, 18, 36],
  "2024/3/12": [12, 21, 23, 38, 39],
  "2024/3/13": [8, 12, 22, 35, 36],
  "2024/3/14": [18, 19, 22, 26, 28],
  "2024/3/15": [7, 8, 9, 14, 34],
  "2024/3/16": [2, 6, 16, 27, 39],
  "2024/3/18": [11, 16, 18, 19, 25],
  "2024/3/19": [10, 16, 26, 38, 39],
  "2024/3/20": [5, 24, 29, 34, 35],
  "2024/3/21": [1, 2, 4, 13, 27],
  "2024/3/22": [7, 11, 12, 24, 38],
  "2024/3/23": [7, 17, 27, 28, 33],
  "2024/3/25": [4, 11, 20, 34, 36],
  "2024/3/26": [5, 7, 30, 35, 38],
  "2024/3/27": [10, 21, 23, 27, 30],
  "2024/3/28": [1, 10, 16, 26, 29],
  "2024/3/29": [11, 12, 18, 23, 24],
  "2024/3/30": [2, 12, 15, 24, 35],
  "2024/4/1": [5, 9, 14, 20, 33],
  "2024/4/2": [4, 10, 12, 23, 26],
  "2024/4/3": [1, 3, 6, 21, 27],
  "2024/4/4": [8, 14, 22, 27, 35],
  "2024/4/5": [1, 13, 31, 34, 35],
  "2024/4/6": [4, 7, 15, 22, 30],
  "2024/4/8": [3, 9, 21, 27, 36],
  "2024/4/9": [12, 21, 24, 25, 39],
  "2024/4/10": [2, 3, 21, 26, 30],
  "2024/4/11": [13, 15, 18, 19, 33],
  "2024/4/12": [1, 3, 10, 14, 31],
  "2024/4/13": [1, 2, 9, 19, 31],
  "2024/4/15": [3, 9, 10, 13, 17],
  "2024/4/16": [6, 17, 21, 26, 28],
  "2024/4/17": [15, 28, 35, 36, 39],
  "2024/4/18": [6, 13, 15, 25, 28],
  "2024/4/19": [2, 10, 21, 22, 38],
  "2024/4/20": [3, 12, 20, 34, 35],
  "2024/4/22": [6, 14, 20, 28, 35],
  "2024/4/23": [17, 18, 32, 35, 37],
  "2024/4/24": [3, 6, 10, 17, 28],
  "2024/4/25": [16, 20, 21, 22, 25],
  "2024/4/26": [10, 14, 25, 31, 36],
  "2024/4/27": [9, 15, 22, 34, 36],
  "2024/4/29": [4, 10, 12, 21, 27],
  "2024/4/30": [3, 7, 12, 17, 37],
  "2024/5/1": [9, 24, 32, 36, 39],
  "2024/5/2": [3, 6, 13, 28, 35],
  "2024/5/3": [5, 6, 11, 16, 37],
  "2024/5/4": [2, 7, 13, 18, 28],
  "2024/5/6": [12, 28, 31, 35, 39],
  "2024/5/7": [4, 9, 18, 25, 39],
  "2024/5/8": [12, 13, 16, 26, 37],
  "2024/5/9": [5, 6, 11, 31, 35],
  "2024/5/10": [1, 12, 31, 38, 39],
  "2024/5/11": [1, 7, 11, 15, 29],
  "2024/5/13": [4, 14, 33, 36, 37],
  "2024/5/14": [7, 11, 18, 20, 22],
  "2024/5/15": [4, 6, 14, 26, 33],
  "2024/5/16": [9, 10, 21, 33, 35],
  "2024/5/17": [14, 19, 27, 30, 38],
  "2024/5/18": [5, 10, 11, 32, 37],
  "2024/5/20": [3, 5, 28, 32, 34],
  "2024/5/21": [1, 3, 16, 24, 31],
  "2024/5/22": [11, 13, 15, 23, 29],
  "2024/5/23": [14, 23, 26, 27, 34],
  "2024/5/24": [5, 16, 22, 26, 39],
  "2024/5/25": [1, 15, 32, 34, 38],
  "2024/5/27": [5, 13, 14, 17, 24],
  "2024/5/28": [16, 23, 29, 36, 39],
  "2024/5/29": [1, 7, 9, 20, 32],
  "2024/5/30": [2, 9, 32, 36, 37],
  "2024/5/31": [8, 12, 13, 23, 36],
  "2024/6/1": [4, 20, 24, 28, 38],
  "2024/6/3": [6, 10, 21, 24, 31],
  "2024/6/4": [7, 11, 17, 23, 25],
  "2024/6/5": [3, 4, 6, 14, 20],
  "2024/6/6": [3, 11, 20, 21, 36],
  "2024/6/7": [1, 4, 27, 34, 35],
  "2024/6/8": [11, 19, 24, 31, 32],
  "2024/6/10": [18, 19, 30, 33, 38],
  "2024/6/11": [3, 13, 26, 32, 34],
  "2024/6/12": [14, 19, 20, 29, 32],
  "2024/6/13": [3, 12, 17, 30, 38],
  "2024/6/14": [1, 2, 17, 20, 37],
  "2024/6/15": [5, 8, 35, 36, 37],
  "2024/6/17": [2, 8, 26, 32, 34],
  "2024/6/18": [2, 9, 15, 29, 38],
  "2024/6/19": [2, 10, 11, 14, 22],
  "2024/6/20": [12, 13, 16, 20, 32],
  "2024/6/21": [10, 12, 15, 16, 23],
  "2024/6/22": [1, 21, 22, 25, 27],
  "2024/6/24": [3, 13, 17, 32, 39],
  "2024/6/25": [25, 26, 32, 36, 37],
  "2024/6/26": [2, 21, 37, 38, 39],
  "2024/6/27": [15, 18, 27, 28, 31],
  "2024/6/28": [12, 16, 25, 27, 39],
  "2024/6/29": [2, 17, 26, 33, 35],
  "2024/7/1": [8, 11, 17, 19, 23],
  "2024/7/2": [3, 15, 16, 20, 22],
  "2024/7/3": [4, 20, 25, 33, 34],
  "2024/7/4": [9, 12, 15, 26, 33],
  "2024/7/5": [17, 18, 23, 24, 28],
  "2024/7/6": [4, 21, 24, 33, 35],
  "2024/7/8": [11, 17, 20, 22, 29],
  "2024/7/9": [2, 13, 31, 33, 36],
  "2024/7/10": [1, 9, 14, 31, 33],
  "2024/7/11": [1, 2, 13, 23, 37],
  "2024/7/12": [8, 17, 18, 19, 36],
  "2024/7/13": [16, 21, 23, 29, 30],
  "2024/7/15": [1, 19, 22, 25, 37],
  "2024/7/16": [7, 24, 26, 34, 36],
  "2024/7/17": [8, 10, 26, 28, 37],
  "2024/7/18": [5, 17, 24, 33, 34],
  "2024/7/19": [14, 19, 24, 30, 36],
  "2024/7/20": [1, 11, 27, 29, 31],
  "2024/7/22": [6, 20, 26, 30, 34],
  "2024/7/23": [7, 11, 12, 37, 38],
  "2024/7/24": [2, 3, 21, 23, 34],
  "2024/7/25": [1, 9, 17, 18, 39],
  "2024/7/26": [11, 12, 18, 20, 36],
  "2024/7/27": [1, 11, 15, 18, 37],
  "2024/7/29": [1, 12, 14, 24, 30],
  "2024/7/30": [2, 4, 16, 29, 38],
  "2024/7/31": [12, 18, 36, 37, 38],
  "2024/8/1": [12, 24, 27, 30, 35],
  "2024/8/2": [1, 19, 22, 24, 38],
  "2024/8/3": [11, 12, 26, 27, 32],
  "2024/8/5": [6, 7, 11, 17, 36],
  "2024/8/6": [1, 6, 12, 29, 37],
  "2024/8/7": [4, 5, 16, 19, 30],
  "2024/8/8": [2, 9, 13, 19, 28],
  "2024/8/9": [2, 7, 8, 10, 12],
  "2024/8/10": [1, 21, 28, 38, 39],
  "2024/8/12": [8, 12, 24, 28, 34],
  "2024/8/13": [9, 15, 20, 28, 32],
  "2024/8/14": [6, 9, 24, 30, 34],
  "2024/8/15": [7, 14, 20, 27, 39],
  "2024/8/16": [9, 17, 18, 32, 35],
  "2024/8/17": [6, 14, 32, 33, 36],
  "2024/8/19": [2, 9, 12, 16, 36],
  "2024/8/20": [7, 28, 30, 34, 39],
  "2024/8/21": [1, 2, 12, 13, 22],
  "2024/8/22": [2, 8, 16, 34, 37],
  "2024/8/23": [9, 11, 30, 34, 39],
  "2024/8/24": [25, 26, 28, 29, 37],
  "2024/8/26": [5, 9, 11, 23, 33],
  "2024/8/27": [5, 13, 21, 34, 35],
  "2024/8/28": [6, 16, 34, 35, 36],
  "2024/8/29": [4, 21, 26, 29, 36],
  "2024/8/30": [3, 5, 14, 22, 36],
  "2024/8/31": [9, 15, 21, 36, 37],
  "2024/9/2": [16, 20, 24, 31, 37],
  "2024/9/3": [11, 14, 19, 23, 24],
  "2024/9/4": [9, 26, 27, 31, 35],
  "2024/9/5": [10, 13, 27, 32, 37],
  "2024/9/6": [14, 27, 31, 36, 39],
  "2024/9/7": [5, 9, 28, 36, 38],
  "2024/9/9": [5, 16, 17, 36, 37],
  "2024/9/10": [6, 34, 35, 36, 39],
  "2024/9/11": [5, 8, 14, 20, 26],
  "2024/9/12": [3, 8, 13, 27, 33],
  "2024/9/13": [6, 8, 25, 37, 39],
  "2024/9/14": [3, 29, 34, 35, 37],
  "2024/9/16": [12, 15, 18, 19, 26],
  "2024/9/17": [7, 9, 31, 38, 39],
  "2024/9/18": [2, 9, 16, 18, 23],
  "2024/9/19": [16, 19, 22, 26, 37],
  "2024/9/20": [4, 7, 30, 32, 38],
  "2024/9/21": [9, 22, 25, 35, 39],
  "2024/9/23": [4, 12, 14, 17, 35],
  "2024/9/24": [4, 10, 19, 30, 31],
  "2024/9/25": [2, 5, 10, 12, 37],
  "2024/9/26": [4, 6, 14, 16, 20],
  "2024/9/27": [3, 27, 34, 37, 39],
  "2024/9/28": [10, 20, 24, 35, 39],
  "2024/9/30": [7, 10, 24, 27, 31],
  "2024/10/1": [20, 23, 30, 31, 35],
  "2024/10/2": [7, 8, 13, 22, 34],
  "2024/10/3": [1, 6, 15, 19, 39],
  "2024/10/4": [5, 11, 27, 38, 39],
  "2024/10/5": [2, 5, 8, 14, 32],
  "2024/10/7": [2, 10, 17, 21, 39],
  "2024/10/8": [1, 11, 13, 25, 37],
  "2024/10/9": [12, 17, 25, 31, 34],
  "2024/10/10": [3, 25, 29, 35, 38],
  "2024/10/11": [14, 15, 16, 24, 29],
  "2024/10/12": [14, 21, 22, 23, 35],
  "2024/10/14": [4, 14, 19, 25, 32],
  "2024/10/15": [2, 19, 27, 33, 35],
  "2024/10/16": [15, 20, 27, 30, 31],
  "2024/10/17": [1, 18, 21, 36, 37],
  "2024/10/18": [4, 11, 26, 34, 38],
  "2024/10/19": [11, 15, 24, 36, 37],
  "2024/10/21": [1, 9, 17, 31, 35],
  "2024/10/22": [7, 16, 25, 32, 34],
  "2024/10/23": [10, 18, 19, 26, 37],
  "2024/10/24": [1, 4, 8, 20, 22],
  "2024/10/25": [6, 8, 15, 28, 39],
  "2024/10/26": [13, 15, 18, 26, 28],
  "2024/10/28": [1, 6, 13, 22, 39],
  "2024/10/29": [9, 12, 25, 29, 35],
  "2024/10/30": [10, 11, 17, 24, 33],
  "2024/10/31": [8, 13, 25, 36, 38],
  "2024/11/1": [4, 8, 11, 19, 31],
  "2024/11/2": [6, 7, 16, 37, 38],
  "2024/11/4": [3, 7, 10, 26, 35],
  "2024/11/5": [1, 8, 18, 27, 30],
  "2024/11/6": [6, 11, 14, 18, 22],
  "2024/11/7": [6, 10, 20, 25, 32],
  "2024/11/8": [1, 9, 13, 31, 32],
  "2024/11/9": [2, 3, 10, 21, 36],
  "2024/11/11": [7, 14, 20, 24, 26],
  "2024/11/12": [5, 8, 17, 24, 28],
  "2024/11/13": [3, 11, 18, 21, 35],
  "2024/11/14": [5, 11, 17, 25, 30],
  "2024/11/15": [2, 18, 27, 29, 39],
  "2024/11/16": [4, 24, 29, 33, 37],
  "2024/11/18": [3, 5, 23, 26, 27],
  "2024/11/19": [10, 14, 21, 32, 33],
  "2024/11/20": [13, 20, 30, 31, 33],
  "2024/11/21": [4, 12, 13, 23, 25],
  "2024/11/22": [3, 7, 8, 17, 30],
  "2024/11/23": [3, 13, 28, 29, 38],
  "2024/11/25": [3, 6, 19, 20, 38],
  "2024/11/26": [1, 5, 11, 27, 29],
  "2024/11/27": [7, 13, 14, 21, 35],
  "2024/11/28": [5, 9, 20, 29, 34],
  "2024/11/29": [3, 11, 18, 25, 35],
  "2024/11/30": [4, 11, 16, 17, 24],
  "2024/12/2": [5, 13, 23, 29, 38],
  "2024/12/3": [7, 12, 15, 16, 18],
  "2024/12/4": [12, 27, 33, 35, 38],
  "2024/12/5": [5, 19, 23, 28, 39],
  "2024/12/6": [2, 15, 20, 33, 38],
  "2024/12/7": [6, 24, 31, 32, 33],
  "2024/12/9": [8, 9, 20, 28, 32],
  "2024/12/10": [7, 12, 13, 21, 24],
  "2024/12/11": [4, 22, 32, 34, 37],
  "2024/12/12": [2, 11, 16, 23, 29],
  "2024/12/13": [2, 9, 20, 34, 38],
  "2024/12/14": [3, 7, 8, 12, 35],
  "2024/12/16": [5, 11, 21, 23, 26],
  "2024/12/17": [3, 5, 7, 16, 31],
  "2024/12/18": [3, 24, 27, 33, 37],
  "2024/12/19": [7, 8, 11, 27, 33],
  "2024/12/20": [3, 9, 16, 19, 26],
  "2024/12/21": [12, 13, 14, 18, 32],
  "2024/12/23": [2, 6, 13, 18, 22],
  "2024/12/24": [1, 14, 15, 28, 39],
  "2024/12/25": [6, 18, 21, 29, 38],
  "2024/12/26": [5, 7, 12, 20, 38],
  "2024/12/27": [7, 15, 19, 20, 38],
  "2024/12/28": [17, 18, 24, 26, 30],
  "2024/12/30": [3, 20, 23, 27, 31],
  "2024/12/31": [11, 15, 32, 33, 34],
  "2025/1/1": [2, 7, 8, 10, 14],
  "2025/1/2": [12, 26, 30, 32, 33],
  "2025/1/3": [5, 6, 8, 11, 14],
  "2025/1/4": [8, 9, 12, 21, 23],
  "2025/1/6": [7, 21, 22, 27, 35],
  "2025/1/7": [13, 23, 27, 31, 37],
  "2025/1/8": [12, 18, 20, 24, 31],
  "2025/1/9": [2, 8, 19, 21, 29],
  "2025/1/10": [9, 11, 15, 18, 20],
  "2025/1/11": [5, 12, 13, 19, 34],
  "2025/1/13": [4, 12, 28, 35, 38],
  "2025/1/14": [10, 22, 31, 35, 36],
  "2025/1/15": [3, 21, 22, 26, 39],
  "2025/1/16": [9, 13, 23, 29, 34],
  "2025/1/17": [4, 7, 8, 24, 26],
  "2025/1/18": [7, 12, 18, 35, 39],
  "2025/1/20": [3, 12, 19, 32, 34],
  "2025/1/21": [1, 14, 18, 19, 22],
  "2025/1/22": [6, 19, 23, 26, 30],
  "2025/1/23": [4, 7, 17, 22, 35],
  "2025/1/24": [5, 9, 12, 14, 31],
  "2025/1/25": [1, 7, 32, 36, 37],
  "2025/1/26": [7, 8, 9, 17, 20],
  "2025/1/27": [1, 6, 16, 26, 31],
  "2025/1/28": [13, 22, 23, 24, 35],
  "2025/1/29": [4, 11, 25, 31, 32],
  "2025/1/30": [9, 11, 14, 18, 27],
  "2025/1/31": [1, 5, 9, 14, 26],
  "2025/2/1": [1, 10, 23, 32, 37],
  "2025/2/2": [9, 16, 29, 32, 39],
  "2025/2/3": [4, 16, 21, 23, 37],
  "2025/2/4": [1, 8, 16, 19, 31],
  "2025/2/5": [6, 7, 8, 14, 39],
  "2025/2/6": [3, 7, 22, 29, 34],
  "2025/2/7": [16, 21, 26, 29, 37],
  "2025/2/8": [8, 24, 28, 37, 38],
  "2025/2/9": [4, 5, 27, 35, 37],
  "2025/2/10": [12, 22, 26, 28, 35],
  "2025/2/11": [10, 18, 19, 27, 28],
  "2025/2/12": [2, 6, 19, 28, 29],
  "2025/2/13": [2, 7, 11, 20, 30],
  "2025/2/14": [11, 17, 29, 34, 39],
  "2025/2/15": [6, 8, 10, 21, 26],
  "2025/2/17": [9, 15, 29, 30, 39],
  "2025/2/18": [10, 12, 13, 19, 33],
  "2025/2/19": [3, 27, 28, 33, 38],
  "2025/2/20": [3, 7, 17, 24, 27],
  "2025/2/21": [11, 13, 18, 30, 35],
  "2025/2/22": [4, 7, 11, 19, 22],
  "2025/2/24": [8, 17, 18, 24, 36],
  "2025/2/25": [5, 11, 26, 33, 35],
  "2025/2/26": [3, 11, 24, 27, 36],
  "2025/2/27": [11, 12, 20, 28, 29],
  "2025/2/28": [5, 27, 31, 38, 39],
  "2025/3/1": [4, 16, 29, 31, 34],
  "2025/3/3": [8, 9, 12, 22, 27],
  "2025/3/4": [11, 18, 21, 23, 36],
  "2025/3/5": [15, 23, 29, 36, 39],
  "2025/3/6": [8, 12, 15, 18, 34],
  "2025/3/7": [9, 10, 19, 33, 35],
  "2025/3/8": [17, 23, 24, 27, 35],
  "2025/3/10": [2, 4, 7, 25, 37],
  "2025/3/11": [2, 21, 24, 27, 31],
  "2025/3/12": [6, 14, 27, 30, 33],
  "2025/3/13": [3, 4, 7, 11, 30],
  "2025/3/14": [6, 8, 18, 19, 28],
  "2025/3/15": [8, 15, 25, 26, 34],
  "2025/3/17": [7, 11, 13, 26, 30],
  "2025/3/18": [3, 13, 15, 19, 25],
  "2025/3/19": [11, 15, 25, 29, 34]
};

const data = [
  [3, 9, 27, 30, 33],
  [21, 22, 25, 30, 37],
  [1, 5, 21, 32, 37],
  [11, 27, 28, 29, 37],
  [10, 11, 14, 21, 33],
  [1, 16, 33, 37, 39],
  [7, 22, 35, 38, 39],
  [9, 17, 19, 23, 27],
  [3, 6, 15, 19, 24],
  [15, 23, 34, 36, 37],
  [1, 3, 12, 23, 31],
  [14, 20, 27, 33, 38],
  [1, 3, 10, 11, 35],
  [2, 5, 9, 27, 29],
  [10, 17, 32, 38, 39],
  [10, 27, 31, 32, 33],
  [2, 3, 13, 17, 35],
  [15, 20, 28, 36, 37],
  [3, 15, 17, 25, 36],
  [8, 16, 18, 19, 35],
  [4, 12, 29, 33, 36],
  [1, 14, 32, 34, 36],
  [6, 9, 12, 22, 31],
  [1, 8, 9, 30, 35],
  [1, 3, 18, 22, 28],
  [3, 11, 21, 23, 36],
  [6, 10, 21, 32, 38],
  [10, 17, 19, 29, 37],
  [10, 22, 26, 32, 33],
  [14, 20, 21, 23, 34],
  [12, 15, 16, 23, 28],
  [6, 13, 16, 32, 39],
  [6, 11, 15, 28, 31],
  [20, 25, 31, 35, 38],
  [6, 20, 22, 36, 37],
  [3, 18, 19, 21, 22],
  [6, 8, 22, 29, 38],
  [23, 24, 28, 30, 31],
  [4, 16, 27, 30, 37],
  [2, 4, 15, 17, 30],
  [7, 11, 16, 34, 36],
  [12, 18, 31, 38, 39],
  [5, 9, 17, 24, 25],
  [21, 26, 29, 30, 34],
  [1, 3, 4, 35, 37],
  [3, 5, 12, 15, 33],
  [1, 3, 15, 18, 35],
  [2, 7, 10, 15, 33],
  [23, 25, 29, 31, 32],
  [11, 27, 30, 31, 38],
  [7, 14, 28, 29, 38],
  [7, 15, 22, 26, 37],
  [5, 12, 13, 21, 36],
  [17, 19, 29, 36, 37],
  [1, 3, 5, 19, 38],
  [26, 34, 36, 37, 39],
  [9, 19, 23, 36, 38],
  [2, 6, 20, 23, 36],
  [8, 11, 15, 20, 36],
  [5, 10, 27, 37, 38],
  [2, 8, 16, 18, 36],
  [12, 21, 23, 38, 39],
  [8, 12, 22, 35, 36],
  [18, 19, 22, 26, 28],
  [7, 8, 9, 14, 34],
  [2, 6, 16, 27, 39],
  [11, 16, 18, 19, 25],
  [10, 16, 26, 38, 39],
  [5, 24, 29, 34, 35],
  [1, 2, 4, 13, 27],
  [7, 11, 12, 24, 38],
  [7, 17, 27, 28, 33],
  [4, 11, 20, 34, 36],
  [5, 7, 30, 35, 38],
  [10, 21, 23, 27, 30],
  [1, 10, 16, 26, 29],
  [11, 12, 18, 23, 24],
  [2, 12, 15, 24, 35],
  [5, 9, 14, 20, 33],
  [4, 10, 12, 23, 26],
  [1, 3, 6, 21, 27],
  [8, 14, 22, 27, 35],
  [1, 13, 31, 34, 35],
  [4, 7, 15, 22, 30],
  [3, 9, 21, 27, 36],
  [12, 21, 24, 25, 39],
  [2, 3, 21, 26, 30],
  [13, 15, 18, 19, 33],
  [1, 3, 10, 14, 31],
  [1, 2, 9, 19, 31],
  [3, 9, 10, 13, 17],
  [6, 17, 21, 26, 28],
  [15, 28, 35, 36, 39],
  [6, 13, 15, 25, 28],
  [2, 10, 21, 22, 38],
  [3, 12, 20, 34, 35],
  [6, 14, 20, 28, 35],
  [17, 18, 32, 35, 37],
  [3, 6, 10, 17, 28],
  [16, 20, 21, 22, 25],
  [10, 14, 25, 31, 36],
  [9, 15, 22, 34, 36],
  [4, 10, 12, 21, 27],
  [3, 7, 12, 17, 37],
  [9, 24, 32, 36, 39],
  [3, 6, 13, 28, 35],
  [5, 6, 11, 16, 37],
  [2, 7, 13, 18, 28],
  [12, 28, 31, 35, 39],
  [4, 9, 18, 25, 39],
  [12, 13, 16, 26, 37],
  [5, 6, 11, 31, 35],
  [1, 12, 31, 38, 39],
  [1, 7, 11, 15, 29],
  [4, 14, 33, 36, 37],
  [7, 11, 18, 20, 22],
  [4, 6, 14, 26, 33],
  [9, 10, 21, 33, 35],
  [14, 19, 27, 30, 38],
  [5, 10, 11, 32, 37],
  [3, 5, 28, 32, 34],
  [1, 3, 16, 24, 31],
  [11, 13, 15, 23, 29],
  [14, 23, 26, 27, 34],
  [5, 16, 22, 26, 39],
  [1, 15, 32, 34, 38],
  [5, 13, 14, 17, 24],
  [16, 23, 29, 36, 39],
  [1, 7, 9, 20, 32],
  [2, 9, 32, 36, 37],
  [8, 12, 13, 23, 36],
  [4, 20, 24, 28, 38],
  [6, 10, 21, 24, 31],
  [7, 11, 17, 23, 25],
  [3, 4, 6, 14, 20],
  [3, 11, 20, 21, 36],
  [1, 4, 27, 34, 35],
  [11, 19, 24, 31, 32],
  [18, 19, 30, 33, 38],
  [3, 13, 26, 32, 34],
  [14, 19, 20, 29, 32],
  [3, 12, 17, 30, 38],
  [1, 2, 17, 20, 37],
  [5, 8, 35, 36, 37],
  [2, 8, 26, 32, 34],
  [2, 9, 15, 29, 38],
  [2, 10, 11, 14, 22],
  [12, 13, 16, 20, 32],
  [10, 12, 15, 16, 23],
  [1, 21, 22, 25, 27],
  [3, 13, 17, 32, 39],
  [25, 26, 32, 36, 37],
  [2, 21, 37, 38, 39],
  [15, 18, 27, 28, 31],
  [12, 16, 25, 27, 39],
  [2, 17, 26, 33, 35],
  [8, 11, 17, 19, 23],
  [3, 15, 16, 20, 22],
  [4, 20, 25, 33, 34],
  [9, 12, 15, 26, 33],
  [17, 18, 23, 24, 28],
  [4, 21, 24, 33, 35],
  [11, 17, 20, 22, 29],
  [2, 13, 31, 33, 36],
  [1, 9, 14, 31, 33],
  [1, 2, 13, 23, 37],
  [8, 17, 18, 19, 36],
  [16, 21, 23, 29, 30],
  [1, 19, 22, 25, 37],
  [7, 24, 26, 34, 36],
  [8, 10, 26, 28, 37],
  [5, 17, 24, 33, 34],
  [14, 19, 24, 30, 36],
  [1, 11, 27, 29, 31],
  [6, 20, 26, 30, 34],
  [7, 11, 12, 37, 38],
  [2, 3, 21, 23, 34],
  [1, 9, 17, 18, 39],
  [11, 12, 18, 20, 36],
  [1, 11, 15, 18, 37],
  [1, 12, 14, 24, 30],
  [2, 4, 16, 29, 38],
  [12, 18, 36, 37, 38],
  [12, 24, 27, 30, 35],
  [1, 19, 22, 24, 38],
  [11, 12, 26, 27, 32],
  [6, 7, 11, 17, 36],
  [1, 6, 12, 29, 37],
  [4, 5, 16, 19, 30],
  [2, 9, 13, 19, 28],
  [2, 7, 8, 10, 12],
  [1, 21, 28, 38, 39],
  [8, 12, 24, 28, 34],
  [9, 15, 20, 28, 32],
  [6, 9, 24, 30, 34],
  [7, 14, 20, 27, 39],
  [9, 17, 18, 32, 35],
  [6, 14, 32, 33, 36],
  [2, 9, 12, 16, 36],
  [7, 28, 30, 34, 39],
  [1, 2, 12, 13, 22],
  [2, 8, 16, 34, 37],
  [9, 11, 30, 34, 39],
  [25, 26, 28, 29, 37],
  [5, 9, 11, 23, 33],
  [5, 13, 21, 34, 35],
  [6, 16, 34, 35, 36],
  [4, 21, 26, 29, 36],
  [3, 5, 14, 22, 36],
  [9, 15, 21, 36, 37],
  [16, 20, 24, 31, 37],
  [11, 14, 19, 23, 24],
  [9, 26, 27, 31, 35],
  [10, 13, 27, 32, 37],
  [14, 27, 31, 36, 39],
  [5, 9, 28, 36, 38],
  [5, 16, 17, 36, 37],
  [6, 34, 35, 36, 39],
  [5, 8, 14, 20, 26],
  [3, 8, 13, 27, 33],
  [6, 8, 25, 37, 39],
  [3, 29, 34, 35, 37],
  [12, 15, 18, 19, 26],
  [7, 9, 31, 38, 39],
  [2, 9, 16, 18, 23],
  [16, 19, 22, 26, 37],
  [4, 7, 30, 32, 38],
  [9, 22, 25, 35, 39],
  [4, 12, 14, 17, 35],
  [4, 10, 19, 30, 31],
  [2, 5, 10, 12, 37],
  [4, 6, 14, 16, 20],
  [3, 27, 34, 37, 39],
  [10, 20, 24, 35, 39],
  [7, 10, 24, 27, 31],
  [20, 23, 30, 31, 35],
  [7, 8, 13, 22, 34],
  [1, 6, 15, 19, 39],
  [5, 11, 27, 38, 39],
  [2, 5, 8, 14, 32],
  [2, 10, 17, 21, 39],
  [1, 11, 13, 25, 37],
  [12, 17, 25, 31, 34],
  [3, 25, 29, 35, 38],
  [14, 15, 16, 24, 29],
  [14, 21, 22, 23, 35],
  [4, 14, 19, 25, 32],
  [2, 19, 27, 33, 35],
  [15, 20, 27, 30, 31],
  [1, 18, 21, 36, 37],
  [4, 11, 26, 34, 38],
  [11, 15, 24, 36, 37],
  [1, 9, 17, 31, 35],
  [7, 16, 25, 32, 34],
  [10, 18, 19, 26, 37],
  [1, 4, 8, 20, 22],
  [6, 8, 15, 28, 39],
  [13, 15, 18, 26, 28],
  [1, 6, 13, 22, 39],
  [9, 12, 25, 29, 35],
  [10, 11, 17, 24, 33],
  [8, 13, 25, 36, 38],
  [4, 8, 11, 19, 31],
  [6, 7, 16, 37, 38],
  [3, 7, 10, 26, 35],
  [1, 8, 18, 27, 30],
  [6, 11, 14, 18, 22],
  [6, 10, 20, 25, 32],
  [1, 9, 13, 31, 32],
  [2, 3, 10, 21, 36],
  [7, 14, 20, 24, 26],
  [5, 8, 17, 24, 28],
  [3, 11, 18, 21, 35],
  [5, 11, 17, 25, 30],
  [2, 18, 27, 29, 39],
  [4, 24, 29, 33, 37],
  [3, 5, 23, 26, 27],
  [10, 14, 21, 32, 33],
  [13, 20, 30, 31, 33],
  [4, 12, 13, 23, 25],
  [3, 7, 8, 17, 30],
  [3, 13, 28, 29, 38],
  [3, 6, 19, 20, 38],
  [1, 5, 11, 27, 29],
  [7, 13, 14, 21, 35],
  [5, 9, 20, 29, 34],
  [3, 11, 18, 25, 35],
  [4, 11, 16, 17, 24],
  [5, 13, 23, 29, 38],
  [7, 12, 15, 16, 18],
  [12, 27, 33, 35, 38],
  [5, 19, 23, 28, 39],
  [2, 15, 20, 33, 38],
  [6, 24, 31, 32, 33],
  [8, 9, 20, 28, 32],
  [7, 12, 13, 21, 24],
  [4, 22, 32, 34, 37],
  [2, 11, 16, 23, 29],
  [2, 9, 20, 34, 38],
  [3, 7, 8, 12, 35],
  [5, 11, 21, 23, 26],
  [3, 5, 7, 16, 31],
  [3, 24, 27, 33, 37],
  [7, 8, 11, 27, 33],
  [3, 9, 16, 19, 26],
  [12, 13, 14, 18, 32],
  [2, 6, 13, 18, 22],
  [1, 14, 15, 28, 39],
  [6, 18, 21, 29, 38],
  [5, 7, 12, 20, 38],
  [7, 15, 19, 20, 38],
  [17, 18, 24, 26, 30],
  [3, 20, 23, 27, 31],
  [11, 15, 32, 33, 34],
  [2, 7, 8, 10, 14],
  [12, 26, 30, 32, 33],
  [5, 6, 8, 11, 14],
  [8, 9, 12, 21, 23],
  [7, 21, 22, 27, 35],
  [13, 23, 27, 31, 37],
  [12, 18, 20, 24, 31],
  [2, 8, 19, 21, 29],
  [9, 11, 15, 18, 20],
  [5, 12, 13, 19, 34],
  [4, 12, 28, 35, 38],
  [10, 22, 31, 35, 36],
  [3, 21, 22, 26, 39],
  [9, 13, 23, 29, 34],
  [4, 7, 8, 24, 26],
  [7, 12, 18, 35, 39],
  [3, 12, 19, 32, 34],
  [1, 14, 18, 19, 22],
  [6, 19, 23, 26, 30],
  [4, 7, 17, 22, 35],
  [5, 9, 12, 14, 31],
  [1, 7, 32, 36, 37],
  [7, 8, 9, 17, 20],
  [1, 6, 16, 26, 31],
  [13, 22, 23, 24, 35],
  [4, 11, 25, 31, 32],
  [9, 11, 14, 18, 27],
  [1, 5, 9, 14, 26],
  [1, 10, 23, 32, 37],
  [9, 16, 29, 32, 39],
  [4, 16, 21, 23, 37],
  [1, 8, 16, 19, 31],
  [6, 7, 8, 14, 39],
  [3, 7, 22, 29, 34],
  [16, 21, 26, 29, 37],
  [8, 24, 28, 37, 38],
  [4, 5, 27, 35, 37],
  [12, 22, 26, 28, 35],
  [10, 18, 19, 27, 28],
  [2, 6, 19, 28, 29],
  [2, 7, 11, 20, 30],
  [11, 17, 29, 34, 39],
  [6, 8, 10, 21, 26],
  [9, 15, 29, 30, 39],
  [10, 12, 13, 19, 33],
  [3, 27, 28, 33, 38],
  [3, 7, 17, 24, 27],
  [11, 13, 18, 30, 35],
  [4, 7, 11, 19, 22],
  [8, 17, 18, 24, 36],
  [5, 11, 26, 33, 35],
  [3, 11, 24, 27, 36],
  [11, 12, 20, 28, 29],
  [5, 27, 31, 38, 39],
  [4, 16, 29, 31, 34],
  [8, 9, 12, 22, 27],
  [11, 18, 21, 23, 36],
  [15, 23, 29, 36, 39],
  [8, 12, 15, 18, 34],
  [9, 10, 19, 33, 35],
  [17, 23, 24, 27, 35],
  [2, 4, 7, 25, 37],
  [2, 21, 24, 27, 31],
  [6, 14, 27, 30, 33],
  [3, 4, 7, 11, 30],
  [6, 8, 18, 19, 28],
  [8, 15, 25, 26, 34],
  [7, 11, 13, 26, 30],
  [3, 13, 15, 19, 25],
  [11, 15, 25, 29, 34],
  [2, 16, 17, 27, 32],
  [5, 9, 15, 20, 26],
  [5, 13, 14, 26, 28],
  [7, 25, 32, 34, 35],
]



export default function LotteryAnalyzer() {
  const [searchNums, setSearchNums] = useState(["", ""]);
  const data1 = [
    [1, 12, 23, 34, 35],
    [5, 11, 19, 23, 37],
    [3, 8, 14, 23, 32],
    [7, 12, 18, 27, 31],
    [2, 9, 21, 23, 30],
  ]; // 模擬的開獎數據

  const handleInputChange = (index, value) => {
    const newSearchNums = [...searchNums];
    newSearchNums[index] = value;
    setSearchNums(newSearchNums);
  };

  // 計算號碼出現頻率
  const numberFrequency = {};
  data.flat().forEach((num) => {
    numberFrequency[num] = (numberFrequency[num] || 0) + 1;
  });
  const frequencyData = Object.entries(numberFrequency).map(([num, count]) => ({
    number: num,
    count,
  }));

  // 找出熱號 & 冷號
  const sortedNumbers = Object.entries(numberFrequency).sort((a, b) => b[1] - a[1]);
  const hotNumbers = sortedNumbers.slice(0, 3).map(([num]) => num);
  const coldNumbers = sortedNumbers.slice(-3).map(([num]) => num);

  // 連續號碼分析
  const consecutivePairs = {};
  data.forEach((row) => {
    row.sort((a, b) => a - b);
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] + 1 === row[i + 1]) {
        const pair = `${row[i]}-${row[i + 1]}`;
        consecutivePairs[pair] = (consecutivePairs[pair] || 0) + 1;
      }
    }
  });
  const consecutiveData = Object.entries(consecutivePairs)
    .map(([pair, count]) => ({ pair, count }))
    .sort((a, b) => b.count - a.count); // 排序：出現次數從高到低

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">539 彩票數據分析</h1>
      {/* 號碼出現頻率長條圖 */}
      <h2 className="text-lg font-semibold mb-2">號碼出現頻率</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={frequencyData}>
          <XAxis dataKey="number" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* 熱號 & 冷號顯示 */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">🔥 熱門號碼</h2>
        <p className="text-red-500 text-xl">{hotNumbers.join(", ")}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">❄️ 冷門號碼</h2>
        <p className="text-blue-500 text-xl">{coldNumbers.join(", ")}</p>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="輸入數字1"
          value={searchNums[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="輸入數字2"
          value={searchNums[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">期數</th>
            <th className="border p-2">開獎號碼</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                {row.map((num, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-8 h-8 mx-1 rounded-full leading-8 text-white ${searchNums.includes(num.toString())
                      ? "bg-red-500"
                      : "bg-gray-700"
                      }`}
                  >
                    {num}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 連續號碼分析 */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">🔗 連續號碼分析</h2>
        {consecutiveData.length > 0 ? (
          <ul className="list-disc pl-6">
            {consecutiveData.map(({ pair, count }, index) => (
              <li key={index} className="text-gray-700">
                {pair} 出現 {count} 次
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">沒有連續號碼</p>
        )}
      </div>
    </div>
  );
}