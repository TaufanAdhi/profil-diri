const icon = document.querySelector('#icon');
const icon1 = document.querySelector('#icon-1');
const navbar = document.querySelector('.navbar')
const hero = document.querySelector('.hero1')
const s = document.querySelector('.s')
const container = document.querySelector('.container')
const img = document.querySelector('#img')
const head = document.querySelector('.headline')
const hobi = document.querySelector('.hobi-cont')



icon.onclick = function(){
    img.classList.toggle('active')
    container.classList.toggle('active')    
    s.classList.toggle('active')
    hero.classList.toggle('active')
    navbar.classList.toggle('active')
    head.classList.toggle('active')
    hobi.classList.toggle('active')

}

icon1.onclick = () => {
    hobi.classList.toggle('active')
    img.classList.toggle('active')
    container.classList.toggle('active')    
    s.classList.toggle('active')
    hero.classList.toggle('active')
    navbar.classList.toggle('active')
    head.classList.toggle('active')
}




// mengatur gambar pendidikan 
const kanan = document.querySelector('#kanan-pend')
const kiri = document.querySelector('#kiri-pend')


const pend = document.querySelectorAll('.pend-1')
const nama = document.querySelectorAll('.nama')




let a = 0




function utama() {

    pend.forEach((e,i) => {

        if(i === a){

            e.style.display = 'block'
            


        }else {

            e.style.display = 'none'
        }




    })

    nama.forEach((e,i) => {

        if(i === a){

            e.style.display = 'block'
            


        }else {

            e.style.display = 'none'
        }




    })

   
}

function tambahPend(){

    a++
    if(a >= pend.length){
        a = pend.length-1
    }

    if(a >= nama.length){
        a = nama.length-1
    }
    
    utama()
}


function kurangPend(){

    a--
    if(a <= 0){
        a = 0
    }
    utama()
}

kanan.onclick = () => {
    tambahPend()
} 

kiri.onclick = () => {
    kurangPend()
}

utama()



// mengatur gambar hobi 
const judulHobi = document.querySelectorAll('.judul-hobi')
const tekan = document.querySelector('#hobi-cta')
const left = document.querySelector('#hobi-left')
const kotak = document.querySelectorAll('.kotak')


judulHobi[0].style.display = 'block'


let b = 0

function tambah(){

    b++
    if( b >= kotak.length){
        b = 0
      }
}

function kurang(){

    b--
    if( b < 0){
        b = 2
      }
}




function hobiImage(){

for(let a = 0;a < kotak.length;a++){

    if(b === 2){
  
        switch(a){
    
          case b:
            kotak[a].classList.remove('kiri');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('tengah');
            judulHobi[a].style.display = 'block'
            break
          case 1:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('kiri');
            judulHobi[a].style.display = 'none'
            break
          case 0:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kiri');
            kotak[a].classList.add('kanan');
            judulHobi[a].style.display = 'none'
        } 
    
    
    }else if(b === 0){

        switch(a){
    
          case b:
            kotak[a].classList.remove('kiri');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('tengah');
            judulHobi[a].style.display = 'block'
            break
          case 2:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('kiri');
            judulHobi[a].style.display = 'none'
            break
          case 1:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kiri');
            kotak[a].classList.add('kanan');
            judulHobi[a].style.display = 'none'
        }
    }else {
        switch(a){
    
          case b:
            kotak[a].classList.remove('kiri');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('tengah');
            judulHobi[a].style.display = 'block'
            break
          case 0:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kanan');
            kotak[a].classList.add('kiri');
            judulHobi[a].style.display = 'none'
            break
          case 2:
            kotak[a].classList.remove('tengah');
            kotak[a].classList.remove('kiri');
            kotak[a].classList.add('kanan');
            judulHobi[a].style.display = 'none';
        }
  
  
  
      }

}
}

tekan.onclick = () => {

    kurang();
    hobiImage();


}

left.onclick = () => {

    tambah();
    hobiImage();


}


hobiImage();


// pengaturan hobi saat di click 

const coding = document.getElementById('coding')
const hobiCoding = document.querySelectorAll('.hobi-click')
const badminton = document.getElementById('badminton')
const silang = document.querySelectorAll('.close')
const game = document.getElementById('game');
const hobiCont = document.querySelectorAll('.hobi-conten')



badminton.onclick = () => {
    console.log(b);
    hobiCoding[b].style.display = 'flex'
    hobiCoding[b].style.opacity = '1'
    hobiCoding[b].style.zIndex = '9999'
    hobiCoding[b].style.position = 'fixed'
    // hobiCoding.style.transition = '1s'
    hobiCont[b].style.display = 'flex'

    silang[b].onclick = () => {

        hobiCoding[b].style.opacity = '0';
        hobiCoding[b].style.zIndex = '0';
        hobiCont[b].style.display = 'none';
        hobiCoding[b].style.position = 'absolute';
        // hobiCoding.style.transition = '1s'
    
    
    
    }
}
coding.onclick = () => {
    console.log(b);
    hobiCoding[b].style.display = 'flex'
    hobiCoding[b].style.opacity = '1'
    hobiCoding[b].style.zIndex = '9999'
    hobiCoding[b].style.position = 'fixed'
    hobiCont[b].style.display = 'flex'
    // hobiCoding.style.transition = '1s'

    silang[b].onclick = () => {

        hobiCoding[b].style.opacity = '0';
        hobiCoding[b].style.zIndex = '0';
        hobiCont[b].style.display = 'none';
        hobiCoding[b].style.position = 'absolute';
        // hobiCoding.style.transition = '1s'
    
    
    
    }
}
game.onclick = () => {
    console.log(b);
    hobiCoding[b].style.display = 'flex'
    hobiCoding[b].style.opacity = '1'
    hobiCoding[b].style.zIndex = '9999'
    hobiCoding[b].style.position = 'fixed'
    hobiCont[b].style.display = 'flex'
    // hobiCoding.style.transition = '1s'

    silang[b].onclick = () => {

        hobiCoding[b].style.opacity = '0';
        hobiCoding[b].style.zIndex = '0';
        hobiCont[b].style.display = 'none'
        hobiCoding[b].style.position = 'absolute';
        // hobiCoding.style.transition = '1s'
    
    
    
    }
}

// silang.onclick = () => {

//     hobiCoding[b].style.opacity = '0';
//     hobiCoding[b].style.zIndex = '0';
//     // hobiCoding.style.transition = '1s'



// }
























