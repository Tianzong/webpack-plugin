/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]

    for (let i = 1; i <  intervals.length; i++) {
        const curInterval = intervals[i]
        const beforeInterval = res[res.length - 1]

        // 合并
        if(curInterval[0] <= beforeInterval[1]) {
            beforeInterval[1] = Math.max(beforeInterval[1], curInterval[1])
        } else {
            res.push(intervals[i])
        }
    }

    return res
};