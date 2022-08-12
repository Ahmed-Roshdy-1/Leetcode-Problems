function removePract(a) {
    let ans="";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "(" || a[i] === ")") {
            continue;
        } else {
            ans += a[i];
        }
    }
    return ans;
}

var interpret = function (command) {
    let ans = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(" && command[i + 1] === ")") {
            ans += "o";

            i++;
        } else {
            ans += command[i];
        }
    }
    ans = removePract(ans);
    return ans;
};
