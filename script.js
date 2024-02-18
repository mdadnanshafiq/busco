// Md. Adnan Shafiq | WEB9-1011

let seats = document.getElementsByClassName('seat');
let seatCounter = parseInt(document.getElementById('seatCounter').innerText);
let totalSeats = parseInt(document.getElementById('totalSeats').innerText);
let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let grandTotal = parseInt(document.getElementById('grandTotal').innerText);
let discount = parseInt(document.getElementById('discount').innerText);
let nextModal = document.getElementById('nextModal');
let phone = document.getElementById('phone');
let coupon = document.getElementById('coupon');
let applyCoupon = document.getElementById('applyCoupon');
let enterCoupon = document.getElementById('enterCoupon');
let discountRow = document.getElementById('discountRow');
let tbody = document.getElementById('tbody');
// Md. Adnan Shafiq | WEB9-1011

for (let seat of seats) {
    seat.addEventListener('click', function () {
        if (seatCounter < 4) {
            seatCounter += 1;
            totalSeats -= 1;
            totalPrice = seatCounter * 550;
            grandTotal = totalPrice - discount;
            document.getElementById('seatCounter').innerText = seatCounter;
            document.getElementById('totalSeats').innerText = totalSeats;
            document.getElementById('totalPrice').innerText = totalPrice;
            document.getElementById('grandTotal').innerText = grandTotal;
            seat.classList.add('bg-green-500');
            seat.classList.add('hover:bg-green-500');
            seat.classList.add('!text-[#FFFFFF]');
            seat.classList.add('pointer-events-none');

            let tabRow = document.createElement('tr');
            let seatNo = document.createElement('td');
            let economy = document.createElement('td');
            let price = document.createElement('td');

            seatNo.innerText = seat.innerText;
            economy.innerText = 'Economy';
            price.innerText = 'BDT 550';

            tabRow.appendChild(seatNo);
            tabRow.appendChild(economy);
            tabRow.appendChild(price);

            tbody.insertBefore(tabRow, tbody.children[0]);



            if (seatCounter === 4) {
                coupon.classList.remove('pointer-events-none');
                enterCoupon.setAttribute('placeholder', 'Have any coupon?');
                applyCoupon.classList.add('bg-[var(--green)]');
            } else {
                return;
            }

        } else if (seatCounter >= 4) {
            alert("You can purchase maximum 4 tickets at once.");
        }


    })
}

applyCoupon.addEventListener('click', function () {
    if (enterCoupon.value === 'NEW15') {
        document.getElementById('discount').innerText = totalPrice * .15;
        coupon.classList.add('hidden');
        discountRow.classList.remove('hidden');
        grandTotal = totalPrice - parseInt(document.getElementById('discount').innerText);
        document.getElementById('grandTotal').innerText = grandTotal;
    } else if (enterCoupon.value === 'Couple 20') {
        document.getElementById('discount').innerText = totalPrice * .20;
        coupon.classList.add('hidden');
        discountRow.classList.remove('hidden');
        grandTotal = totalPrice - parseInt(document.getElementById('discount').innerText);
        document.getElementById('grandTotal').innerText = grandTotal;
    } else {
        alert('Incorect Coupon [NB: Coupon codes are case sensitive.]')

    }
})

nextModal.addEventListener('click', function (e) {
    e.preventDefault();
})

for (let seat of seats) {
    seat.addEventListener('click', function () {
        if (seatCounter > 0 && !isNaN(phone.value) && phone.value.trim() !== '') {
            nextModal.removeAttribute('disabled');
        }
    })
}

phone.addEventListener('change', function () {
    if (seatCounter > 0 && !isNaN(phone.value) && phone.value.trim() !== '') {
        nextModal.removeAttribute('disabled');
    }
})

// Md. Adnan Shafiq | WEB9-1011