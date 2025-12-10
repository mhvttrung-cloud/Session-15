// Bài 1: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. Ví dụ, nếu một mảng chứa các ký tự [ ‘c’, ‘s’, ‘c’, ‘2’, ‘6’, ‘1’ ] sau khi thực hiện đảo ngược sẽ là “261csc”

let string = [ "c", "s", "C", '2', '6', '1'];
console.log("Trước khi đảo ngược",string);

string.reverse();

console.log("Sau khi đảo ngược",string);

let letters = string.filter(x => isNaN(x));
let numbers = string.filter(x => !isNaN(x));

let result = numbers.reverse().join("") + letters.reverse().join("");

console.log(result);



// Bài 2: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

let number = [1,4,5,6,7,8,3,2,"a", "b", "c"];
let count = 0;
for (let i = 0; i <number.length; i++){
    if (!isNaN(number[i])){
        count = count + 1;
        console.log("Ký tự số trong dãy", number[i]);
    }
}; console.log("Tổng ký tự số trong dãy là :", count);
//Hãy sắp xếp nó theo thứ tự "Từ nhỏ đến lớn"
number[i].sort((a,b) => a - b);
console.log(number[i]);







// Bài 3: Viết một chương trình để đếm số ký tự trong một chuỗi.







// Bài 4: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.





// Bài 5: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )