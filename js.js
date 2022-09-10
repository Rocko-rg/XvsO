
var divs = document.querySelectorAll("#dv")
var dv1 = document.querySelector(".dv1")
var dv2 = document.querySelector(".dv2")
var dv3 = document.querySelector(".dv3")
var dv4 = document.querySelector(".dv4")
var dv5 = document.querySelector(".dv5")
var dv6 = document.querySelector(".dv6")
var dv7 = document.querySelector(".dv7")
var dv8 = document.querySelector(".dv8")
var dv9 = document.querySelector(".dv9")
var win = document.querySelector(".win")
var xxxh1 = document.querySelector(".xxxh1")
var oooh1 = document.querySelector(".oooh1")
var xxxh2 = document.querySelector(".xxxh2")
var oooh2 = document.querySelector(".oooh2")
var restartr = document.querySelector(".restartr")
var restartg = document.querySelector(".restartg")

var xxx = 0
var ooo = 0
var counter = 0
for(var i of divs){
    i.addEventListener("click", function(){
        //X0
        if(this.innerHTML == ""){
            if(counter%2==0){
               this.innerHTML = "X"
               xxxh1.style.color = "rgb(238, 238, 238)"
               oooh1.style.color = "#fb2b95"
               oooh1.style.transition = "0.2s"
            }
            else{
                this.innerHTML = "0"
                xxxh1.style.color = "#fb2b95"
                xxxh1.style.transition = "0.2s"
                oooh1.style.color = "rgb(238, 238, 238)"
            }
        }
        //X
        if(dv1.innerHTML == "X" && dv2.innerHTML == "X" && dv3.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv2.style.backgroundColor = "#67ffb7"
            dv3.style.backgroundColor = "#67ffb7"
            for(var i of divs){
            i.style.pointerEvents = "none"
            }
        }
        if (dv4.innerHTML == "X" && dv5.innerHTML == "X" && dv6.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv4.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv6.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv7.innerHTML == "X" && dv8.innerHTML == "X" && dv9.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv7.style.backgroundColor = "#67ffb7"
            dv8.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv1.innerHTML == "X" && dv4.innerHTML == "X" && dv7.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv4.style.backgroundColor = "#67ffb7"
            dv7.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv2.innerHTML == "X" && dv5.innerHTML == "X" && dv8.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv2.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv8.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv3.innerHTML == "X" && dv6.innerHTML == "X" && dv9.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv3.style.backgroundColor = "#67ffb7"
            dv6.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv1.innerHTML == "X" && dv5.innerHTML == "X" && dv9.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv3.innerHTML == "X" && dv5.innerHTML == "X" && dv7.innerHTML == "X"){
            win.innerHTML = "<<< WINNER"
            xxx++
            xxxh2.innerHTML = xxx
            oooh1.style.color = "rgb(238, 238, 238)"
            dv3.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv7.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        //0
        if(dv1.innerHTML == "0" && dv2.innerHTML == "0" && dv3.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv2.style.backgroundColor = "#67ffb7"
            dv3.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv4.innerHTML == "0" && dv5.innerHTML == "0" && dv6.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv4.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv6.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv7.innerHTML == "0" && dv8.innerHTML == "0" && dv9.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv7.style.backgroundColor = "#67ffb7"
            dv8.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv1.innerHTML == "0" && dv4.innerHTML == "0" && dv7.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv4.style.backgroundColor = "#67ffb7"
            dv7.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv2.innerHTML == "0" && dv5.innerHTML == "0" && dv8.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv2.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv8.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv3.innerHTML == "0" && dv6.innerHTML == "0" && dv9.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv3.style.backgroundColor = "#67ffb7"
            dv6.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv1.innerHTML == "0" && dv5.innerHTML == "0" && dv9.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv1.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv9.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv3.innerHTML == "0" && dv5.innerHTML == "0" && dv7.innerHTML == "0"){
            win.innerHTML = "WINNER >>>"
            ooo++
            oooh2.innerHTML = ooo
            xxxh1.style.color = "rgb(238, 238, 238)"
            dv3.style.backgroundColor = "#67ffb7"
            dv5.style.backgroundColor = "#67ffb7"
            dv7.style.backgroundColor = "#67ffb7"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }   
    counter++        
    })
}

restartr.addEventListener("click",function(){
    
    win.innerHTML = ""
    for(var i of divs){
        if(i.innerHTML == "X"){
            i.innerHTML = ""
        }
        if(i.innerHTML == "0"){
            i.innerHTML = ""
        }
        if(i.style.backgroundColor = "#67ffb7"){
            i.style.backgroundColor = ""
        }
        if (i.style.pointerEvents = "none"){
            i.style.pointerEvents = "auto"
        }
    }  
    if (counter%2!=0){
        oooh1.style.color = "#fb2b95"
    }
    else{
        xxxh1.style.color = "#fb2b95"
    }
})

restartg.addEventListener("click",function(){
    xxx = 0
    ooo = 0
    xxxh2.innerHTML = xxx
    oooh2.innerHTML = ooo

    win.innerHTML = ""
    for(var i of divs){
        if(i.innerHTML == "X"){
            i.innerHTML = ""
        }
        if(i.innerHTML == "0"){
            i.innerHTML = ""
        }
        if(i.style.backgroundColor = "#67ffb7"){
            i.style.backgroundColor = ""
        }
        if (i.style.pointerEvents = "none"){
            i.style.pointerEvents = "auto"
        }
    } 
    if (counter%2!=0){
        oooh1.style.color = "#fb2b95"
    }
    else{
        xxxh1.style.color = "#fb2b95"
    }
})
