let darkmode = document.querySelector("#darm")
let darks = document.querySelector("#darkspan")
const dark = document.querySelector("#darkm")
const body = document.body
let darkMode = document.querySelector("#darkm")
let headblock = document.querySelector(".header_block")
let i = 0;


dark.addEventListener("click", () => {
    if(dark.classList.contains("darkmode")){
        dark.classList.remove("darkmode")
    } else {
        dark.classList.toggle("darkmode")
    }
    if(document.body.classList.contains("dark_body")) {
        document.body.classList.remove("dark_body")
        localStorage.theme = "light"
        document.querySelector(".span").style = "border-bottom: 1px solid #000";
    } else {
        chekinp()
    }
});

function chekinp() {
    body.classList.add("dark_body")
    console.log("Hello World!");
    localStorage.theme = 'darkmode';
    document.querySelector(".span").style = "border-bottom: 1px solid white";
}

if(localStorage.theme === 'darkmode' ) {
    body.classList.add("dark_body")
    console.log("Hello World!");
    localStorage.theme = 'darkmode';
    dark.classList.toggle("darkmode")
    document.querySelector(".span").style = "border-bottom: 1px solid white";
}

let btn = document.querySelector(".btn")
let items = document.querySelector(".items")
let cars = document.querySelector("#cars")
// var arr = [...Array(3).keys()]

let aray = ['<img src="https://besthqwallpapers.com/Uploads/25-11-2017/30488/thumb2-bmw-i8-4k-vorsteiner-vr-e-electric-sports-coupe.jpg"><div class="div"><h3>This is BMW</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://sales.mercedes-mb-belyaevo.ru/upload/img/2020/12/15/5fd86e5a09592.jpeg"><div class="div"><h3>This is Mercedens</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://cdn.motor1.com/images/mgl/8QMwo/s3/2022-audi-a8-l.jpg"><div class="div"><h3>This is Audi</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',    
             '<img src="https://www.miniaturendekimpe.be/assets/media/25059/ferrari-sf90-stradale-spider-rosso-corsa-322.jpg"><div class="div"><h3>This is Ferrari</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMIZDZTxUJfYP9bz9BLGkgdUdYbc0vKTEbQ&usqp=CAU"><div class="div"><h3>This is Lamborghini</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://s0.rbk.ru/v6_top_pics/media/img/8/74/756442399809748.jpg"><div class="div"><h3>This is Tesla</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>'
            //  ''
            ];

cars.addEventListener("click", ()=> {
    items.innerHTML = '';

    for (let i = 0; i < aray.length; i++) {
        // const element = array[index];

        let block = document.createElement("div");

        block.classList.add("block");
        
        block.innerHTML = aray[i];
        items.appendChild(block)
    }
});

cars.addEventListener("dblclick", () =>{
    items.innerHTML = '';
})

// 

let tiger = document.querySelector("#tiger")

let arayTiger = ['<img src="https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337"><div class="div"><h3>This is IATA</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg"><div class="div"><h3>This is Ram</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802__480.jpg"><div class="div"><h3>This is Zebra</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',    
             '<img src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/unique-animals-australia-606x303.jpg"><div class="div"><h3>This is Kuala</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://files.worldwildlife.org/wwfcmsprod/images/Panda_in_Tree/hero_small/99i33zyc0l_Large_WW170579.jpg"><div class="div"><h3>This is Panda</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://zooclub.ru/attach/46000/46798.jpg"><div class="div"><h3>This is Elephant</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>'
            //  ''
            ];

tiger.addEventListener("click", ()=> {
    items.innerHTML = '';
    for (let i of arayTiger) {

        let block = document.createElement("div");

        block.classList.add("block");
        
        block.innerHTML = i;
        items.appendChild(block)
    }
});

tiger.addEventListener("dblclick", () =>{
    items.innerHTML = '';
})

// 

let citys = document.querySelector("#citys")

let arayCitys = ['<img src="https://grodnoinvest.by/uploads/news/2022/january/Uzbekistan.png"><div class="div"><h3>This is UZBEKISTAN</h3><p>The station is the best Uzbekistan eturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://workpermit.com/sites/default/files/styles/large/public/5357522048_35c1db3008_z.jpg?itok=BHRrY-sO"><div class="div"><h3>This is Usa</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://a.cdn-hotels.com/gdcs/production5/d1291/dbb648c4-0c8f-44e2-a72e-05371aa359d4.jpg?impolicy=fcrop&w=800&h=533&q=medium"><div class="div"><h3>This is Russia</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',    
             '<img src="https://static.euronews.com/articles/stories/06/43/76/76/1440x810_cmsv2_8b9c9503-4d71-5a47-b199-fd6e1185ff06-6437676.jpg"><div class="div"><h3>This is Ukraine</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://cdn.passporthealthusa.com/wp-content/uploads/2020/06/vaccines-advice-south-korea-img-compressed.jpg?x94138"><div class="div"><h3>This is Korea</h3><p>Abdulbori like this place secteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="./images/me.jpg"><div class="div"><h3>This is Me</h3><p>Abdulboriy, and Xojiakbar, Devs cteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>'
            //  ''
            ];

citys.addEventListener("click", ()=> {
    items.innerHTML = '';
    for (let i in arayCitys) {

        let block = document.createElement("div");

        block.classList.add("block");
        
        block.innerHTML = arayCitys[i];
        items.appendChild(block)
    }
});

citys.addEventListener("dblclick", () =>{
    items.innerHTML = '';
})

// 

let fruits = document.querySelector("#fruits")

let arayFruits = ['<img src="https://cdn.botanichka.ru/wp-content/uploads/2018/06/ot-chego-zavisit-vkus-iablok-01.jpg"><div class="div"><h3>This is Apple</h3><p>The station is the best Uzbekistan eturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://static.dw.com/image/16127202_101.jpg"><div class="div"><h3>This is Banana</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://assets.bonappetit.com/photos/5cfa7e1fdf8e95e1e62ca6a3/3:2/w_4218,h_2812,c_limit/Basically-Strawberry-Shortcake-Strawberries.jpg"><div class="div"><h3>This is Strawbery</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',    
             '<img src="https://e3.edimdoma.ru/data/posts/0001/8895/18895-ed4_wide.jpg?1631187274"><div class="div"><h3>This is Watermelon</h3><p>Lorem ipsum, dolor sit amet consecteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://images.kitchenstories.io/wagtailOriginalImages/A920-photo-final-3/A920-photo-final-3-large-landscape-150.jpg"><div class="div"><h3>This is Melon</h3><p>Abdulbori like this fruit secteturconsecteturconsectetur adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>',
             '<img src="https://n1s1.elle.ru/06/e8/51/06e851147d2708baf8ba8fb6318a24e5/940x625_0xc0a839a4_4901753201487177777.jpeg"><div class="div"><h3>This is Kivi</h3><p> likes this fruit adipisicing elit. Sint, ea! Lorem ipsum dolor sit amet.</p></div>'
            //  ''
            ];

fruits.addEventListener("click", ()=> {
    items.innerHTML = '';
    arayFruits.forEach((i) => {

        let block = document.createElement("div");

        block.classList.add("block");
        
        block.innerHTML = i;
        items.appendChild(block)
    })
});

fruits.addEventListener("dblclick", () =>{
    items.innerHTML = '';
})

// 

let sliderItems = document.querySelector(".slider_img")
let sliderImgs = document.querySelectorAll(".slider_img img")
let next = document.querySelector(".next")  
const prev = document.querySelector(".prev")  
let changeH1 = document.querySelector("#change")
let changeP = document.querySelector("#paragraph")

let offsett = 0;

function work() {
    if(offsett > sliderImgs.length -1) {
        offsett = 0;
    } else if(offsett < 0) {
        offsett = sliderImgs.length -1;
    }
    sliderItems.style.transform = `translateX(${-offsett * 100}%)`;    
}

next.addEventListener("click", ()=> {
    offsett++;
    clearInterval()
    work()
    if(offsett === 1) {
        changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For of</h1>`;
        changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For of “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
    } else if(offsett === 0) {
        changeH1.innerHTML = `<h1 id="change">Hello Guys!  <br> It's done in For</h1>`;
        changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For as“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
    } 
    if(offsett === 2) {
        changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For in</h1>`;
        changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For in “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
    } else if(offsett === 3) {
        changeH1.innerHTML = `<h1 id="change">Hello Guys! <br> It's done in For Each</h1>`;
        changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For each“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
    } 
    
})

prev.addEventListener("click", ()=> {
        offsett--;
        clearInterval()
        work() 
        if(offsett === 1) {
            changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For of</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For of “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } else if(offsett === 0) {
            changeH1.innerHTML = `<h1 id="change">Hello Guys!  <br> It's done in For</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For as“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        }
        if(offsett === 2) {
            changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For in</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For in “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } else if(offsett === 3) {
            changeH1.innerHTML = `<h1 id="change">Hello Guys! <br> It's done in For Each</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For each“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } 
})

function workInterval() {
    setInterval(()=> {
        offsett++;
        clearInterval()
        work()
        if(offsett === 1) {
            changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For of</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For of “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } else if(offsett === 0) {
            changeH1.innerHTML = `<h1 id="change">Hello Guys!  <br> It's done in For</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For as“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } 
        if(offsett === 2) {
            changeH1.innerHTML = `<h1 id="change">Hi Guys!  <br> It's done in For in</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For in “a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } else if(offsett === 3) {
            changeH1.innerHTML = `<h1 id="change">Hello Guys! <br> It's done in For Each</h1>`;
            changeP.innerHTML = `<p id="paragraph">A paragraph is Creating in  For each“a group of sentences or a  single <br> sentence that forms a unit” (Lunsford and Connors 116). <br> Length and appearance do not  determine whether  a section <br> in For instance, in some styles of  writing, particularly journalistic <br> styles, a paragraph can be jus</p>`;
        } 
    }, 4250)
}
workInterval()


// console.log(sliderImgs);
