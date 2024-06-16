let inputContainer;
let p;
let input;

// Typing Animation of starter
var tl=gsap.timeline();

tl.from("#starter",{
    width:0,
    height:0,
    duration:0.8,
    opacity:0,
})

tl.from("#asciiArt",{
    y:20,
    width:0,
    height:0,
    duration:0.8,
    opacity:0,
})
tl.from("#header p",{
    stagger:0.5,
    width:0,
    height:0,
    duration:0.8,
    opacity:0,
})

let social=[
    {
        "instagram":"insta" 
    },
    {
        "facebook":"fb"
    },
    {
        "twitter":"tw"
    },

]



let help=[
    {
       "whois":"Who is Kid-With-Anxiety" 
    },
    {
        "whoami":"Who are you"
    },
    {
        "help":"You obviously already know what this does"
    },
    {
        "projects": "View coding projects"
    },
    {
        "clear":"Clear the terminal"
    },
    {
        "social":"Check out the fake me"
    }
]

let keywords=[
    {
        "whois" : `Hey, I'm Axel Blaze<br> I'm a skilled web developer and designer who battles anxiety. Passionate about coding, he excels in creating stunning, user-friendly websites. Despite his struggles, Axel finds solace in problem-solving and innovation, aiming to start his own agency and help others through his experiences with anxiety.`
    },
    {
        "whoami" : `Oh, "whoami"? Could you be any more desperate for attention from your computer?`
    },
    {
        "help": help
    },
    {
        "projects": "View coding projects"
    },   
    {
        "clear":"Clear the terminal"
    }, 
    {
        "social":social
    }
    
]



const load=()=>{
    input=document.createElement("input");
    p=document.createElement("p");
    inputContainer=document.createElement("div");

    inputContainer.className="inputContainer";
    p.innerHTML=`<span style="color:white";">guest</span>@kid-with-anxiety:$~ ` ;
    input.type="text";

    tl.from(p,{
        width:0,
        height:0,
        duration:0.8,
        opacity:0,
    })
    // input.placeholder="Enter your name";
    // input.autofocus=true;
    inputContainer.appendChild(p);
    inputContainer.appendChild(input);
    document.getElementById("main").appendChild(inputContainer);  

    document.getElementById("content").appendChild(inputContainer);

    input.focus();//To focus the caret after executing it

    input.addEventListener("keydown",handleEnter); 
}

const handleEnter=(e)=>{
    if(e.key == "Enter"){
        // console.log("zdf")
        input.disabled="true"

        let outputText=document.createElement("p");
        let outputContainer=document.createElement("div");
        outputText.classList.add("outputText")
        outputContainer.classList.add("outputContainer");
        outputText.innerHTML=`<br>Command not found. For a list of commands, type <span class="help">'help'</span>. <br>`;
        
        if(input.value==="whois"){
            outputText.innerHTML=`<br> ${keywords[0].whois}<br>`;
        }
        else if(input.value==="whoami"){
            outputText.innerHTML=`<br> ${keywords[1].whoami} <br>`
        }
        else if(input.value==="help"){
            outputText.innerHTML="";
            help.forEach(item => {
                for (let key in item) {
                    console.log(`${key}: ${item[key]}`);
                    outputText.innerHTML+=`<br> <span class="help">${key}</span> : ${item[key]}<br>`
                }
            });
            

        //   Animate the outputText element using GSAP after a slight delay
        
            


        }
        else if(input.value==="projects"){
            outputText.innerHTML="";
            outputText.innerHTML=`<br> Still curating... Check out <a href="https://github.com/Ayanokoji1248?tab=repositories" class="link">Github</a>. <br>`


        }
        else if(input.value ==="clear"){
            document.getElementById("content").innerHTML="";
        }
        else if(input.value==="social"){
            outputText.innerHTML="";
            social.forEach(item => {
                for (let key in item) {
                    outputText.innerHTML+=`<br> <span class="help">${key}</span> : <a class="link">${item[key]}</a><br>`
                }
            })
        }

        gsap.from(outputText, {
            // x: 10,
            width:200,
            opacity:0,
            duration: 2,
            delay: 0.1 ,// Adjust delay as needed
        });

        outputContainer.appendChild(outputText)
            inputContainer.appendChild(outputContainer);
        load();
    }
}

let crsr=document.getElementById("cursor");
document.querySelector("body").addEventListener("mousemove",(dets)=>{
    // console.log(dets);
    crsr.style.top=dets.y+"px";
    crsr.style.left=dets.x+"px";
})

// setTimeout(() => {
    load();
