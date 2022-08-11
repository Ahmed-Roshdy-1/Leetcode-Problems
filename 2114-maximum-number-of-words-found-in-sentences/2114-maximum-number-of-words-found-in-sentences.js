/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let ans = [],t=0;
    for (let i = 0; i < sentences.length; i++) {
        ans[i] = sentences[i].split(" ");
    }
    for (let i = 0; i < ans.length; i++) {
        if(t<ans[i].length){
            t=ans[i].length;
        }
    }

    return t;
};