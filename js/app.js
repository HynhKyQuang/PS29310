const API_URL = 'http://localhost:3000';
const showlistdienthoai = async () => {
    let arr = await fetch(API_URL + "/dien_thoai")
        .then(res => res.json())
        .then(data => data);
    let str = '';
    arr.forEach(row => str += show1dienthoai(row));
    return str;
};
const show1dienthoai = (dv) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
};
const showlistlaptop = async () => {
    let arr = await fetch(API_URL + "/laptop")
        .then(res => res.json())
        .then(data => data);
    let str = '';
    arr.forEach(row => str += show1laptop(row));
    return str;
};
const show1laptop = (dv) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
};
const showlistsmartwatch = async () => {
    let arr = await fetch(API_URL + "/smartwatch")
        .then(res => res.json())
        .then(data => data);
    let str = '';
    arr.forEach(row => str += show1smartwatch(row));
    return str;
};
const show1smartwatch = (dv) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
};
const showlisttablet = async () => {
    let arr = await fetch(API_URL + "/tablet")
        .then(res => res.json())
        .then(data => data);
    let str = '';
    arr.forEach(row => str += show1tablet(row));
    return str;
};
const show1tablet = (dv) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    <h5>${dv.gia}</h5>
    </div> `;
};
export { showlistdienthoai, showlistlaptop, showlistsmartwatch, showlisttablet };
