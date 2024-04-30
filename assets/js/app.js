window.addEventListener("DOMContentLoaded", ()=>{
	const load=document.querySelector(".loader");
			tabHeadr=document.querySelector(".tabheader__items"),
            tabs=document.querySelectorAll(".tabheader__item"),
            tabContent=document.querySelectorAll(".tabcontent")

	setTimeout(()=>{
		load.style.opacity="0";
		setTimeout(()=>{
			load.style.display="none";
		},500)
	},3000)
	
    function HideContent(){
        tabContent.forEach(item=>{
            item.style.display="none"
        })
        tabs.forEach(items=>{
            items.classList.remove("tabheader__item_active")
        })
    }
    function showContent(index=0){
        tabContent[index].style.display="block";
        tabs[index].classList.add("tabheader__item_active")
    }

    HideContent()
    showContent()

    tabHeadr.addEventListener("click", (event)=>{
        const target=event.target
        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((index,event)=>{
                if(target==index){
                    HideContent()
                    showContent(event)
                }
            })
        }
    })



})