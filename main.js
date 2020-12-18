
const qrcode = new QRCode("qrcode");

function onClick(){
    let date = new Date();
    
    const id = document.getElementById("id").value;
    const serialNumber = document.getElementById("serialNumber").value;
    const obj = {userId:id, SerialNumber:serialNumber, date};

    qrcode.makeCode(JSON.stringify(obj));
}
