let thumbnails = document.getElementsByClassName("col3");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

function sliders(){
	buttonLeft.addEventListener("click", () => {
		slider.scrollLeft -= 125;
	});

	buttonRight.addEventListener("click", () => {
		slider.scrollLeft += 125;
	});

}

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoplayslider(){
	if (slider.scrollLeft>(maxScrollLeft - 1)){
		slider.scrollLeft -= maxScrollLeft;
	} else {
		slider.scrollLeft +=1;
	}
}

let play = setInterval(autoplayslider,50);

function pausesliderhover(){
	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener("mouseover", () => {
			clearInterval(play)
		})
		thumbnails[i].addEventListener("mouseout", () => {
			return play = setInterval(autoplayslider, 50);
		})
	}
}

function imagerandom(x,q,w,e,r){
	let image=document.getElementById(x);
	let images=[q,w,e,r]
	setInterval(function(){
		let random = Math.floor(Math.random() * 4);
		image.src = images[random];
		}, 3000);
}

function validasi(){
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var pesan = document.getElementById("pesan").value;
	var a1 = "Anda harus mengisi data ";
	var a2 = "\n~~~~~~~~~~~~~~~~\nPlease fill out ";
	
	if(nama == ""){
		a1 = a1 + "nama, ";
		a2 = a2 + "name field, ";
		console.log("Tidak ada nama");
	}
	if(email == ""){
		a1 = a1 + "email, ";
		a2 = a2 + "email field, ";
		console.log("Tidak ada email");
	}
	if(nama != "" & email != "" & pesan != ""){
		console.log("Form sukses");
		alert("Komentar Anda telah berhasil dikirim. Kami selalu menghargai umpan balik yang baik.\n~~~~~~~~~~~~~~~~\nYour comments have been submitted successfully. We always appreciate good feedback."); 
	}else if(nama != "" & email != "" & pesan == "" & subject == ""){
		alert("Lebih baik tinggalkan pesan apa pun\n~~~~~~~~~~~~~~~~\nBetter leave a any message")
	}else{
		alert(a1+a2);
	}
}
function tanggal(){
	var tgl = new Date();
	document.getElementById("tanggal").innerHTML = "Waktu akses: "+tgl;
}

function waktu(){
	var waktu = new Date();
	setTimeout("waktu()", 1000);
	document.getElementById("jam").innerHTML = waktu.getHours();
	document.getElementById("menit").innerHTML = waktu.getMinutes();
	document.getElementById("detik").innerHTML = waktu.getSeconds();
}

function mainindex(){
	tanggal();
	waktu();
	sliders();
	autoplayslider();
	pausesliderhover();
}

function product1(){
	tanggal();
	waktu();
	imagerandom("jihyo","../images/jihyo bag/biru.jpg","../images/jihyo bag/model1.jpg","../images/jihyo bag/model3.jpg","../images/jihyo bag/abubirumerahcoklat.jpg");
}
function product2(){
	tanggal();
	waktu();
	imagerandom("ailee","../images/ailee bag/insideputih.jpg","../images/ailee bag/model1.jpg","../images/ailee bag/model2.jpg","../images/ailee bag/putihhitam.jpg");
}
function product3(){
	tanggal();
	waktu();
	imagerandom("suzy","../images/suzy bag/biru.jpg","../images/suzy bag/maroon.jpg","../images/suzy bag/semuawarna.png","../images/suzy bag/biru.jpg");
}
function product4(){
	tanggal();
	waktu();
	imagerandom("rubby","../images/rubby bag/pink.jpg","../images/rubby bag/model1.jpg","../images/rubby bag/model2.jpg","../images/rubby bag/ungupinkmerahkhakiabuhitam.jpg");
}
function product5(){
	tanggal();
	waktu();
	imagerandom("rona","../images/rona bag/abuhitamhijauputihkhaki.jpg","../images/rona bag/model1.jpg","../images/rona bag/model2.jpg","../images/rona bag/warna2.jpg");
}
function product6(){
	tanggal();
	waktu();
	imagerandom("natalie","../images/natalie bag/abucoklat.jpg","../images/natalie bag/model1.jpg","../images/natalie bag/model2.jpg","../images/natalie bag/coklat.jpg");
}

(function(){
	const cartInfo= document.getElementById("cartinfo");
	const cart = document.getElementById("cart");
	
	cartInfo.addEventListener("click",function(){
		cart.classList.toggle("showcart");
	});
})();

(function() {
	const cartBtn = document.querySelectorAll(".btnCart");
	
	cartBtn.forEach(function(btn){
		btn.addEventListener("click",function(event){
		console.log(btn);
		console.log(event.target.parentElement.previousSibling);
		let fullPath = event.target.parentElement.previousElementSibling.childNodes[1].src;
		let pos = fullPath.indexOf("img")+37;
		let partPath = fullPath.slice(pos)
		console.log(fullPath);
		
		const item = {};
		item.img = partPath;
		let name = event.target.parentElement.previousElementSibling.children[1].textContent;
		item.name = name;
		let price = event.target.parentElement.previousElementSibling.children[3].textContent;
		let finalprice = price.slice(3,-2).trim();
		item.price = finalprice;
		console.log(price);
		
		const cartItem = document.createElement("div");
		cartItem.classList.add("cartitem");
		
		cartItem.innerHTML =`
			<img src="${item.img}" class="imgcart" id="itemimg" alt="">
			<div class="item-text">
				<p id="cartitemjudul" class="cartitemjudul">${item.name}</p>
				<span>IDR</span>
				<span id="cartitemharga" class="cartitemharga" style="margin-bottom:0;">${item.price}</span>
			</div>
			<a id='cartitemhapus' class="cartitemhapus">
				<img src="images/trash.png" class="imgtrash">
			</a>
		</div>`;
		
		const cart = document.getElementById("cart");
		const total = document.querySelector(".carttotal")
		
		cart.insertBefore(cartItem,total);
		alert("Tas telah ditambahkan di keranjang");
		showTotals();
		});
	});
	
})();

function showTotals(){
	const total = [];
	const items=document.querySelectorAll('.cartitemharga');

	items.forEach(function(item){
		total.push(item.textContent);
	});
	console.log(total);
	const totalMoney = total.reduce(function(total,item){
		return total + Math.round(item);
	},0);
	const finalMoney = totalMoney;
	console.log(finalMoney);
	
	document.getElementById("carttotal").textContent = finalMoney;
	document.querySelector(".itemtotal").textContent = finalMoney;
	document.getElementById("itemcount").textContent = total.length;
}

(async function deleteItem() {
	setTimeout(deleteItem,0);
    const deletebtns = document.querySelectorAll('.imgtrash')

    deletebtns.forEach((btn) => {
        btn.addEventListener("click",function(event){
			console.log(event.target.parentElement.parentElement);
            const hapus = event.target.parentElement.parentElement;
            hapus.remove();
            showTotals();
        })();
    });
})();

function suksescheckout(){
	alert("Tas telah dibeli :D");
}

function clearitem(){
	alert("Tas telah dihapus semua dari keranjang");
}

function beliproduct(){
	var namatas = document.querySelector("h1").innerText;
	var warna = document.getElementById("warna").value;
	var jumlah = document.getElementById("jumlah").value;

	alert("Tas "+namatas+" dengan warna "+warna+" berjumlah "+jumlah+", Telah dibeli.. Hoorayy.. \( ﾟヮﾟ)/");
}
