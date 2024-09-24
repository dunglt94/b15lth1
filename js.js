// // Bài 1
// function alertMessage() {
//     alert("Xin chào!")
// }
//
// // Bài 2
// function increaseNumber(n) {
//     n = +prompt("Nhập số:");;
//     document.write(n + 1);
// }
//
// // Bài 3
// function compareAWithB(a, b) {
//     a = +prompt("Nhập a:");
//     b = +prompt("Nhập b:");
//     if (a > b) {
//         alert('a > b');
//     } else if (a <= b) {
//         alert(a + b);
//     }
// }
//
// // Bài 4
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

// Bài 5
function findConstellation(stars) {
    stars = prompt("Nhập tên ngôi sao:");
    let a1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let a2 = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let index = a1.indexOf(stars);
    if (stars != a1[index]) {
            alert("Không tìm thấy ngôi sao, vui lòng nhập lại.");
            findConstellation(stars);
    } else if (stars == a1[index]) {
            document.write(`${stars} thuộc chòm sao ${a2[index]}.`);
    }
}