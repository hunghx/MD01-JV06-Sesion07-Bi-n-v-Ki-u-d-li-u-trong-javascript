// cách khai báo biến thông qua 3 từ khóa var, let, const
var x = 5;
var x = 8;
let name = "";
let fullName = "Hồ Xuân Hùng\"";
let char = 'C';
let check = false;
console.log(fullName);
console.log(char);
console.log(check);
let y = 4;
// let y = 5;
console.log(y);

// block - khối lệnh - phạm vi của biến {...}

// // hàm tự xây dựng có chức năng in 
function print(){
    var x = 6;  
    var x = 7;
    console.log(x);
    let y = 9;
        y = 10;
}
// sử dụng hàm
print();

console.log(x);
// khai báo hằng
const PI = 3.14;
// phép gán "="
// PI = 2;
console.log(PI);

//  Phép toán toán học
console.log(3+4); // 7
console.log(5-7); // -2
console.log(3*4); // 12
console.log(4/3); // 1,3333333333333333333333333333
console.log(8%7); // 1 
let z = 5; // ++ đều dùng để thăng giá trị lên 1 đơn vị
// z += 1; // z= z+1
// z *= x+1 ; // z=z(x+1)
let temp = z--; // trả về giá trị của biến sau khi tăng khi viết ++ ở trước,
// ngược lại trả về giá trị của z trước khi khi tăng  rồi mới tăng giá trị z lên 1 đơn vị
console.log(temp); // 5
console.log(z); //6
// ?  temp
let express =  z*(temp +1); //35 =>42
console.log(express);

let str1 = "Hồ";
let str2 ="Hùng";
let number = 10;
// cách 1 dấu + 
console.log(str1+" "+str2 + number); 
// cách 2 sử dụng hàm concat
console.log(str1.concat(" ",str2,number))
// cách 3 sử dụng cú pháp mới của ES6
let string = "Chào bạn, tôi tên là Hồ Hùng , nănm nay tôi 10 tuổi";
console.log(`Chào bạn, tôi tên là ${str1} ${str2}, năm nay tôi ${number} tuổi`);