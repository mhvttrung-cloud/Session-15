// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
let n = [
    3, 8, 9, 0 , 23, 140, 150, 160, 1, 4, 5, 90, 80, 100
];
let count = 0;                              //phải có một vật chứa để ghi lại
for (let num of n){
    if (num >= 10){
        count++;                    //num duyệt phần tử lớn hơn 10 thì sẽ ghi vào count
        console.log(num);
    }
}; console.log(`lớn hơn hoặc bằng 10 có ${count} số`);

//Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
let nu = [
    3, 8, 9, 0 , 23, 140, 150, 160, 1, 4, 5, 90, 80, 100
];
let max = nu[0];
let indexMax = 0;

for(let i = 0; i < nu.length; i++){
    if (nu[i] >max ){
        max = nu[i];
        indexMax = i;
    }; 
}; console.log(`Vị trí của số lớn nhất là ${indexMax}`);
console.log(`${max} là số lớn nhất`);


// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let num = [
//     3, 8, 9, 0 , 23, 140, 150, 160, 1, 4, 5, 90, 80, 100
// ];
// let _max = num[0];
// let sum = 0;
// for (let i = 0; i < num.length; i++){
//     if (num[i]>_max){
//         _max = num[i];
//     };
//     sum = sum + num[i];
// }; console.log(_max, ":là số lớn nhất trong chuỗi");
// let average = sum / num.length;
// console.log(average);


// // Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let input = prompt("Nhập lại các chữ và số mà bạn mong muốn");
// let arr = input.split("").reverse();

// console.log("Dãy số bạn nhập đã bị đảo ngược ahihi", arr)


// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.

let minus = [-1, 0, 9, 5, 7, 3, 1, -6, 8,];
let contai = 0;
for (let i = 0;i < minus.length; i++){
    if (minus[i]< 0){
        contai++;
        console.log(minus[i]);
        };
     }
     console.log("Số phần tử âm là", contai);
     


// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// let numbe = [
//     -1, 3, -2, 4, 5, -6, 12, 45, -90, 0, 3, 23, -41,
// ]
// let int = +prompt("Hãy nhập số nguyên mà bạn nghĩ là trong dãy số có nó");
// let includes = numbe.includes(int);// so sánh tương đối !
// if (includes){
//     console.log(`Number ${int} is in the array`);
// } else {
//     console.log(`Number ${int} is not in the array`)
// ;}

// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// let number = [
//     -1, 3, -2, 4, 5, -6, 12, 45, -90, 0, 3, 23, -41,];
// let sort = number.sort((a,b) => b - a)
// console.log(sort)
// let userInput = +prompt("Please input number in the here")
// let include = number.includes(userInput);

// if (include === number){
//     console.log(`Number ... is it in the array`)
// } else {
//     console.log(`Number ... is not in the array`)
// }


// Bài 8: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b. Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c

let a = [1,3,4,5,6,23,42,12,23,45,56,67,9,0];
let b = [32,34,23,45,765,7987,3443,1212,43,565,7879,1212];
let c = [-1,-2,-4,-23,-56,-7,-34,-67,-9,-43,-12,-21,-43,-45,-67,-98,-89,90,-13,-14,-15,-16,-17,-18];

let ab = a.concat(b); console.log(ab);
let abc = c.concat(ab); console.log(abc);

let sort = abc.sort((j,k) => j - k);
console.log(sort);

let intPut = +prompt("Please input number in the here")

if (abc.includes(intPut)){
    console.log("Bingoooo... !")
} else {
    console.log("Is not in the array")
}
