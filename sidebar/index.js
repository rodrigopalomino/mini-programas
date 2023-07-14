const iconos = document.querySelectorAll('.sidebar__inferior-grupo i')
const bar = document.getElementById('icono-bar')
const spans = document.querySelectorAll('.sidebar__inferior-grupo-span')
console.log("botones : ",spans)

var c = 1
bar.addEventListener('click', (e) => {
    

    if ( c%2!==0 ){//c imapr
        spans.forEach(span => {
            span.style.opacity = 0
        })
        e.target.classList.remove('fa-x')
        e.target.classList.add('fa-bars')
        document.getElementById('sidebar').classList.add('sidebar-activo')
        c++

    }else {//c par
        spans.forEach(span => {
            span.style.opacity = 1
        })
        e.target.classList.add('fa-x')
        e.target.classList.remove('fa-bars')
        document.getElementById('sidebar').classList.remove('sidebar-activo')
        c++
    }
    

})





iconos.forEach( icono => {
    icono.addEventListener('click', (e)=>{

        console.log("sd : ",e.target.id)

        document.getElementById(`sidebar__inferior-grupo-house`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-about`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-messages`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-photos`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-settings`).classList.remove('sidebar__inferior-grupo-activo')

        switch(e.target.id){
            case "icono-house":
                document.getElementById(`sidebar__inferior-grupo-house`).classList.add('sidebar__inferior-grupo-activo')
                break
            case "icono-about":
                document.getElementById(`sidebar__inferior-grupo-about`).classList.add('sidebar__inferior-grupo-activo')
                break
            case "icono-messages":
                document.getElementById(`sidebar__inferior-grupo-messages`).classList.add('sidebar__inferior-grupo-activo')
                break
            case "icono-photos":
                document.getElementById(`sidebar__inferior-grupo-photos`).classList.add('sidebar__inferior-grupo-activo')
                break
            case "icono-settings":
                document.getElementById(`sidebar__inferior-grupo-settings`).classList.add('sidebar__inferior-grupo-activo')
                break
        }

    })
})