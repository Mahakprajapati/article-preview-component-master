let shareButton=document.querySelector('.icon-container');
const social=document.querySelector('.social-container');

shareButton.addEventListener('click',(e)=>{
    social.classList.toggle('hidden');
})
