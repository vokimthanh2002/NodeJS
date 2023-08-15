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
let thoigian  = parseFloat(prompt('nhap so phut da goi'))
let phicuocgoi
let phicodinh = 25000
if(thoigian<50){
    phicuocgoi=phicodinh+(thoigian*600)
    document.write(phicuocgoi)
}
else if(thoigian>150){
    phicuocgoi=phicodinh+(thoigian*400)
    document.write(phicuocgoi)
}
else
{
    phicuocgoi=phicodinh+(thoigian*200)
    document.write(phicuocgoi)
}

