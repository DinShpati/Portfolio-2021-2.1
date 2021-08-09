/* This is where I can store project data and display it to the user. */

//Project Data
var projectsz = [
    {
        name: "New England Shea Butter",
        image: "http://dinshpati.com/projectImgs/nesb.png",
        desc: "Ecommerce website made for New England Shea Butter, LLC.",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> PHP<br> MySQL<br> PayPal Api<br> Jquery<br> Bootstrap"],
        view: "https://nesheabutter.com",
        code: "view-source:https://nesheabutter.com/",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "COVID-19 Tracker",
        image: "http://dinshpati.com/projectImgs/covid-19.PNG",
        desc: "This is a covid-19 application that provides free opensource information regarding covid-19. The covid-19 data in this application is sourced from The Center for Systems Science and Engineering at John Hopkins University which is accessed through a Application Programming Interface (API) provided by @mathdroid.",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> REACT<br> FECTH API<br> MapBox<br> Postman"],
        view: "http://covid19.dinshpati.com/#/",
        code: "https://github.com/DinShpati/covid-19",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "WXY Movies",
        image: "http://dinshpati.com/projectImgs/wxymovies.png",
        desc: "This is a fully responsive landing page for a movies website.",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> Jquery"],
        view: "https://dinshpati.github.io/wxy-Movies-Webpage/",
        code: "https://github.com/DinShpati/wxy-Movies-Webpage",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "LYFT Clone 2019",
        image: "http://dinshpati.com/projectImgs/lyft.png",
        desc: "A clone of lyfts website",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> Jquery"],
        view: "https://dinshpati.github.io/LYFT_CLONE/",
        code: "https://github.com/DinShpati/LYFT_CLONE",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "Cheap Flight Finder",
        image: "http://dinshpati.com/projectImgs/cheapff.png",
        desc: "Cheap flight finders main page for the landing page, desktop/laptop screen only",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> Jquery"],
        view: "https://dinshpati.github.io/CheapFlightFinder/",
        code: "https://github.com/DinShpati/CheapFlightFinder",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "GAOTek, Excel Generator",
        image: "http://dinshpati.com/projectImgs/gaotek.PNG",
        desc: "We are creating a program that takes user inputs and generates a amazon excel sheet that can be uploaded to amazon and automatically create a product lisitng.",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript<br> PHP<br> Composer<br> Bootstrap"],
        view: "https://github.com/scalable-system/project22",
        code: "https://github.com/scalable-system/project22",
        date: "July 28th, 2018 - Present",
        services: "Backend<br> UI/UX"
    },
    {
        name: "Pazzam",
        image: "http://dinshpati.com/projectImgs/pazzam.png",
        desc: "This is a landing page build for a creative agnecy called Pazzam",
        whatIUsed: ["HTML5<br> CSS3<br> Javascript"],
        view: "https://dinshpati.github.io/Pazzam/",
        code: "https://github.com/DinShpati/Pazzam",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    },
    {
        name: "BrideBook",
        image: "http://dinshpati.com/projectImgs/bridebook.jpg",
        desc: "This is a email template made for bridebook.",
        whatIUsed: "HTML5<br> CSS3<br> Javascript",
        view: "https://dinshpati.github.io/bridebook/",
        code: "https://github.com/DinShpati/bridebook",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> UI/UX"
    },
    {
        name: "Norwalk CC Final Project",
        image: "http://dinshpati.com/projectImgs/norwalkccfinalproject.png",
        desc: "This is was my final project for a web dev class at Norwalk CC.",
        whatIUsed: "HTML5<br> CSS3<br> Javascript",
        view: "https://dinshpati.github.io/NorwalkCC-Final/index.html",
        code: "https://github.com/DinShpati/NorwalkCC-Final",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> UI/UX"
    },
    {
        name: "EasyBank Landing Page",
        image: "http://dinshpati.com/projectImgs/EasyBank.jpg",
        desc: "This was a front-end coding challenge by frontendmentor.io",
        whatIUsed: "HTML5<br> CSS3<br> Javascript",
        view: "https://dinshpati.github.io/EasyBank-Landing-Page/",
        code: "https://github.com/DinShpati/EasyBank-Landing-Page",
        date: "July 28th, 2018 - Present",
        services: "Frontend<br> Backend<br> UI/UX"
    }
];

//Project List

function listProjects(typeOf){

    let projects = projectsz;

    let body = document.getElementsByTagName("Body")[0];
    
    if(typeOf === "all"){
        mainDivElement = document.getElementById("all");

    for(var i = 0; i < projects.length; i++){
        
    let name = projects[i].name, 
        image = projects[i].image, 
        desc = projects[i].desc,
        projectDate = projects[i].date,
        view = projects[i].view, 
        code = projects[i].code,
        services = projects[i].services;

        //Main Div
        projectDiv = document.createElement("div");
        projectDiv.className = "project projectDiv";
        projectDiv.setAttribute("data-aos", "zoom-in");

            //Main Title
            projectTitle = document.createElement("img");
            projectTitle.className = "projectTitle";
            projectTitle.src = `${image}`;

                //Main Title H4
                h4_1 = document.createElement("h3");
                h4_1.innerHTML = name;

            //Main Button Div
            projectButton = document.createElement("div");
            projectButton.className = "projectInfo";

                //A Tag For the main button
                projectInfoBTN = document.createElement("a");
                projectInfoBTN.href = "#popup" + i;
                
                projectBTNText = document.createElement("a");
                projectBTNText.href = "#popup" + i;
                projectBTNText.innerHTML = "View Project";

            //Main  popup container
            projectPopup = document.createElement("div");
            projectPopup.id = "popup" + i;
            projectPopup.className = "overlay";

                //another container
                projectPopupDiv = document.createElement("div");
                projectPopupDiv.className = "popup";

                    //popup project title
                    h4_2 = document.createElement("h2");
                    h4_2.className = "h4";
                    h4_2.innerHTML = name + "<span style='color:#D01F5B;'>.</span>";

                    //Close popup btn
                    CloseBTN = document.createElement("a");
                    CloseBTN.href = "#projects";
                    CloseBTN.innerHTML = "&times;";
                    CloseBTN.className = "close";

                    //HR and BR
                    br = document.createElement("br");

                    //Another 2 column container
                    projectPopupChildDiv = document.createElement("div");
                    projectPopupChildDiv.className = "projectShowCase";

                        // Regular Container
                        regulerDiv1 = document.createElement("div");
                        regulerDiv1.className = "regularDiv1";
                        
                            //Project Image
                            projectImage = document.createElement("img");
                            projectImage.className = "projectImg";
                            projectImage.src = image;
                            projectImage.alt = name;

                        // Regular Container #2
                        regulerDiv2 = document.createElement("div");
                        regulerDiv2.className = "regularDiv2";

                            //date
                            regulerDiv21 = document.createElement("div");
                            regulerDiv21.innerHTML = "<h5>Date</h5><h5>" + projectDate + "</h5>";
                            //services
                            regulerDiv22 = document.createElement("div");
                            regulerDiv22.innerHTML = "<h5>Services</h5><h5>" + services + "</h5>";
                            //technology 
                            regulerDiv23 = document.createElement("div");
                            regulerDiv23.innerHTML = "<h5>Technologies</h5><h5>" + projects[i].whatIUsed + "</h5>";
                            //view button
                            regulerDiv24 = document.createElement("div");
                            regulerDiv24.className = "regulerDiv24";

                            //Project Description
                            projectDesc = document.createElement("p");
                            projectDesc.className = "projectDesc";
                            projectDesc.innerText = desc;
                            //regulerDiv2.appendChild(projectDesc);
                            
                            //Simple hr tag
                            hr3 = document.createElement("hr");
                            //regulerDiv2.appendChild(hr3);

                            //p tag header
                            projectHeader = document.createElement("p");
                            projectHeader.className = "h4 gray";
                            projectHeader.innerText = "What I Used";
                            //regulerDiv2.appendChild(projectHeader);

                            //Creating the elements for the technologies that I used for the development of the project

                            for(var j = 0; j < projects[i].whatIUsed.length; j++){

                                aHREF = document.createElement("a");
                                aHREF.href = "";
                                aHREF.innerHTML = projects[i].whatIUsed[j];
                                aHREF.className = "skillheader";
                                //regulerDiv2.appendChild(aHREF);

                            }
                    // Regular Container #3
                    regulerDiv3 = document.createElement("div");
                    regulerDiv3.className = "regularDiv3";


                    
                    //Content div at the buttom
                    contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                            //View code and View Project buttons
                            viewSite = document.createElement("a");
                            viewSite.href = view;
                            viewSite.innerHTML = "View App/Site";
                            viewSite.className = "view";
                            
                            viewCode = document.createElement("a");
                            viewCode.href = code;
                            viewCode.innerHTML = "See the Code";
                            viewCode.className = "code";
                            


                    //Appending Children
                    mainDivElement.appendChild(projectDiv);

                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectButton);
                    body.appendChild(projectPopup);
                    projectDiv.appendChild(h4_1);

                    projectButton.appendChild(projectInfoBTN);
                    projectInfoBTN.appendChild(projectBTNText)

                    projectPopup.appendChild(projectPopupDiv);

                    projectPopupDiv.appendChild(h4_2);
                    projectPopupDiv.appendChild(CloseBTN);
                    projectPopupDiv.appendChild(br);
                    projectPopupDiv.appendChild(projectPopupChildDiv);
                    projectPopupDiv.appendChild(contentDiv);

                    projectPopupChildDiv.appendChild(regulerDiv2);
                    projectPopupChildDiv.appendChild(regulerDiv3);
                    projectPopupChildDiv.appendChild(regulerDiv1);

                    regulerDiv3.appendChild(projectDesc);
                    
                    regulerDiv2.appendChild(regulerDiv21);
                    regulerDiv2.appendChild(regulerDiv22);
                    regulerDiv2.appendChild(regulerDiv23);

                    regulerDiv2.appendChild(regulerDiv24);
                    regulerDiv24.appendChild(viewSite);
                    regulerDiv24.appendChild(viewCode);

                    regulerDiv1.appendChild(projectImage);
                    
                    //contentDiv.appendChild(viewSite);
                    //contentDiv.appendChild(viewCode); 
                }
            }else if(typeOf === "Frontend"){
                mainDivElement = document.getElementById("Frontend");
        
                for(var i = 0; i < projects.length; i++){
        
                if(projects[i].services.search("Frontend") >= 0){
                //declaring the variables and assigning there values
                let name = projects[i].name, 
                image = projects[i].image, 
                desc = projects[i].desc,
                projectDate = projects[i].date,
                view = projects[i].view, 
                code = projects[i].code,
                services = projects[i].services;

                //Main Div
                projectDiv = document.createElement("div");
                projectDiv.className = "project projectDiv";
                projectDiv.setAttribute("data-aos", "zoom-in");

                //Main Title
                projectTitle = document.createElement("img");
                projectTitle.className = "projectTitle";
                projectTitle.src = `${image}`;

                //Main Title H4
                h4_1 = document.createElement("h3");
                h4_1.innerHTML = name;

                //Main Button Div
                projectButton = document.createElement("div");
                projectButton.className = "projectInfo";

                //A Tag For the main button
                projectInfoBTN = document.createElement("a");
                projectInfoBTN.href = "#popup" + i;
                
                projectBTNText = document.createElement("a");
                projectBTNText.href = "#popup" + i;
                projectBTNText.innerHTML = "View Project";

                //Main  popup container
                projectPopup = document.createElement("div");
                projectPopup.id = "popup" + i;
                projectPopup.className = "overlay";

                //another container
                projectPopupDiv = document.createElement("div");
                projectPopupDiv.className = "popup";

                    //popup project title
                    h4_2 = document.createElement("h2");
                    h4_2.className = "h4";
                    h4_2.innerHTML = name + "<span style='color:#D01F5B;'>.</span>";

                    //Close popup btn
                    CloseBTN = document.createElement("a");
                    CloseBTN.href = "#projects";
                    CloseBTN.innerHTML = "&times;";
                    CloseBTN.className = "close";

                    //HR and BR
                    br = document.createElement("br");

                    //Another 2 column container
                    projectPopupChildDiv = document.createElement("div");
                    projectPopupChildDiv.className = "projectShowCase";

                        // Regular Container
                        regulerDiv1 = document.createElement("div");
                        regulerDiv1.className = "regularDiv1";
                        
                            //Project Image
                            projectImage = document.createElement("img");
                            projectImage.className = "projectImg";
                            projectImage.src = image;
                            projectImage.alt = name;

                        // Regular Container #2
                        regulerDiv2 = document.createElement("div");
                        regulerDiv2.className = "regularDiv2";

                            //date
                            regulerDiv21 = document.createElement("div");
                            regulerDiv21.innerHTML = "<h5>Date</h5><h5>" + projectDate + "</h5>";
                            //services
                            regulerDiv22 = document.createElement("div");
                            regulerDiv22.innerHTML = "<h5>Services</h5><h5>" + services + "</h5>";
                            //technology 
                            regulerDiv23 = document.createElement("div");
                            regulerDiv23.innerHTML = "<h5>Technologies</h5><h5>" + projects[i].whatIUsed + "</h5>";
                            //view button
                            regulerDiv24 = document.createElement("div");
                            regulerDiv24.className = "regulerDiv24";

                            //Project Description
                            projectDesc = document.createElement("p");
                            projectDesc.className = "projectDesc";
                            projectDesc.innerText = desc;
                            //regulerDiv2.appendChild(projectDesc);
                            
                            //Simple hr tag
                            hr3 = document.createElement("hr");
                            //regulerDiv2.appendChild(hr3);

                            //p tag header
                            projectHeader = document.createElement("p");
                            projectHeader.className = "h4 gray";
                            projectHeader.innerText = "What I Used";
                            //regulerDiv2.appendChild(projectHeader);

                            //Creating the elements for the technologies that I used for the development of the project

                            for(var j = 0; j < projects[i].whatIUsed.length; j++){

                                aHREF = document.createElement("a");
                                aHREF.href = "";
                                aHREF.innerHTML = projects[i].whatIUsed[j];
                                aHREF.className = "skillheader";
                                //regulerDiv2.appendChild(aHREF);

                            }
                    // Regular Container #3
                    regulerDiv3 = document.createElement("div");
                    regulerDiv3.className = "regularDiv3";


                    
                    //Content div at the buttom
                    contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                            //View code and View Project buttons
                            viewSite = document.createElement("a");
                            viewSite.href = view;
                            viewSite.innerHTML = "View App/Site";
                            viewSite.className = "view";
                            
                            viewCode = document.createElement("a");
                            viewCode.href = code;
                            viewCode.innerHTML = "See the Code";
                            viewCode.className = "code";
                            


                    //Appending Children
                    mainDivElement.appendChild(projectDiv);

                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectButton);
                    body.appendChild(projectPopup);
                    projectDiv.appendChild(h4_1);

                    projectButton.appendChild(projectInfoBTN);
                    projectInfoBTN.appendChild(projectBTNText)

                    projectPopup.appendChild(projectPopupDiv);

                    projectPopupDiv.appendChild(h4_2);
                    projectPopupDiv.appendChild(CloseBTN);
                    projectPopupDiv.appendChild(br);
                    projectPopupDiv.appendChild(projectPopupChildDiv);
                    projectPopupDiv.appendChild(contentDiv);

                    projectPopupChildDiv.appendChild(regulerDiv2);
                    projectPopupChildDiv.appendChild(regulerDiv3);
                    projectPopupChildDiv.appendChild(regulerDiv1);

                    regulerDiv3.appendChild(projectDesc);
                    
                    regulerDiv2.appendChild(regulerDiv21);
                    regulerDiv2.appendChild(regulerDiv22);
                    regulerDiv2.appendChild(regulerDiv23);

                    regulerDiv2.appendChild(regulerDiv24);
                    regulerDiv24.appendChild(viewSite);
                    regulerDiv24.appendChild(viewCode);

                    regulerDiv1.appendChild(projectImage);
                    
                    //contentDiv.appendChild(viewSite);
                    //contentDiv.appendChild(viewCode); 
            }}
            
        
        }else if(typeOf === "Backend"){
                mainDivElement = document.getElementById("Backend");
        
                for(var i = 0; i < projects.length; i++){
        
                if(projects[i].services.search("Backend") >= 0){
                //declaring the variables and assigning there values
                let name = projects[i].name, 
                image = projects[i].image, 
                desc = projects[i].desc,
                projectDate = projects[i].date,
                view = projects[i].view, 
                code = projects[i].code,
                services = projects[i].services;

                //Main Div
                projectDiv = document.createElement("div");
                projectDiv.className = "project projectDiv";
                projectDiv.setAttribute("data-aos", "zoom-in");

                //Main Title
                projectTitle = document.createElement("img");
                projectTitle.className = "projectTitle";
                projectTitle.src = `${image}`;

                //Main Title H4
                h4_1 = document.createElement("h3");
                h4_1.innerHTML = name;

                //Main Button Div
                projectButton = document.createElement("div");
                projectButton.className = "projectInfo";

                //A Tag For the main button
                projectInfoBTN = document.createElement("a");
                projectInfoBTN.href = "#popup" + i;
                
                projectBTNText = document.createElement("a");
                projectBTNText.href = "#popup" + i;
                projectBTNText.innerHTML = "View Project";

                //Main  popup container
                projectPopup = document.createElement("div");
                projectPopup.id = "popup" + i;
                projectPopup.className = "overlay";

                //another container
                projectPopupDiv = document.createElement("div");
                projectPopupDiv.className = "popup";

                    //popup project title
                    h4_2 = document.createElement("h2");
                    h4_2.className = "h4";
                    h4_2.innerHTML = name + "<span style='color:#D01F5B;'>.</span>";

                    //Close popup btn
                    CloseBTN = document.createElement("a");
                    CloseBTN.href = "#projects";
                    CloseBTN.innerHTML = "&times;";
                    CloseBTN.className = "close";

                    //HR and BR
                    br = document.createElement("br");

                    //Another 2 column container
                    projectPopupChildDiv = document.createElement("div");
                    projectPopupChildDiv.className = "projectShowCase";

                        // Regular Container
                        regulerDiv1 = document.createElement("div");
                        regulerDiv1.className = "regularDiv1";
                        
                            //Project Image
                            projectImage = document.createElement("img");
                            projectImage.className = "projectImg";
                            projectImage.src = image;
                            projectImage.alt = name;

                        // Regular Container #2
                        regulerDiv2 = document.createElement("div");
                        regulerDiv2.className = "regularDiv2";

                            //date
                            regulerDiv21 = document.createElement("div");
                            regulerDiv21.innerHTML = "<h5>Date</h5><h5>" + projectDate + "</h5>";
                            //services
                            regulerDiv22 = document.createElement("div");
                            regulerDiv22.innerHTML = "<h5>Services</h5><h5>" + services + "</h5>";
                            //technology 
                            regulerDiv23 = document.createElement("div");
                            regulerDiv23.innerHTML = "<h5>Technologies</h5><h5>" + projects[i].whatIUsed + "</h5>";
                            //view button
                            regulerDiv24 = document.createElement("div");
                            regulerDiv24.className = "regulerDiv24";

                            //Project Description
                            projectDesc = document.createElement("p");
                            projectDesc.className = "projectDesc";
                            projectDesc.innerText = desc;
                            //regulerDiv2.appendChild(projectDesc);
                            
                            //Simple hr tag
                            hr3 = document.createElement("hr");
                            //regulerDiv2.appendChild(hr3);

                            //p tag header
                            projectHeader = document.createElement("p");
                            projectHeader.className = "h4 gray";
                            projectHeader.innerText = "What I Used";
                            //regulerDiv2.appendChild(projectHeader);

                            //Creating the elements for the technologies that I used for the development of the project

                            for(var j = 0; j < projects[i].whatIUsed.length; j++){

                                aHREF = document.createElement("a");
                                aHREF.href = "";
                                aHREF.innerHTML = projects[i].whatIUsed[j];
                                aHREF.className = "skillheader";
                                //regulerDiv2.appendChild(aHREF);

                            }
                    // Regular Container #3
                    regulerDiv3 = document.createElement("div");
                    regulerDiv3.className = "regularDiv3";


                    
                    //Content div at the buttom
                    contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                            //View code and View Project buttons
                            viewSite = document.createElement("a");
                            viewSite.href = view;
                            viewSite.innerHTML = "View App/Site";
                            viewSite.className = "view";
                            
                            viewCode = document.createElement("a");
                            viewCode.href = code;
                            viewCode.innerHTML = "See the Code";
                            viewCode.className = "code";
                            


                    //Appending Children
                    mainDivElement.appendChild(projectDiv);

                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectButton);
                    body.appendChild(projectPopup);
                    projectDiv.appendChild(h4_1);

                    projectButton.appendChild(projectInfoBTN);
                    projectInfoBTN.appendChild(projectBTNText)

                    projectPopup.appendChild(projectPopupDiv);

                    projectPopupDiv.appendChild(h4_2);
                    projectPopupDiv.appendChild(CloseBTN);
                    projectPopupDiv.appendChild(br);
                    projectPopupDiv.appendChild(projectPopupChildDiv);
                    projectPopupDiv.appendChild(contentDiv);

                    projectPopupChildDiv.appendChild(regulerDiv2);
                    projectPopupChildDiv.appendChild(regulerDiv3);
                    projectPopupChildDiv.appendChild(regulerDiv1);

                    regulerDiv3.appendChild(projectDesc);
                    
                    regulerDiv2.appendChild(regulerDiv21);
                    regulerDiv2.appendChild(regulerDiv22);
                    regulerDiv2.appendChild(regulerDiv23);

                    regulerDiv2.appendChild(regulerDiv24);
                    regulerDiv24.appendChild(viewSite);
                    regulerDiv24.appendChild(viewCode);

                    regulerDiv1.appendChild(projectImage);
                    
                    //contentDiv.appendChild(viewSite);
                    //contentDiv.appendChild(viewCode); 
            }}
            
        
        }else if(typeOf === "Mobile"){
                mainDivElement = document.getElementById("Mobile");
        
                for(var i = 0; i < projects.length; i++){
        
                if(projects[i].services.search("Mobile") >= 0){
                //declaring the variables and assigning there values
                let name = projects[i].name, 
                image = projects[i].image, 
                desc = projects[i].desc,
                projectDate = projects[i].date,
                view = projects[i].view, 
                code = projects[i].code,
                services = projects[i].services;

                //Main Div
                projectDiv = document.createElement("div");
                projectDiv.className = "project projectDiv";
                

                //Main Title
                projectTitle = document.createElement("img");
                projectTitle.className = "projectTitle";
                projectTitle.src = `${image}`;

                //Main Title H4
                h4_1 = document.createElement("h3");
                h4_1.innerHTML = name;

                //Main Button Div
                projectButton = document.createElement("div");
                projectButton.className = "projectInfo";

                //A Tag For the main button
                projectInfoBTN = document.createElement("a");
                projectInfoBTN.href = "#popup" + i;
                
                projectBTNText = document.createElement("a");
                projectBTNText.href = "#popup" + i;
                projectBTNText.innerHTML = "View Project";

                //Main  popup container
                projectPopup = document.createElement("div");
                projectPopup.id = "popup" + i;
                projectPopup.className = "overlay";

                //another container
                projectPopupDiv = document.createElement("div");
                projectPopupDiv.className = "popup";

                    //popup project title
                    h4_2 = document.createElement("h2");
                    h4_2.className = "h4";
                    h4_2.innerHTML = name + "<span style='color:#D01F5B;'>.</span>";

                    //Close popup btn
                    CloseBTN = document.createElement("a");
                    CloseBTN.href = "#projects";
                    CloseBTN.innerHTML = "&times;";
                    CloseBTN.className = "close";

                    //HR and BR
                    br = document.createElement("br");

                    //Another 2 column container
                    projectPopupChildDiv = document.createElement("div");
                    projectPopupChildDiv.className = "projectShowCase";

                        // Regular Container
                        regulerDiv1 = document.createElement("div");
                        regulerDiv1.className = "regularDiv1";
                        
                            //Project Image
                            projectImage = document.createElement("img");
                            projectImage.className = "projectImg";
                            projectImage.src = image;
                            projectImage.alt = name;

                        // Regular Container #2
                        regulerDiv2 = document.createElement("div");
                        regulerDiv2.className = "regularDiv2";

                            //date
                            regulerDiv21 = document.createElement("div");
                            regulerDiv21.innerHTML = "<h5>Date</h5><h5>" + projectDate + "</h5>";
                            //services
                            regulerDiv22 = document.createElement("div");
                            regulerDiv22.innerHTML = "<h5>Services</h5><h5>" + services + "</h5>";
                            //technology 
                            regulerDiv23 = document.createElement("div");
                            regulerDiv23.innerHTML = "<h5>Technologies</h5><h5>" + projects[i].whatIUsed + "</h5>";
                            //view button
                            regulerDiv24 = document.createElement("div");
                            regulerDiv24.className = "regulerDiv24";

                            //Project Description
                            projectDesc = document.createElement("p");
                            projectDesc.className = "projectDesc";
                            projectDesc.innerText = desc;
                            //regulerDiv2.appendChild(projectDesc);
                            
                            //Simple hr tag
                            hr3 = document.createElement("hr");
                            //regulerDiv2.appendChild(hr3);

                            //p tag header
                            projectHeader = document.createElement("p");
                            projectHeader.className = "h4 gray";
                            projectHeader.innerText = "What I Used";
                            //regulerDiv2.appendChild(projectHeader);

                            //Creating the elements for the technologies that I used for the development of the project

                            for(var j = 0; j < projects[i].whatIUsed.length; j++){

                                aHREF = document.createElement("a");
                                aHREF.href = "";
                                aHREF.innerHTML = projects[i].whatIUsed[j];
                                aHREF.className = "skillheader";
                                //regulerDiv2.appendChild(aHREF);

                            }
                    // Regular Container #3
                    regulerDiv3 = document.createElement("div");
                    regulerDiv3.className = "regularDiv3";


                    
                    //Content div at the buttom
                    contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                            //View code and View Project buttons
                            viewSite = document.createElement("a");
                            viewSite.href = view;
                            viewSite.innerHTML = "View App/Site";
                            viewSite.className = "view";
                            
                            viewCode = document.createElement("a");
                            viewCode.href = code;
                            viewCode.innerHTML = "See the Code";
                            viewCode.className = "code";
                            


                    //Appending Children
                    mainDivElement.appendChild(projectDiv);

                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectButton);
                    body.appendChild(projectPopup);
                    projectDiv.appendChild(h4_1);

                    projectButton.appendChild(projectInfoBTN);
                    projectInfoBTN.appendChild(projectBTNText)

                    projectPopup.appendChild(projectPopupDiv);

                    projectPopupDiv.appendChild(h4_2);
                    projectPopupDiv.appendChild(CloseBTN);
                    projectPopupDiv.appendChild(br);
                    projectPopupDiv.appendChild(projectPopupChildDiv);
                    projectPopupDiv.appendChild(contentDiv);

                    projectPopupChildDiv.appendChild(regulerDiv2);
                    projectPopupChildDiv.appendChild(regulerDiv3);
                    projectPopupChildDiv.appendChild(regulerDiv1);

                    regulerDiv3.appendChild(projectDesc);
                    
                    regulerDiv2.appendChild(regulerDiv21);
                    regulerDiv2.appendChild(regulerDiv22);
                    regulerDiv2.appendChild(regulerDiv23);

                    regulerDiv2.appendChild(regulerDiv24);
                    regulerDiv24.appendChild(viewSite);
                    regulerDiv24.appendChild(viewCode);

                    regulerDiv1.appendChild(projectImage);
                    
                    //contentDiv.appendChild(viewSite);
                    //contentDiv.appendChild(viewCode); 
            }}
            
        
        }


}

//Call the function and display to the user

/* Example of Project
<div class="project">
                    <img src="http://dinshpati.com/projectImgs/nesb.png" alt="">
                    <h3>New England Shea Butter</h3>
                </div>
                */