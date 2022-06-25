 const wrapper=document.querySelector(".sliderWrapper")

 const menuItem=document.querySelectorAll(".menuItem")
 
 const products=[
     {
         id:1,
         title:"ZoomX Vaporfly",
         price:210,
         colors :[
             {
                 code:"black",
                 img:"./img/1.4-removebg-preview.png",
             },
             {
                 code:"lightgrey",
                 img:"./img/1.1-removebg-preview.png",
             },
             {
                 code:"lightgreen",
                 img:"./img/1.3-removebg-preview.png",
             },
             {
                code:"red",
                img:"./img/1.2-removebg-preview.png",
            },
             
         ],
     },
     {
         id:2,
         title:"SPACE HIPPIE 04",
         price:104,
         colors:[
             {
                 code:"pink",
                 img:"./img/3a.jpg",
             },
             {
                 code:"orange",
                 img:"./img/3b.jpg",
             },
             {
                code:"lightgrey",
                img:"./img/3c.jpg",
            },
            {
                code:"black",
                img:"./img/3d.jpg",
            },
         ],
     },
     {
        id:3,
        title:" Air Jordan Low",
        price:250,
        colors:[
            {
                code:"lightgrey",
                img:"./img/2.1-removebg-preview.png",
            },
            {
                code:"purple",
                img:"./img/2.2-removebg-preview.png",
            },
            {
                code:"red",
                img:"./img/2.3-removebg-preview.png",
            },
            {
                code:"black",
                img:"./img/2.4-removebg-preview.png",
            },
        ],
    },
    {
        id:4,
        title:"Air Jordan 1 High OG",
        price:240,
        colors:[
            {
                code:"lightgrey",
                img:"./img/4.1.png",
            },
            {
                code:"red",
                img:"./img/4.3-removebg-preview.png",
            },
            {
                code:"black",
                img:"./img/4.2-removebg-preview.png",
            },
            {
                code:"blue",
                img:"./img/ezgif.com-gif-maker.png",
            },
        ],
    },
    {
        id:5,
        title:"Nike Air Force 1",
        price:160,
        colors:[
            {
                code:"black",
                img:"./img/5.2-removebg-preview.png",
            },
            {
                code:"lightgrey",
                img:"./img/ezgif.com-gif-maker__1_-removebg-preview.png",
               
            },
          
            {
                code:"yellow",
                img:"./img/5.3-removebg-preview.png"
                
            },
            {
                code:"silver",
                img:"./img/anukul shoes.jpeg"
            },
           
         
        ],


    },

    
 ];

 let choosenproduct=products[0]; 
 const currentproductImg=document.querySelector(".productImg");
 const currentproductTitle=document.querySelector(".productTitle");
 const currentproductPrice=document.querySelector(".productPrice");
 const currentproductColor=document.querySelectorAll(".color");
 const currentproductSize=document.querySelectorAll(".size");

 

 menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //changing the current slide
        wrapper.style.transform= `translateX(${-100*index}vw)`;
        // for changing the choosen product

        choosenproduct=products[index];

        //change text of current product
        currentproductTitle.textContent= choosenproduct.title;
        currentproductPrice.textContent= "$"+choosenproduct.price;
        currentproductImg.src=choosenproduct.colors[0].img

        //for new color in evry slide
        currentproductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });

    });
 });
 //in order to change its current image
currentproductColor.forEach((color,index) =>{
    color.addEventListener("click",() =>{
        currentproductImg.src=choosenproduct.colors[index].img
    })
    })
    currentproductSize.forEach((size,index) =>{
        size.addEventListener("click",()=>{
            //to reset the old choosen size
            currentproductSize.forEach((size) => {
                size.style.backgroundColor="white"
                size.style.color="black"
            })
            size.style.backgroundColor="black";
            size.style.color="white";
        });
        
    });
    const productButton=document.querySelector(".productButton");
    const payment=document.querySelector(".payment");
    const close=document.querySelector(".close");
    productButton.addEventListener("click",()=>{
   payment.style.display="flex"
    })
    close.addEventListener("click",()=>{
        payment.style.display="none"
    })






      


 
