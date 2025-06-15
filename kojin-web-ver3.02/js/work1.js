// work1.js
// 生成乘法表的函數
function myFunction() {
    var n = document.getElementById('numberInput').value;
    var str = "<table>";
    for (let i = 1; i <= n; i++) {
        str += "<tr>";
        for (let j = 1; j <= n; j++) {
            if (j === 1) {
                str += `<td class=\"highlight\"> ${i} * ${j} = ${i * j}</td>`;
            } else {
                str += `<td> ${i} * ${j} = ${i * j}</td>`;
            }
        }
        str += "</tr>";
    }
    str += "</table>";
    document.getElementById("myId").innerHTML = str;
}
