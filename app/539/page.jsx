
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";


const lotteryData = [
    { date: "2024/1/1", numbers: [3, 9, 27, 30, 33] },
    { date: "2024/1/2", numbers: [21, 22, 25, 30, 37] },
    { date: "2024/1/3", numbers: [1, 5, 21, 32, 37] },
    { date: "2024/1/4", numbers: [11, 27, 28, 29, 37] },
    { date: "2024/1/5", numbers: [10, 11, 14, 21, 33] },
    { date: "2024/1/6", numbers: [1, 16, 33, 37, 39] },
    { date: "2024/1/8", numbers: [7, 22, 35, 38, 39] },
    { date: "2024/1/9", numbers: [9, 17, 19, 23, 27] },
    { date: "2024/1/10", numbers: [3, 6, 15, 19, 24] },
    { date: "2024/1/11", numbers: [15, 23, 34, 36, 37] },
    { date: "2024/1/12", numbers: [1, 3, 12, 23, 31] },
    { date: "2024/1/13", numbers: [14, 20, 27, 33, 38] },
    { date: "2024/1/15", numbers: [1, 3, 10, 11, 35] },
    { date: "2024/1/16", numbers: [2, 5, 9, 27, 29] },
    { date: "2024/1/17", numbers: [10, 17, 32, 38, 39] },
    { date: "2024/1/18", numbers: [10, 27, 31, 32, 33] },
    { date: "2024/1/19", numbers: [2, 3, 13, 17, 35] },
    { date: "2024/1/20", numbers: [15, 20, 28, 36, 37] },
    { date: "2024/1/22", numbers: [3, 15, 17, 25, 36] },
    { date: "2024/1/23", numbers: [8, 16, 18, 19, 35] },
    { date: "2024/1/24", numbers: [4, 12, 29, 33, 36] },
    { date: "2024/1/25", numbers: [1, 14, 32, 34, 36] },
    { date: "2024/1/26", numbers: [6, 9, 12, 22, 31] },
    { date: "2024/1/27", numbers: [1, 8, 9, 30, 35] },
    { date: "2024/1/29", numbers: [1, 3, 18, 22, 28] },
    { date: "2024/1/30", numbers: [3, 11, 21, 23, 36] },
    { date: "2024/1/31", numbers: [6, 10, 21, 32, 38] },
    { date: "2024/2/1", numbers: [10, 17, 19, 29, 37] },
    { date: "2024/2/2", numbers: [10, 22, 26, 32, 33] },
    { date: "2024/2/3", numbers: [14, 20, 21, 23, 34] },
    { date: "2024/2/5", numbers: [12, 15, 16, 23, 28] },
    { date: "2024/2/6", numbers: [6, 13, 16, 32, 39] },
    { date: "2024/2/7", numbers: [6, 11, 15, 28, 31] },
    { date: "2024/2/8", numbers: [20, 25, 31, 35, 38] },
    { date: "2024/2/9", numbers: [6, 20, 22, 36, 37] },
    { date: "2024/2/10", numbers: [3, 18, 19, 21, 22] },
    { date: "2024/2/12", numbers: [6, 8, 22, 29, 38] },
    { date: "2024/2/13", numbers: [23, 24, 28, 30, 31] },
    { date: "2024/2/14", numbers: [4, 16, 27, 30, 37] },
    { date: "2024/2/15", numbers: [2, 4, 15, 17, 30] },
    { date: "2024/2/16", numbers: [7, 11, 16, 34, 36] },
    { date: "2024/2/17", numbers: [12, 18, 31, 38, 39] },
    { date: "2024/2/19", numbers: [5, 9, 17, 24, 25] },
    { date: "2024/2/20", numbers: [21, 26, 29, 30, 34] },
    { date: "2024/2/21", numbers: [1, 3, 4, 35, 37] },
    { date: "2024/2/22", numbers: [3, 5, 12, 15, 33] },
    { date: "2024/2/23", numbers: [1, 3, 15, 18, 35] },
    { date: "2024/2/24", numbers: [2, 7, 10, 15, 33] },
    { date: "2024/2/26", numbers: [23, 25, 29, 31, 32] },
    { date: "2024/2/27", numbers: [11, 27, 30, 31, 38] },
    { date: "2024/2/28", numbers: [7, 14, 28, 29, 38] },
    { date: "2024/2/29", numbers: [7, 15, 22, 26, 37] },
    { date: "2024/3/1", numbers: [5, 12, 13, 21, 36] },
    { date: "2024/3/2", numbers: [17, 19, 29, 36, 37] },
    { date: "2024/3/4", numbers: [1, 3, 5, 19, 38] },
    { date: "2024/3/5", numbers: [26, 34, 36, 37, 39] },
    { date: "2024/3/6", numbers: [9, 19, 23, 36, 38] },
    { date: "2024/3/7", numbers: [2, 6, 20, 23, 36] },
    { date: "2024/3/8", numbers: [8, 11, 15, 20, 36] },
    { date: "2024/3/9", numbers: [5, 10, 27, 37, 38] },
    { date: "2024/3/11", numbers: [2, 8, 16, 18, 36] },
    { date: "2024/3/12", numbers: [12, 21, 23, 38, 39] },
    { date: "2024/3/13", numbers: [8, 12, 22, 35, 36] },
    { date: "2024/3/14", numbers: [18, 19, 22, 26, 28] },
    { date: "2024/3/15", numbers: [7, 8, 9, 14, 34] },
    { date: "2024/3/16", numbers: [2, 6, 16, 27, 39] },
    { date: "2024/3/18", numbers: [11, 16, 18, 19, 25] },
    { date: "2024/3/19", numbers: [10, 16, 26, 38, 39] },
    { date: "2024/3/20", numbers: [5, 24, 29, 34, 35] },
    { date: "2024/3/21", numbers: [1, 2, 4, 13, 27] },
    { date: "2024/3/22", numbers: [7, 11, 12, 24, 38] },
    { date: "2024/3/23", numbers: [7, 17, 27, 28, 33] },
    { date: "2024/3/25", numbers: [4, 11, 20, 34, 36] },
    { date: "2024/3/26", numbers: [5, 7, 30, 35, 38] },
    { date: "2024/3/27", numbers: [10, 21, 23, 27, 30] },
    { date: "2024/3/28", numbers: [1, 10, 16, 26, 29] },
    { date: "2024/3/29", numbers: [11, 12, 18, 23, 24] },
    { date: "2024/3/30", numbers: [2, 12, 15, 24, 35] },
    { date: "2024/4/1", numbers: [5, 9, 14, 20, 33] },
    { date: "2024/4/2", numbers: [4, 10, 12, 23, 26] },
    { date: "2024/4/3", numbers: [1, 3, 6, 21, 27] },
    { date: "2024/4/4", numbers: [8, 14, 22, 27, 35] },
    { date: "2024/4/5", numbers: [1, 13, 31, 34, 35] },
    { date: "2024/4/6", numbers: [4, 7, 15, 22, 30] },
    { date: "2024/4/8", numbers: [3, 9, 21, 27, 36] },
    { date: "2024/4/9", numbers: [12, 21, 24, 25, 39] },
    { date: "2024/4/10", numbers: [2, 3, 21, 26, 30] },
    { date: "2024/4/11", numbers: [13, 15, 18, 19, 33] },
    { date: "2024/4/12", numbers: [1, 3, 10, 14, 31] },
    { date: "2024/4/13", numbers: [1, 2, 9, 19, 31] },
    { date: "2024/4/15", numbers: [3, 9, 10, 13, 17] },
    { date: "2024/4/16", numbers: [6, 17, 21, 26, 28] },
    { date: "2024/4/17", numbers: [15, 28, 35, 36, 39] },
    { date: "2024/4/18", numbers: [6, 13, 15, 25, 28] },
    { date: "2024/4/19", numbers: [2, 10, 21, 22, 38] },
    { date: "2024/4/20", numbers: [3, 12, 20, 34, 35] },
    { date: "2024/4/22", numbers: [6, 14, 20, 28, 35] },
    { date: "2024/4/23", numbers: [17, 18, 32, 35, 37] },
    { date: "2024/4/24", numbers: [3, 6, 10, 17, 28] },
    { date: "2024/4/25", numbers: [16, 20, 21, 22, 25] },
    { date: "2024/4/26", numbers: [10, 14, 25, 31, 36] },
    { date: "2024/4/27", numbers: [9, 15, 22, 34, 36] },
    { date: "2024/4/29", numbers: [4, 10, 12, 21, 27] },
    { date: "2024/4/30", numbers: [3, 7, 12, 17, 37] },
    { date: "2024/5/1", numbers: [9, 24, 32, 36, 39] },
    { date: "2024/5/2", numbers: [3, 6, 13, 28, 35] },
    { date: "2024/5/3", numbers: [5, 6, 11, 16, 37] },
    { date: "2024/5/4", numbers: [2, 7, 13, 18, 28] },
    { date: "2024/5/6", numbers: [12, 28, 31, 35, 39] },
    { date: "2024/5/7", numbers: [4, 9, 18, 25, 39] },
    { date: "2024/5/8", numbers: [12, 13, 16, 26, 37] },
    { date: "2024/5/9", numbers: [5, 6, 11, 31, 35] },
    { date: "2024/5/10", numbers: [1, 12, 31, 38, 39] },
    { date: "2024/5/11", numbers: [1, 7, 11, 15, 29] },
    { date: "2024/5/13", numbers: [4, 14, 33, 36, 37] },
    { date: "2024/5/14", numbers: [7, 11, 18, 20, 22] },
    { date: "2024/5/15", numbers: [4, 6, 14, 26, 33] },
    { date: "2024/5/16", numbers: [9, 10, 21, 33, 35] },
    { date: "2024/5/17", numbers: [14, 19, 27, 30, 38] },
    { date: "2024/5/18", numbers: [5, 10, 11, 32, 37] },
    { date: "2024/5/20", numbers: [3, 5, 28, 32, 34] },
    { date: "2024/5/21", numbers: [1, 3, 16, 24, 31] },
    { date: "2024/5/22", numbers: [11, 13, 15, 23, 29] },
    { date: "2024/5/23", numbers: [14, 23, 26, 27, 34] },
    { date: "2024/5/24", numbers: [5, 16, 22, 26, 39] },
    { date: "2024/5/25", numbers: [1, 15, 32, 34, 38] },
    { date: "2024/5/27", numbers: [5, 13, 14, 17, 24] },
    { date: "2024/5/28", numbers: [16, 23, 29, 36, 39] },
    { date: "2024/5/29", numbers: [1, 7, 9, 20, 32] },
    { date: "2024/5/30", numbers: [2, 9, 32, 36, 37] },
    { date: "2024/5/31", numbers: [8, 12, 13, 23, 36] },
    { date: "2024/6/1", numbers: [4, 20, 24, 28, 38] },
    { date: "2024/6/3", numbers: [6, 10, 21, 24, 31] },
    { date: "2024/6/4", numbers: [7, 11, 17, 23, 25] },
    { date: "2024/6/5", numbers: [3, 4, 6, 14, 20] },
    { date: "2024/6/6", numbers: [3, 11, 20, 21, 36] },
    { date: "2024/6/7", numbers: [1, 4, 27, 34, 35] },
    { date: "2024/6/8", numbers: [11, 19, 24, 31, 32] },
    { date: "2024/6/10", numbers: [18, 19, 30, 33, 38] },
    { date: "2024/6/11", numbers: [3, 13, 26, 32, 34] },
    { date: "2024/6/12", numbers: [14, 19, 20, 29, 32] },
    { date: "2024/6/13", numbers: [3, 12, 17, 30, 38] },
    { date: "2024/6/14", numbers: [1, 2, 17, 20, 37] },
    { date: "2024/6/15", numbers: [5, 8, 35, 36, 37] },
    { date: "2024/6/17", numbers: [2, 8, 26, 32, 34] },
    { date: "2024/6/18", numbers: [2, 9, 15, 29, 38] },
    { date: "2024/6/19", numbers: [2, 10, 11, 14, 22] },
    { date: "2024/6/20", numbers: [12, 13, 16, 20, 32] },
    { date: "2024/6/21", numbers: [10, 12, 15, 16, 23] },
    { date: "2024/6/22", numbers: [1, 21, 22, 25, 27] },
    { date: "2024/6/24", numbers: [3, 13, 17, 32, 39] },
    { date: "2024/6/25", numbers: [25, 26, 32, 36, 37] },
    { date: "2024/6/26", numbers: [2, 21, 37, 38, 39] },
    { date: "2024/6/27", numbers: [15, 18, 27, 28, 31] },
    { date: "2024/6/28", numbers: [12, 16, 25, 27, 39] },
    { date: "2024/6/29", numbers: [2, 17, 26, 33, 35] },
    { date: "2024/7/1", numbers: [8, 11, 17, 19, 23] },
    { date: "2024/7/2", numbers: [3, 15, 16, 20, 22] },
    { date: "2024/7/3", numbers: [4, 20, 25, 33, 34] },
    { date: "2024/7/4", numbers: [9, 12, 15, 26, 33] },
    { date: "2024/7/5", numbers: [17, 18, 23, 24, 28] },
    { date: "2024/7/6", numbers: [4, 21, 24, 33, 35] },
    { date: "2024/7/8", numbers: [11, 17, 20, 22, 29] },
    { date: "2024/7/9", numbers: [2, 13, 31, 33, 36] },
    { date: "2024/7/10", numbers: [1, 9, 14, 31, 33] },
    { date: "2024/7/11", numbers: [1, 2, 13, 23, 37] },
    { date: "2024/7/12", numbers: [8, 17, 18, 19, 36] },
    { date: "2024/7/13", numbers: [16, 21, 23, 29, 30] },
    { date: "2024/7/15", numbers: [1, 19, 22, 25, 37] },
    { date: "2024/7/16", numbers: [7, 24, 26, 34, 36] },
    { date: "2024/7/17", numbers: [8, 10, 26, 28, 37] },
    { date: "2024/7/18", numbers: [5, 17, 24, 33, 34] },
    { date: "2024/7/19", numbers: [14, 19, 24, 30, 36] },
    { date: "2024/7/20", numbers: [1, 11, 27, 29, 31] },
    { date: "2024/7/22", numbers: [6, 20, 26, 30, 34] },
    { date: "2024/7/23", numbers: [7, 11, 12, 37, 38] },
    { date: "2024/7/24", numbers: [2, 3, 21, 23, 34] },
    { date: "2024/7/25", numbers: [1, 9, 17, 18, 39] },
    { date: "2024/7/26", numbers: [11, 12, 18, 20, 36] },
    { date: "2024/7/27", numbers: [1, 11, 15, 18, 37] },
    { date: "2024/7/29", numbers: [1, 12, 14, 24, 30] },
    { date: "2024/7/30", numbers: [2, 4, 16, 29, 38] },
    { date: "2024/7/31", numbers: [12, 18, 36, 37, 38] },
    { date: "2024/8/1", numbers: [12, 24, 27, 30, 35] },
    { date: "2024/8/2", numbers: [1, 19, 22, 24, 38] },
    { date: "2024/8/3", numbers: [11, 12, 26, 27, 32] },
    { date: "2024/8/5", numbers: [6, 7, 11, 17, 36] },
    { date: "2024/8/6", numbers: [1, 6, 12, 29, 37] },
    { date: "2024/8/7", numbers: [4, 5, 16, 19, 30] },
    { date: "2024/8/8", numbers: [2, 9, 13, 19, 28] },
    { date: "2024/8/9", numbers: [2, 7, 8, 10, 12] },
    { date: "2024/8/10", numbers: [1, 21, 28, 38, 39] },
    { date: "2024/8/12", numbers: [8, 12, 24, 28, 34] },
    { date: "2024/8/13", numbers: [9, 15, 20, 28, 32] },
    { date: "2024/8/14", numbers: [6, 9, 24, 30, 34] },
    { date: "2024/8/15", numbers: [7, 14, 20, 27, 39] },
    { date: "2024/8/16", numbers: [9, 17, 18, 32, 35] },
    { date: "2024/8/17", numbers: [6, 14, 32, 33, 36] },
    { date: "2024/8/19", numbers: [2, 9, 12, 16, 36] },
    { date: "2024/8/20", numbers: [7, 28, 30, 34, 39] },
    { date: "2024/8/21", numbers: [1, 2, 12, 13, 22] },
    { date: "2024/8/22", numbers: [2, 8, 16, 34, 37] },
    { date: "2024/8/23", numbers: [9, 11, 30, 34, 39] },
    { date: "2024/8/24", numbers: [25, 26, 28, 29, 37] },
    { date: "2024/8/26", numbers: [5, 9, 11, 23, 33] },
    { date: "2024/8/27", numbers: [5, 13, 21, 34, 35] },
    { date: "2024/8/28", numbers: [6, 16, 34, 35, 36] },
    { date: "2024/8/29", numbers: [4, 21, 26, 29, 36] },
    { date: "2024/8/30", numbers: [3, 5, 14, 22, 36] },
    { date: "2024/8/31", numbers: [9, 15, 21, 36, 37] },
    { date: "2024/9/2", numbers: [16, 20, 24, 31, 37] },
    { date: "2024/9/3", numbers: [11, 14, 19, 23, 24] },
    { date: "2024/9/4", numbers: [9, 26, 27, 31, 35] },
    { date: "2024/9/5", numbers: [10, 13, 27, 32, 37] },
    { date: "2024/9/6", numbers: [14, 27, 31, 36, 39] },
    { date: "2024/9/7", numbers: [5, 9, 28, 36, 38] },
    { date: "2024/9/9", numbers: [5, 16, 17, 36, 37] },
    { date: "2024/9/10", numbers: [6, 34, 35, 36, 39] },
    { date: "2024/9/11", numbers: [5, 8, 14, 20, 26] },
    { date: "2024/9/12", numbers: [3, 8, 13, 27, 33] },
    { date: "2024/9/13", numbers: [6, 8, 25, 37, 39] },
    { date: "2024/9/14", numbers: [3, 29, 34, 35, 37] },
    { date: "2024/9/16", numbers: [12, 15, 18, 19, 26] },
    { date: "2024/9/17", numbers: [7, 9, 31, 38, 39] },
    { date: "2024/9/18", numbers: [2, 9, 16, 18, 23] },
    { date: "2024/9/19", numbers: [16, 19, 22, 26, 37] },
    { date: "2024/9/20", numbers: [4, 7, 30, 32, 38] },
    { date: "2024/9/21", numbers: [9, 22, 25, 35, 39] },
    { date: "2024/9/23", numbers: [4, 12, 14, 17, 35] },
    { date: "2024/9/24", numbers: [4, 10, 19, 30, 31] },
    { date: "2024/9/25", numbers: [2, 5, 10, 12, 37] },
    { date: "2024/9/26", numbers: [4, 6, 14, 16, 20] },
    { date: "2024/9/27", numbers: [3, 27, 34, 37, 39] },
    { date: "2024/9/28", numbers: [10, 20, 24, 35, 39] },
    { date: "2024/9/30", numbers: [7, 10, 24, 27, 31] },
    { date: "2024/10/1", numbers: [20, 23, 30, 31, 35] },
    { date: "2024/10/2", numbers: [7, 8, 13, 22, 34] },
    { date: "2024/10/3", numbers: [1, 6, 15, 19, 39] },
    { date: "2024/10/4", numbers: [5, 11, 27, 38, 39] },
    { date: "2024/10/5", numbers: [2, 5, 8, 14, 32] },
    { date: "2024/10/7", numbers: [2, 10, 17, 21, 39] },
    { date: "2024/10/8", numbers: [1, 11, 13, 25, 37] },
    { date: "2024/10/9", numbers: [12, 17, 25, 31, 34] },
    { date: "2024/10/10", numbers: [3, 25, 29, 35, 38] },
    { date: "2024/10/11", numbers: [14, 15, 16, 24, 29] },
    { date: "2024/10/12", numbers: [14, 21, 22, 23, 35] },
    { date: "2024/10/14", numbers: [4, 14, 19, 25, 32] },
    { date: "2024/10/15", numbers: [2, 19, 27, 33, 35] },
    { date: "2024/10/16", numbers: [15, 20, 27, 30, 31] },
    { date: "2024/10/17", numbers: [1, 18, 21, 36, 37] },
    { date: "2024/10/18", numbers: [4, 11, 26, 34, 38] },
    { date: "2024/10/19", numbers: [11, 15, 24, 36, 37] },
    { date: "2024/10/21", numbers: [1, 9, 17, 31, 35] },
    { date: "2024/10/22", numbers: [7, 16, 25, 32, 34] },
    { date: "2024/10/23", numbers: [10, 18, 19, 26, 37] },
    { date: "2024/10/24", numbers: [1, 4, 8, 20, 22] },
    { date: "2024/10/25", numbers: [6, 8, 15, 28, 39] },
    { date: "2024/10/26", numbers: [13, 15, 18, 26, 28] },
    { date: "2024/10/28", numbers: [1, 6, 13, 22, 39] },
    { date: "2024/10/29", numbers: [9, 12, 25, 29, 35] },
    { date: "2024/10/30", numbers: [10, 11, 17, 24, 33] },
    { date: "2024/10/31", numbers: [8, 13, 25, 36, 38] },
    { date: "2024/11/1", numbers: [4, 8, 11, 19, 31] },
    { date: "2024/11/2", numbers: [6, 7, 16, 37, 38] },
    { date: "2024/11/4", numbers: [3, 7, 10, 26, 35] },
    { date: "2024/11/5", numbers: [1, 8, 18, 27, 30] },
    { date: "2024/11/6", numbers: [6, 11, 14, 18, 22] },
    { date: "2024/11/7", numbers: [6, 10, 20, 25, 32] },
    { date: "2024/11/8", numbers: [1, 9, 13, 31, 32] },
    { date: "2024/11/9", numbers: [2, 3, 10, 21, 36] },
    { date: "2024/11/11", numbers: [7, 14, 20, 24, 26] },
    { date: "2024/11/12", numbers: [5, 8, 17, 24, 28] },
    { date: "2024/11/13", numbers: [3, 11, 18, 21, 35] },
    { date: "2024/11/14", numbers: [5, 11, 17, 25, 30] },
    { date: "2024/11/15", numbers: [2, 18, 27, 29, 39] },
    { date: "2024/11/16", numbers: [4, 24, 29, 33, 37] },
    { date: "2024/11/18", numbers: [3, 5, 23, 26, 27] },
    { date: "2024/11/19", numbers: [10, 14, 21, 32, 33] },
    { date: "2024/11/20", numbers: [13, 20, 30, 31, 33] },
    { date: "2024/11/21", numbers: [4, 12, 13, 23, 25] },
    { date: "2024/11/22", numbers: [3, 7, 8, 17, 30] },
    { date: "2024/11/23", numbers: [3, 13, 28, 29, 38] },
    { date: "2024/11/25", numbers: [3, 6, 19, 20, 38] },
    { date: "2024/11/26", numbers: [1, 5, 11, 27, 29] },
    { date: "2024/11/27", numbers: [7, 13, 14, 21, 35] },
    { date: "2024/11/28", numbers: [5, 9, 20, 29, 34] },
    { date: "2024/11/29", numbers: [3, 11, 18, 25, 35] },
    { date: "2024/11/30", numbers: [4, 11, 16, 17, 24] },
    { date: "2024/12/2", numbers: [5, 13, 23, 29, 38] },
    { date: "2024/12/3", numbers: [7, 12, 15, 16, 18] },
    { date: "2024/12/4", numbers: [12, 27, 33, 35, 38] },
    { date: "2024/12/5", numbers: [5, 19, 23, 28, 39] },
    { date: "2024/12/6", numbers: [2, 15, 20, 33, 38] },
    { date: "2024/12/7", numbers: [6, 24, 31, 32, 33] },
    { date: "2024/12/9", numbers: [8, 9, 20, 28, 32] },
    { date: "2024/12/10", numbers: [7, 12, 13, 21, 24] },
    { date: "2024/12/11", numbers: [4, 22, 32, 34, 37] },
    { date: "2024/12/12", numbers: [2, 11, 16, 23, 29] },
    { date: "2024/12/13", numbers: [2, 9, 20, 34, 38] },
    { date: "2024/12/14", numbers: [3, 7, 8, 12, 35] },
    { date: "2024/12/16", numbers: [5, 11, 21, 23, 26] },
    { date: "2024/12/17", numbers: [3, 5, 7, 16, 31] },
    { date: "2024/12/18", numbers: [3, 24, 27, 33, 37] },
    { date: "2024/12/19", numbers: [7, 8, 11, 27, 33] },
    { date: "2024/12/20", numbers: [3, 9, 16, 19, 26] },
    { date: "2024/12/21", numbers: [12, 13, 14, 18, 32] },
    { date: "2024/12/23", numbers: [2, 6, 13, 18, 22] },
    { date: "2024/12/24", numbers: [1, 14, 15, 28, 39] },
    { date: "2024/12/25", numbers: [6, 18, 21, 29, 38] },
    { date: "2024/12/26", numbers: [5, 7, 12, 20, 38] },
    { date: "2024/12/27", numbers: [7, 15, 19, 20, 38] },
    { date: "2024/12/28", numbers: [17, 18, 24, 26, 30] },
    { date: "2024/12/30", numbers: [3, 20, 23, 27, 31] },
    { date: "2024/12/31", numbers: [11, 15, 32, 33, 34] },
    { date: "2025/1/1", numbers: [2, 7, 8, 10, 14] },
    { date: "2025/1/2", numbers: [12, 26, 30, 32, 33] },
    { date: "2025/1/3", numbers: [5, 6, 8, 11, 14] },
    { date: "2025/1/4", numbers: [8, 9, 12, 21, 23] },
    { date: "2025/1/6", numbers: [7, 21, 22, 27, 35] },
    { date: "2025/1/7", numbers: [13, 23, 27, 31, 37] },
    { date: "2025/1/8", numbers: [12, 18, 20, 24, 31] },
    { date: "2025/1/9", numbers: [2, 8, 19, 21, 29] },
    { date: "2025/1/10", numbers: [9, 11, 15, 18, 20] },
    { date: "2025/1/11", numbers: [5, 12, 13, 19, 34] },
    { date: "2025/1/13", numbers: [4, 12, 28, 35, 38] },
    { date: "2025/1/14", numbers: [10, 22, 31, 35, 36] },
    { date: "2025/1/15", numbers: [3, 21, 22, 26, 39] },
    { date: "2025/1/16", numbers: [9, 13, 23, 29, 34] },
    { date: "2025/1/17", numbers: [4, 7, 8, 24, 26] },
    { date: "2025/1/18", numbers: [7, 12, 18, 35, 39] },
    { date: "2025/1/20", numbers: [3, 12, 19, 32, 34] },
    { date: "2025/1/21", numbers: [1, 14, 18, 19, 22] },
    { date: "2025/1/22", numbers: [6, 19, 23, 26, 30] },
    { date: "2025/1/23", numbers: [4, 7, 17, 22, 35] },
    { date: "2025/1/24", numbers: [5, 9, 12, 14, 31] },
    { date: "2025/1/25", numbers: [1, 7, 32, 36, 37] },
    { date: "2025/1/26", numbers: [7, 8, 9, 17, 20] },
    { date: "2025/1/27", numbers: [1, 6, 16, 26, 31] },
    { date: "2025/1/28", numbers: [13, 22, 23, 24, 35] },
    { date: "2025/1/29", numbers: [4, 11, 25, 31, 32] },
    { date: "2025/1/30", numbers: [9, 11, 14, 18, 27] },
    { date: "2025/1/31", numbers: [1, 5, 9, 14, 26] },
    { date: "2025/2/1", numbers: [1, 10, 23, 32, 37] },
    { date: "2025/2/2", numbers: [9, 16, 29, 32, 39] },
    { date: "2025/2/3", numbers: [4, 16, 21, 23, 37] },
    { date: "2025/2/4", numbers: [1, 8, 16, 19, 31] },
    { date: "2025/2/5", numbers: [6, 7, 8, 14, 39] },
    { date: "2025/2/6", numbers: [3, 7, 22, 29, 34] },
    { date: "2025/2/7", numbers: [16, 21, 26, 29, 37] },
    { date: "2025/2/8", numbers: [8, 24, 28, 37, 38] },
    { date: "2025/2/9", numbers: [4, 5, 27, 35, 37] },
    { date: "2025/2/10", numbers: [12, 22, 26, 28, 35] },
    { date: "2025/2/11", numbers: [10, 18, 19, 27, 28] },
    { date: "2025/2/12", numbers: [2, 6, 19, 28, 29] },
    { date: "2025/2/13", numbers: [2, 7, 11, 20, 30] },
    { date: "2025/2/14", numbers: [11, 17, 29, 34, 39] },
    { date: "2025/2/15", numbers: [6, 8, 10, 21, 26] },
    { date: "2025/2/17", numbers: [9, 15, 29, 30, 39] },
    { date: "2025/2/18", numbers: [10, 12, 13, 19, 33] },
    { date: "2025/2/19", numbers: [3, 27, 28, 33, 38] },
    { date: "2025/2/20", numbers: [3, 7, 17, 24, 27] },
    { date: "2025/2/21", numbers: [11, 13, 18, 30, 35] },
    { date: "2025/2/22", numbers: [4, 7, 11, 19, 22] },
    { date: "2025/2/24", numbers: [8, 17, 18, 24, 36] },
    { date: "2025/2/25", numbers: [5, 11, 26, 33, 35] },
    { date: "2025/2/26", numbers: [3, 11, 24, 27, 36] },
    { date: "2025/2/27", numbers: [11, 12, 20, 28, 29] },
    { date: "2025/2/28", numbers: [5, 27, 31, 38, 39] },
    { date: "2025/3/1", numbers: [4, 16, 29, 31, 34] },
    { date: "2025/3/3", numbers: [8, 9, 12, 22, 27] },
    { date: "2025/3/4", numbers: [11, 18, 21, 23, 36] },
    { date: "2025/3/5", numbers: [15, 23, 29, 36, 39] },
    { date: "2025/3/6", numbers: [8, 12, 15, 18, 34] },
    { date: "2025/3/7", numbers: [9, 10, 19, 33, 35] },
    { date: "2025/3/8", numbers: [17, 23, 24, 27, 35] },
    { date: "2025/3/10", numbers: [2, 4, 7, 25, 37] },
    { date: "2025/3/11", numbers: [2, 21, 24, 27, 31] },
    { date: "2025/3/12", numbers: [6, 14, 27, 30, 33] },
    { date: "2025/3/13", numbers: [3, 4, 7, 11, 30] },
    { date: "2025/3/14", numbers: [6, 8, 18, 19, 28] },
    { date: "2025/3/15", numbers: [8, 15, 25, 26, 34] },
    { date: "2025/3/17", numbers: [7, 11, 13, 26, 30] },
    { date: "2025/3/18", numbers: [3, 13, 15, 19, 25] },
    { date: "2025/3/19", numbers: [11, 15, 25, 29, 34] },
    { date: "2025/3/20", numbers: [2, 16, 17, 27, 32] },
    { date: "2025/3/21", numbers: [5, 9, 15, 20, 26] },
    { date: "2025/3/22", numbers: [5, 13, 16, 24, 28] },
    { date: "2025/3/24", numbers: [7, 25, 32, 34, 35] },
    { date: "2025/3/25", numbers: [4, 20, 24, 27, 38] },
    { date: "2025/3/26", numbers: [1, 10, 12, 32, 35] },
    { date: "2025/3/27", numbers: [5, 25, 33, 36, 37] },
    { date: "2025/3/28", numbers: [13, 24, 25, 36, 39] },
    { date: "2025/3/29", numbers: [4, 9, 12, 17, 27] },
    { date: "2025/3/31", numbers: [7, 10, 13, 23, 26] },
    { date: "2025/4/1", numbers: [5, 13, 17, 19, 31] },
    { date: "2025/4/2", numbers: [4, 8, 29, 32, 34] },
    { date: "2025/4/3", numbers: [5, 16, 23, 31, 39] },
    { date: "2025/4/4", numbers: [3, 6, 7, 36, 38] },
    { date: "2025/4/5", numbers: [12, 13, 14, 15, 24] },
    { date: "2025/4/7", numbers: [1, 6, 19, 26, 33] },
    { date: "2025/4/8", numbers: [6, 17, 18, 19, 32] },
    { date: "2025/4/9", numbers: [4, 6, 14, 24, 35] },
    { date: "2025/4/10", numbers: [14, 19, 22, 26, 28] },
    { date: "2025/4/11", numbers: [15, 17, 26, 27, 35] },
    { date: "2025/4/12", numbers: [9, 11, 15, 25, 31] },
    { date: "2025/4/14", numbers: [9, 10, 22, 30, 33] },
    { date: "2025/4/15", numbers: [2, 3, 16, 27, 39] },
    { date: "2025/4/16", numbers: [7, 22, 25, 29, 38] },
    { date: "2025/4/17", numbers: [3, 6, 23, 24, 37] },
    { date: "2025/4/18", numbers: [7, 24, 28, 31, 36] },
    { date: "2025/4/19", numbers: [14, 19, 21, 26, 36] }
];

const LotteryResults = () => {
    const [data, setData] = useState([]);
    const [searchNums, setSearchNums] = useState(["", "", "", "", ""]);
    // const searchNums = [12, 19, 35]; // 假設這是使用者搜尋的數字

    const handleInputChange = (index, value) => {
        const newSearchNums = [...searchNums];
        newSearchNums[index] = value;
        setSearchNums(newSearchNums);
    };

    useEffect(() => {
        // 模擬從 API 獲取數據
        const fetchData = async () => {


            // 排序日期（新到舊）
            const sortedData = lotteryData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setData(sortedData);
        };

        fetchData();
    }, []);

    // 格式化日期為「YYYY年M月D日」
    const formatDate = (dateStr) => {
        return new Intl.DateTimeFormat("zh-TW", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(dateStr));
    };

    return (
        <div>
            <nav className="bg-blue-600 p-4 text-white flex space-x-4">
                <Link href="/">
                    <div className="hover:underline">首頁</div>
                </Link>
                <Link href="/539">
                    <div className="hover:underline">開獎結果</div>
                </Link>
                {/* <Link href="/stats">
                    <div className="hover:underline">統計分析</div>
                </Link> */}
            </nav>
            <h2>開獎總表</h2>
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
            <input
                type="number"
                placeholder="輸入數字3"
                value={searchNums[2]}
                onChange={(e) => handleInputChange(2, e.target.value)}
                className="border p-2 rounded"
            />
            <input
                type="number"
                placeholder="輸入數字4"
                value={searchNums[3]}
                onChange={(e) => handleInputChange(3, e.target.value)}
                className="border p-2 rounded"
            />
            <input
                type="number"
                placeholder="輸入數字5"
                value={searchNums[4]}
                onChange={(e) => handleInputChange(4, e.target.value)}
                className="border p-2 rounded"
            />
            <table className="w-full border-collapse border border-gray-500">
                <thead>
                    <tr>
                        {/* <th className="border p-2">序號</th> */}
                        <th className="border p-2">日期</th>
                        <th className="border p-2">開獎號碼</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="text-center">
                            <td className="border p-2">{formatDate(row.date)}</td>
                            {/* <td className="border p-2">{index + 1}</td> */}
                            <td className="border p-2">
                                {row.numbers.map((num, idx) => (
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
        </div>
    );
};

export default LotteryResults;
