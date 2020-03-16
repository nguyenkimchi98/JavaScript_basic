// var myLaptop = {
//     nang =1,
//     hang = "ASUS",
//     khoidong: function(time, passwword) {
//         console.log( time + "and" + password);
//     },
//     logHang: function() {
//         console.log("Hãng của máy tinh la: " + this.hang);
//     }
// }

//dùng constructor
var Laptop = function(pNang, pHang) {
    this.ttNang = pNang;
    this.ttHang = pHang;
    this.khoidong = function(time, password) {
        console.log( time + "and" + password);
    },
    this.logHang = function() {
        console.log("Hãng của máy tinh la: " + this.ttHang);
    }
}
 var myLaptop1 = new Laptop(10,"Asus");
 myLaptop1.khoidong(2,123);
 myLaptop1.logHang();