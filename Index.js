//2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг 
//(Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

let phoneNumbers = prompt(`Enter your phone number`);
let PhoneNumbers = phoneNumbers.substring(0,2);

if (phoneNumbers.length < 9 && phoneNumbers.length > 7) {
    if (PhoneNumbers == 99 || PhoneNumbers == 95 || PhoneNumbers == 94 || PhoneNumbers == 85) {
        console.log(PhoneNumbers + `Mobicom`);
    }else if (PhoneNumbers == 90 || PhoneNumbers == 96 || PhoneNumbers == 91) {
        console.log(PhoneNumbers + `Skytel`);
    }else if (PhoneNumbers == 98 || PhoneNumbers == 97 || PhoneNumbers == 93 || PhoneNumbers == 83) {
        console.log(PhoneNumbers + `Gmobile`);
    }else if (PhoneNumbers == 88 || PhoneNumbers == 86 || PhoneNumbers == 80 || PhoneNumbers == 89) {
        console.log(PhoneNumbers + `Unitel`);
    }

}else {
    alert(`Ta dugaaraa zov oruulna uu`)
}