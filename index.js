/* Show-Menu*/

const navMenu=document.getElementById('nav-menu')
      navToggle=document.getElementById('nav-toggle')
	  navClose=document.getElementById('nav-close')

	  if(navToggle){
		navToggle.addEventListener('click',()=>{
			navMenu.classList.add('show-menu')
		})
	  }
/* Menu Hidden */

if(navClose){
	navClose.addEventListener('click',()=>{
		navMenu.classList.remove('show-menu')
	})
}

/* Remove Menu Mobile */ 

const navLink =document.querySelectorAll('.nav-link')

const linkAction =()=>{
	const navMenu=document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/* Show Scroll HEader */ 

const ScrollHeader = ()=>{
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('scroll-header')
	                   : header.classList.remove('scroll-header')
}
window.addEventListener('scroll',ScrollHeader)

const scrollUp =()=>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('scroll-menu')
	             : scrollUp.classList.remove('scroll-menu')
}
window.addEventListener('scroll',scrollUp)

const sections =document.querySelectorAll('section[id]')

const scrollActive =()=>{
	const scrollDown = window.scrollY

	sections.forEach(current=>{
		const sectionHeight = current.offsetHeight,
		      sectionTop = current.offsetTop -58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

			  if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
				sectionsClass.classList.add('active-link')
			  } else {
				sectionsClass.classList.remove('active-link')
			  }
	})
}
window.addEventListener('scroll',scrollActive)

const sr=ScrollReveal({
	origin:'top',
	distance:'60px',
	duration:2500,
	delay:300,
})
sr.reveal(`.home-data,.footer`)
sr.reveal(`.dish`,{delay:500 , distance :'100px' , origin : 'bottom'})
sr.reveal(`.burger`,{delay:1200,distance:'100px',duration:1500})
sr.reveal(`.ingrediant`,{delay:1600,interval:100})
sr.reveal(`.recipe-image,.delivery-image,.contact-img`,{origin:'left'})
sr.reveal(`.recipe-data,.delivery-data,.contact-data`,{origin:'right'})
sr.reveal(`.popular-card`,{interval:100})






