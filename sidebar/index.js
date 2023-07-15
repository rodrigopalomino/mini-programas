const iconos = document.querySelectorAll('.sidebar__inferior-grupo i')
const bar = document.querySelector('.sidebar__superior button')
const spans = document.querySelectorAll('.sidebar__inferior-grupo-span')
console.log("botones : ",bar)

var c = true
const controladores = {
    house: false,
    about:false,
    messages:false,
    photos:false,
    settings:false
}


bar.addEventListener('click', (e) => {
    

    if ( c ){//c true

        spans.forEach(span => {
            span.style.opacity = 0
        })

        bar.classList.toggle('open')

        document.getElementById('sidebar').classList.add('sidebar-activo')
        c = false

        if ( controladores.house ){
            document.getElementById(`sidebar__inferior-grupo-house`).classList.remove('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-house`).classList.add('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.about ){
            document.getElementById(`sidebar__inferior-grupo-about`).classList.remove('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-about`).classList.add('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.messages ){
            document.getElementById(`sidebar__inferior-grupo-messages`).classList.remove('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-messages`).classList.add('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.photos ){
            document.getElementById(`sidebar__inferior-grupo-photos`).classList.remove('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-photos`).classList.add('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.settings ){
            document.getElementById(`sidebar__inferior-grupo-settings`).classList.remove('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-settings`).classList.add('sidebar__inferior-grupo-activo-c')
        }


    }else {//c false

        spans.forEach(span => {
            span.style.opacity = 1
        })
        bar.classList.toggle('open')
        document.getElementById('sidebar').classList.remove('sidebar-activo')
        c = true

        if ( controladores.house ){
            document.getElementById(`sidebar__inferior-grupo-house`).classList.add('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-house`).classList.remove('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.about ){
            document.getElementById(`sidebar__inferior-grupo-about`).classList.add('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-about`).classList.remove('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.messages ){
            document.getElementById(`sidebar__inferior-grupo-messages`).classList.add('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-messages`).classList.remove('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.photos ){
            document.getElementById(`sidebar__inferior-grupo-photos`).classList.add('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-photos`).classList.remove('sidebar__inferior-grupo-activo-c')
        }
        if ( controladores.settings ){
            document.getElementById(`sidebar__inferior-grupo-settings`).classList.add('sidebar__inferior-grupo-activo')
            document.getElementById(`sidebar__inferior-grupo-settings`).classList.remove('sidebar__inferior-grupo-activo-c')
        }
    }
    

})





iconos.forEach( icono => {
    icono.addEventListener('click', (e)=>{


        document.getElementById(`sidebar__inferior-grupo-house`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-about`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-messages`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-photos`).classList.remove('sidebar__inferior-grupo-activo')
        document.getElementById(`sidebar__inferior-grupo-settings`).classList.remove('sidebar__inferior-grupo-activo')

        document.getElementById(`sidebar__inferior-grupo-house`).classList.remove('sidebar__inferior-grupo-activo-c')
        document.getElementById(`sidebar__inferior-grupo-about`).classList.remove('sidebar__inferior-grupo-activo-c')
        document.getElementById(`sidebar__inferior-grupo-messages`).classList.remove('sidebar__inferior-grupo-activo-c')
        document.getElementById(`sidebar__inferior-grupo-photos`).classList.remove('sidebar__inferior-grupo-activo-c')
        document.getElementById(`sidebar__inferior-grupo-settings`).classList.remove('sidebar__inferior-grupo-activo-c')

        if(c) {
            switch(e.target.id){
                case "icono-house":
                    document.getElementById(`sidebar__inferior-grupo-house`).classList.add('sidebar__inferior-grupo-activo')
                    controladores.house = true
                    controladores.about = false
                    controladores.messages = false
                    controladores.photos = false
                    controladores.settings = false
                    break
                case "icono-about":
                    document.getElementById(`sidebar__inferior-grupo-about`).classList.add('sidebar__inferior-grupo-activo')
                    controladores.house = false
                    controladores.about = true
                    controladores.messages = false
                    controladores.photos = false
                    controladores.settings = false
                    break
                case "icono-messages":
                    document.getElementById(`sidebar__inferior-grupo-messages`).classList.add('sidebar__inferior-grupo-activo')
                    controladores.house = false
                    controladores.about = false
                    controladores.messages = true
                    controladores.photos = false
                    controladores.settings = false
                    break
                case "icono-photos":
                    document.getElementById(`sidebar__inferior-grupo-photos`).classList.add('sidebar__inferior-grupo-activo')
                    controladores.house = false
                    controladores.about = false
                    controladores.messages = false
                    controladores.photos = true
                    controladores.settings = false
                    break
                case "icono-settings":
                    document.getElementById(`sidebar__inferior-grupo-settings`).classList.add('sidebar__inferior-grupo-activo')
                    controladores.house = false
                    controladores.about = false
                    controladores.messages = false
                    controladores.photos = false
                    controladores.settings = true
                    break
            }
        }

        if (!c){
            switch(e.target.id){
                    case "icono-house":
                        document.getElementById(`sidebar__inferior-grupo-house`).classList.add('sidebar__inferior-grupo-activo-c')
                        controladores.house = true
                        controladores.about = false
                        controladores.messages = false
                        controladores.photos = false
                        controladores.settings = false
                        break
                    case "icono-about":
                        document.getElementById(`sidebar__inferior-grupo-about`).classList.add('sidebar__inferior-grupo-activo-c')
                        controladores.house = false
                        controladores.about = true
                        controladores.messages = false
                        controladores.photos = false
                        controladores.settingss = false
                        break
                    case "icono-messages":
                        document.getElementById(`sidebar__inferior-grupo-messages`).classList.add('sidebar__inferior-grupo-activo-c')
                        controladores.house = false
                        controladores.about = false
                        controladores.messages = true
                        controladores.photos = false
                        controladores.settings = false
                        break
                    case "icono-photos":
                        document.getElementById(`sidebar__inferior-grupo-photos`).classList.add('sidebar__inferior-grupo-activo-c')
                        controladores.house = false
                        controladores.about = false
                        controladores.messages = false
                        controladores.photos = true
                        controladores.settings = false
                        break
                    case "icono-settings":
                        document.getElementById(`sidebar__inferior-grupo-settings`).classList.add('sidebar__inferior-grupo-activo-c')
                        controladores.house = false
                        controladores.about = false
                        controladores.messages = false
                        controladores.photos = false
                        controladores.settings = true
                        break
                }
        }
    

    })
})