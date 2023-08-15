// bai 1
// let a ;
// let b;
// a = + prompt("nhap a:");
// b = + prompt("nhap b");
// if(a%b==0) {
//     alert(a+ " chia het cho "+ b);
// }else {
//     alert(a+ " không chia het cho "+ b);
// }
// bai 2
// let age;
// age = + prompt("Nhập tuổi học sinh");
// if(age < 16){
//     alert("Học sinh này không đủ điều kiện để vào 10")
// }else {
//     alert("Học sinh này đủ điều kiện để vào 10")
// }
// bai 3
// let N = +prompt("Nhâp số nguyên N")
// if(N>0){
//     alert("N lớn hơn 0")
// }else {
//     alert("N bé hơn 0")
// }
//bai 4: Nhập 3 số nguyên tìm max
// let a = + prompt("Nhập a: ");
// let b = + prompt("Nhập b: ");
// let c = + prompt("Nhập c: ");
// if(a < b && c < b){
//     alert(b+ "  là số lớn nhất")
// }else if(a< c && b< c ){
//     alert(c+ " là số lớn nhất")
// }else if(a == b && a == c){
//     alert("không có số lớn nhất")
// }else {
//     alert(a+ " là số lớn nhất")
// }
//bai 5
// let hs1 = + prompt("Nhập bài kiểm tra: ");
// let hs2 = + prompt("Nhập điểm thi giữa kì: ");
// let hs3 = + prompt("Nhập điểm thi cuối kì: ");
// let avg = (hs1 + hs2 *2 + hs3*3)/6;
// if(avg>=8){
//     alert("Học sinh có học lực giỏi");
// }else if(avg>=6.5){
//     alert("Học sinh có học lực khá");
// }else if(avg>=5){
//     alert("Học sinh có học học trung bình");
// }else{
//     alert("Học sinh có học trung bình");
// }
//bai 6
// let hoahong;
// let doanhso=prompt("Nhap doanh so");
// if (doanhso<=100){
//     hoahong=doanhso*5/100;
//     document.write(hoahong)
// }else if (doanhso<=200){
//     hoahong=doanhso*10/100;
//     document.write(hoahong)
// }else if (doanhso<300){
//     hoahong=doanhso*20/100;
//     document.write(hoahong);
// }
// bai 7
// let thoigian  = parseFloat(prompt('nhap so phut da goi'))
// let phicuocgoi
// let phicodinh = 25000
// if(thoigian<50){
//     phicuocgoi=phicodinh+(thoigian*600)
//     document.write(phicuocgoi)
// }
// else if(thoigian>150){
//     phicuocgoi=phicodinh+(thoigian*400)
//     document.write(phicuocgoi)
// }
// else
// {
//     phicuocgoi=phicodinh+(thoigian*200)
//     document.write(phicuocgoi)
// }
//bài 1: Chuyển từ độ C sang độ F
// let c = + prompt("Nhập độ C muốn chuyển sang độ F")
// let f = c * 9/5 + 32;
// alert("Độ F đã chuyển đổi là: "+ f);
//Bài 2: chuyển từ met sang feet
// let met = + prompt("Nhập số met cần chuyển đổi sang feet")
// let ft = m * 3.2808;
// alert("Feet đã chuyển đổi: "+ ft);
//Bài 3: Tính diện tích hình vuông khi biết cạnh a
// let a = + prompt("Nhập cạnh của hình vuông")
// let s = a*a;
// alert("Diện tích hình vuông là: "+ s);
//Bài 4: Tính diện tích hình chữ nhật khi biết 2 cạnh a,b
// let a = + prompt("Nhập chiều dài hình chữ nhật")
// let b = + prompt("Nhập chiều rộng hình chữ nhật")
// let s = a*b;
// alert("Diện tích hình chữ nhật là: "+ s);
//Bài 5: Tính diện tích tam giác vuông khi biết 2 cạnh kề a,b
// let a = + prompt("Nhập cạnh thứ nhất")
// let b = + prompt("Nhập cạnh thứ 2")
// let s = 1/2*a*b;
// alert("Diện tích tam giác vuông là: "+ s);
//Bài 6: Giải phương trình bật 1(y=ax + b)
// let x;
// let a = + prompt("Nhập a")
// let b = + prompt("Nhập b")
// if(a == 0){
//     alert("Phương trình vô nghiệm")
// }else if(b==0){
//     alert("Phương trình vô số nghiệm")
// }else{
//     x = -b/a;
//     alert("Phương trình có nghiệm x="+ x);
// }
//Bài 7: Giải phương trình bậc 2(y = ax^2 + bx + c)
// let x,x1,x2,denta;
// let a = + prompt("Nhập a")
// let b = + prompt("Nhập b")
// let c = + prompt("Nhập c")
// if(a==0){
//     if(b == 0){
//     alert("Phương trình vô nghiệm")
// }else if(c==0){
//     alert("Phương trình vô số nghiệm")
// }else{
//     x = -c/b;
//     alert("Phương trình có nghiệm x="+ x);
// }
// }else{
//     denta = b*b - 4*a*c;
//     if(denta>0){
//         x1= (-b -Math.sqrt(denta))/2*a;
//         x2= (-b +Math.sqrt(denta))/2*a;
//         alert("Phương trình có 2 nghiệm phân biệt x1="+ x1 +"  x2="+x2);
//     }else if(denta==0){
//         x = (-b +Math.sqrt(denta))/2*a;
//         alert("Phương trình có 1 nghiệm duy nhất x="+ x);
//     }else{
//         alert("Phương trình vô nghiệm")
//     }
// }
// Bài 8: Kiểm tra tuổi người
// const today = new Date();
// let yyyy = today.getFullYear();
// console.log(yyyy);
// let age = +prompt("Nhập số tuổi")
// if(age >120 || age < 0) {
//     alert("Không phải tuổi người")
// }else {
//     alert("Tuổi của bạn là" + age + " Bạn sinh năm: " + (yyyy-age) )
// }
//Bài 9: Kiểm tra cạnh của 1 tam giác
// let a = + prompt("Nhập a")
// let b = + prompt("Nhập b")
// let c = + prompt("Nhập c")
// if(a < 0 || b < 0 || c< 0){
//     alert("Không phải cạnh của tam giác")
// }else{
//     if(a+b < c){
//         alert("Không phải cạnh của tam giác")
//     }else if (a+c <b){
//         alert("Không phải cạnh của tam giác")
//     }else if(b+c < a){
//         alert("Không phải cạnh của tam giác")
//     }else{
//         alert("+1rp")
//     }
// }
//Bài 10: Viết chương trình tính giá tiền điện(Bao gồm có 6 bậc)
// let kwH = + prompt("Nhập số kwH tiêu thụ")
// let tongTien;
// if(kwH <= 50){
//     tongTien = kwH * 1.678;
//     console.log(tongTien);
// }else if(kwH<=100){
//     tongTien = kwH * 1.734;
//     console.log(tongTien);
// }else if(kwH<=200){
//     tongTien = kwH * 2.014;
//     console.log(tongTien);
// }else if(kwH<=300){
//     tongTien = kwH * 2.536;
//     console.log(tongTien);
// }else if(kwH<=400){
//     tongTien = kwH * 2.834;
//     console.log(tongTien);
// }else if( kwH >400) {
//     tongTien = kwH * 2.927;
//     console.log(tongTien);
// }
//Bài 11: Viết chương trình thuế cá nhân
// function calculateIncomeTax(income) {
//     if (income <= 10000) {
//         return 0.1 * income;
//     } else if (income <= 50000) {
//         return 0.2 * income;
//     } else {
//         return 0.3 * income;
//     }
// }

// function main() {
//     const income = parseFloat(prompt("Nhập tổng thu nhập của bạn: "));
    
//     if (isNaN(income) || income < 0) {
//         console.log("Tổng thu nhập không hợp lệ.");
//         return;
//     }
    
//     const tax = calculateIncomeTax(income);
//     console.log(`Thuế cá nhân cần phải đóng: ${tax}`);
// }

// main();
// Bài 12
function calculateBankInterest(principal, months, interestRate) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
    };
}

function main() {
    const principal = parseFloat(prompt("Nhập số tiền ban đầu: "));
    const months = parseInt(prompt("Nhập số tháng vay: "));
    const interestRate = parseFloat(prompt("Nhập lãi xuất hàng tháng (%): "));
    
    if (isNaN(principal) || isNaN(months) || isNaN(interestRate) || principal <= 0 || months <= 0 || interestRate < 0) {
        console.log("Dữ liệu nhập không hợp lệ.");
        return;
    }
    
    const result = calculateBankInterest(principal, months, interestRate);
    console.log(`Số tiền trả hàng tháng: ${result.monthlyPayment}`);
    console.log(`Tổng số tiền trả sau ${months} tháng: ${result.totalPayment}`);
    console.log(`Tổng số tiền lãi trả: ${result.totalInterest}`);
}

main();



