let cities=[
    {
        name:"tampa",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225470.9223171415!2d-82.59436336504737!3d27.99441157497227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20Florida%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114365351!5m2!1shr!2sba"
    },
    {
        name:"miami",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925866925!2d-80.2994981307946!3d25.782390733577515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114454715!5m2!1shr!2sba"
    },
    {
        name:"jacksonville",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440732.18517823634!2d-81.9632866175385!3d30.344691324515665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20Florida%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114525352!5m2!1shr!2sba"
    },
    {
        name:"savannah",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216456.09773296007!2d-81.340361102198!3d32.03876649253548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb75fc78f20659%3A0x4e0c6751036020bc!2sSavannah%2C%20Georgia%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114542781!5m2!1shr!2sba"
    },
    {
        name:"charlotte",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208648.72569710342!2d-80.97991128209765!3d35.20307278619072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20Sjeverna%20Karolina%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114560843!5m2!1shr!2sba"
    },
    {
        name:"atlanta",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106135.29706065016!2d-84.49064348386537!3d33.76769311981309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20Georgia%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114582710!5m2!1shr!2sba"
    },
    {
        name:"sanAntonio",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222284.81163684136!2d-98.65448725435739!3d29.48135718592383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20Texas%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2sba!4v1610114603792!5m2!1shr!2sba"
    }
]

let buttons =document.querySelectorAll(".buttons>.btn")
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        for(let i=0;i<buttons.length;i++){
            if(button.id==cities[i].name)
                document.getElementById("locationsMap").src=cities[i].url
            }
    })
})

$(".modal").click(function() { 
    $(".modal").modal("hide"); 
}); 
$("window").scroll(function() { 
    $(".modal").modal("hide"); 
}); 


   window.addEventListener("load",()=>{    
           let loader=document.querySelector(".spinnerBody")
           loader.classList.add("loadFinish")
           document.querySelector("body").style.overflow="scroll"
   })

  
    let sections=document.querySelectorAll(".section")
    let sectionsId=[]
    sections.forEach(section => {
        sectionsId.push(section.id)
    });

    let navLinks=document.querySelectorAll(".nav-link")
    let navLinksId=[]
    navLinks.forEach(navLink => {   
        navLinksId.push(navLink.id)
        
    });

    let properties=[]
    window.addEventListener("scroll", ()=>{

        properties=[]
        let destinations=document.querySelectorAll(".section")
        destinations.forEach(destination => {
            let prop=destination.getBoundingClientRect()
            let t=prop.top
            let b=prop.bottom
            let obj=[t,b]
            properties.push(obj)
        });
        for(let i=0;i<properties.length;i++){
            document.getElementById(navLinksId[i]).classList.remove("active")
            if(properties[i][0]<72 && properties[i][1]>72)
            {
                document.getElementById(navLinksId[i]).classList.add("active")
            }
        }

    })

    