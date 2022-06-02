'use strict';

class InfoPB {
    constructor({ card }) {

        this.card = document.querySelector(card);
        this.selectTownNames = this.card.querySelector('.townNames');
        this.ul = this.card.querySelector('ul');
        this.hideLi = this.ul.querySelector('li');

    }



    // {
    //     "name":"Южное отд., Отделение №30",
    //     "state":"Днепропетровская",
    //     "id":"2943",
    //     "country":"Украина",
    //     "city":"Днепропетровск",
    //     "index":"49000",
    //     "phone":"8(056)373-33-54, 373-33-56",
    //     "email":"julija.tverdokhlebova@pbank.com.ua",
    //     "address":"ул Титова 29-М"
    // },

    createEmptyLi() {
        let liEmpty = `
            <li class="office hide"> </li>
        `
        this.ul.innerHTML = liEmpty;
    }

    removeAllInfo() {
        this.ul.innerHTML = '';
    }

    createInfoLi(id, index, country, city, address, phone, email) {
        let li = `
                        <li class="office">
                            <h3>Номер отделения: ${id}</h3>
                            <p> адрес: ${index}, ${country}, г. ${city}, <br> ${address}
                                <br> тел.: ${phone} <br>
                                email: <span>${email}</span>
                            </p>
                        </li>
                        `
        this.ul.lastElementChild.insertAdjacentHTML('afterEnd', li);
    }

    showInfoOffice() {
        let infoFull = JSON.parse(localStorage.getItem('baseOfficePrivateBank'));

        this.selectTownNames.addEventListener('change', (even) => {
            let target = even.target;
            console.dir(target);

            this.removeAllInfo();
            this.createEmptyLi();

            for (const v of infoFull) {
                if (v.state == target.value) {
                    this.createInfoLi(v.id, v.index, v.country, v.city, v.address, v.phone, v.email);
                }
            }
        })
    }
    init() {
        this.showInfoOffice();

    }
}

