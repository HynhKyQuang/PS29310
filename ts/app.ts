const API_URL = 'http://localhost:3000';
type TDienthoai = { id: number; ten: string; hinh: string; gia: number}
type TLaptop = { id: number; ten: string; hinh: string; gia: number}
type TSmartwatch = { id: number; ten: string; hinh: string; gia: number}
type TTablet = { id: number; ten: string; hinh: string; gia: number}

const showlistdienthoai = async ()=>{
    let arr:TDienthoai[] = await fetch(API_URL + "/dien_thoai")
    .then (res => res.json())
    .then (data => data as TDienthoai[]);
    let str='';
    arr.forEach ( row => str += show1dienthoai(row))
    return str;
}
const show1dienthoai = (dv:TDienthoai) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
}
const showlistlaptop = async ()=>{
    let arr:TLaptop[] = await fetch(API_URL + "/laptop")
    .then (res => res.json())
    .then (data => data as TLaptop[]);
    let str='';
    arr.forEach ( row => str += show1laptop(row))
    return str;
}
const show1laptop = (dv:TLaptop) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
}
const showlistsmartwatch = async ()=>{
    let arr:TSmartwatch[] = await fetch(API_URL + "/smartwatch")
    .then (res => res.json())
    .then (data => data as TSmartwatch[]);
    let str='';
    arr.forEach ( row => str += show1smartwatch(row))
    return str;
}
const show1smartwatch = (dv:TSmartwatch) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
}
const showlisttablet = async ()=>{
    let arr:TTablet[] = await fetch(API_URL + "/tablet")
    .then (res => res.json())
    .then (data => data as TTablet[]);
    let str='';
    arr.forEach ( row => str += show1tablet(row))
    return str;
}
const show1tablet = (dv:TTablet) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
}
export {showlistdienthoai, showlistlaptop, showlistsmartwatch, showlisttablet}