const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const slides = document.querySelectorAll(".slick")


let sildew = slides.length - 1
let length = slides.length
let ss = 1


function left() {
    // slides.forEach((slide, index) => {
    //     // console.log(slide, index)
    //     slide.style.transform = `translateX(${(index - ss) * 100}%)`
    // })

    if (ss === 0) {
        ss = length
        iss=ss
        console.log("left1", ss)
        if(ss===length){
            ss-=1
            console.log("left44", ss)
        }
    }
    // else if(sildew!==0){
    // sildew--
    // console.log("2",sildew)
    // }
    else {
        ss--
        console.log("left3", ss)
    }
    console.log(ss)
    slides.forEach((slide, index) => {
        // console.log(slide, index)
        slide.style.transform = `translateX(${(index - ss) * 100}%)`
    })

    rightBtn.addEventListener("click",()=>{
       
    })
}
console.log(left())
leftBtn.addEventListener("click", left)

// setInterval(left,3000)
 ss = 0
// let sildew2 = -1
function rightbutton() {
    
    if (ss === length - 1) {
        ss = 0
        // sildew++
        console.log("right1", ss)
    }
    else {
        ss++
        console.log("right2", ss)
    }
    console.log(ss)
    
    
    slides.forEach((slide, index) => {
        // console.log(slide, index)
        slide.style.transform = `translateX(${(index - ss) * 100}%)`
    })

    // console.log(slides)
}
rightBtn.addEventListener("click", rightbutton)


const slick2 = document.querySelectorAll(".slick2")
const leftBtn2 = document.querySelector(".left2")
const rightBtn2 = document.querySelector(".right2")
let sildew2 = 0
let length2 = slick2.length
let length3 = slick2.length

function uclu() {

    slick2.forEach((slide2, index2) => {
        // if(index2===-1){
        //     slide2.style.transform = `translateX(${(index2 - sildew2) * 100*(-1)}%)`
        // }
        slide2.style.transform = `translateX(${(index2 - sildew2) * 100}%)`
        // console.log(index2)

    })

    if (sildew2 === 0) {
        sildew2 = length2 - 3
        console.log(sildew2)
    }
    else {
        sildew2 = sildew2 - 3
    }

}
uclu()
leftBtn2.addEventListener("click", uclu)
// console.log(uclu()) 


let sildew3 = 0
function uclu2() {



    if (sildew3 === length3 - 3) {
        sildew3 = 0
        console.log("1", sildew3)
    }
    // else if(sildew3===6){
    //     sildew3=0
    // console.log("1",sildew3)
    // }
    else {
        sildew3 += 3
        console.log("2", sildew3)
    }
    slick2.forEach((slide3, index3) => {
        // if(index2===-1){
        //     slide2.style.transform = `translateX(${(index2 - sildew2) * 100*(-1)}%)`
        // }
        slide3.style.transform = `translateX(${(index3 - sildew3) * 100}%)`
        // console.log(index2)

    })
    console.log(length3)
}
// uclu2()

rightBtn2.addEventListener("click", uclu2)

// rightBtn2.addEventListener("click", () => {


//     if (sildew2 === length2) {

//         sildew2 = 0
//     }
//     else {
//         sildew2++
//     }
//     console.log(sildew)

//     slick2.forEach((slide2, index2) => {
//         console.log(slide2, index2)
//         slide2.style.transform = `translateX(${(index2 - sildew2) * 100}%)`
//     })

//     console.log(slick2)
// })



const single3 = document.querySelectorAll(".slick3")
const rightBtn3 = document.querySelector(".right3")
const leftBtn3 = document.querySelector(".left3")
let container = 0
let length4 = single3.length

function slick3() {

    single3.forEach((slide4, index4) => {

        slide4.style.transform = `translateX(${(index4 - container) * 100}%)`

    })

    if (container === 0) {
        container = length4 - 3

    }
    else {
        container--

    }
}
slick3()
leftBtn3.addEventListener("click", slick3)

let say = 0

function slickright() {

    if (say === length4 - 3) {
        say = 0
        // console.log("sass", say)
    }
    else {
        say++
        // console.log("sss", say)
    }

    single3.forEach((slide5 , index5) => {

        slide5.style.transform = `translateX(${(index5 - say) * 100}%)`
    })


}

rightBtn3.addEventListener("click", slickright)

setInterval(slickright,3000)