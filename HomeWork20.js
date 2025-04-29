// Task 1
let date = prompt("Tarixi daxil edin")
let year = date.split(".")[0]
let month = date.split(".")[1]
let day = date.split(".")[2]
switch (month) {
    case "01":
        month = "Yanvar"
    break;
    case "02":
        month = "Fevral"
    break;
    case "03":
        month = "Mart"
    break;
    case "04":
        month = "Aprel"
    break;
    case "05":
        month = "May"
    break;
    case "06":
        month = "İyun"
    break;
    case "07":
        month = "İyul"
    break;
    case "08":
        month = "August"
    break;
    case "09":
        month = "Sentyabr"
    break;
    case "10":
        month = "Oktyabr"
    break;
    case "11":
        month = "Noyabr"
    break;    
    case "12":
        month = "Dekabr"
    break;
    default:
        console.log("Ay 12-dən çox və ya az olmamalıdır");
    break;
}
if(+year < 0){
    console.log("İl 0-dan kiçik olmamlıdır");
}else if(+day > 31 || +day < 1){
    console.log("Gün 31-dən çox vəya 1-dən kiçik olmamalıdır");
}else if(+day < 10){
    day = day.replace("0", "")
}else{
    console.log(`${day} ${month} ${year}-ci il`);
}

// Task 2
let monthNum = prompt("İstədiyiniz ədədi daxil edin")
switch (monthNum) {
    case "1":
        console.log("Yanvar");
    break;
    case "2":
        console.log("Fevral");
    break;
    case "3":
        console.log("Mart");
    break;
    case "4":
        console.log("Aprel");
    break;
    case "5":
        console.log("May");
    break;
    case "6":
        console.log("İyun");
    break;
    case "7":
        console.log("İyul");
    break;
    case "8":
        console.log("August");
    break;
    case "9":
        console.log("Sentyabr");
    break;
    case "10":
        console.log("Oktyabr");
    break;
    case "11":
        console.log("Noyabr");
    break;    
    case "12":
        console.log("Dekabr");
    break;
    default:
        console.log("Ay 12-dən çox və ya az olmamalıdır");
    break;
}