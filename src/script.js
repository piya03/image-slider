const prevbtn = document.querySelector('.prevbtn')
const nextbtn = document.querySelector('.nextbtn')
const imageSlider = document.querySelector('.imageSlider')
let count = 0;
prevbtn.addEventListener('click', prevSlide)
nextbtn.addEventListener('click', nextSlide)

let array = ['https://www.audubon.org/sites/default/files/styles/hero_mobile/public/web_gbbc_sandhill_crane_3_bob-howdeshell_tn_2012_kk.jpg?itok=stlOHDUV',
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDqC61lq1T6uf2g8ZeGQ23GrA1hg6B77_HmUBGXZz1liKhstC','https://www.audubon.org/sites/default/files/styles/hero_mobile/public/web_gbbc_sandhill_crane_3_bob-howdeshell_tn_2012_kk.jpg?itok=stlOHDUV',      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/03/17/Photos/Processed/birds-kXAE--621x414@LiveMint-70cb.jpg']
function prevSlide (){
  
  imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
                     {duration:1000, fill: 'forwards'})
   if(count === 0){
    count = array.length;
  }
  count--;
  imageSlider.style.backgroundImage = `url(${array[count]})`
  console.log(imageSlider)
  
}
function nextSlide (){
  imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
                     {duration:1000, fill: 'forwards'})
  if(count ===array.length -1){
    count =-1;
  }
  count++;
  imageSlider.style.backgroundImage = `url(${array[count]})`
  console.log(imageSlider)
  
}