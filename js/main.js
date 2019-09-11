//javascript
// document.getElementById().nex
function showHidden(obj)
{
    $(obj.nextElementSibling).slideToggle();
    $(obj).hide();
}

function hideHidden(obj)
{
    $(obj.parentElement).slideUp();
    $("#More").show();
}

function dropdown(obj)
{
    $(obj.nextElementSibling).slideToggle();
}

document.getElementById("current-location").addEventListener("click",function(e)
{
    if(e.target.classList.contains("edit"))
    {
        
        e.target.previousElementSibling.removeAttribute("readonly");
        e.target.previousElementSibling.value="";
        e.target.previousElementSibling.focus();
    }
})

function filterPost(postName,totalList)
{
    var list=document.getElementsByClassName(postName+"-post");
        document.getElementById("total-post").innerText=list.length;
    for(var i=0;i<totalList.length;i++)
    {
        var postObj=totalList[i];
        if(postObj.classList.contains(postName+"-post")){
            postObj.style.display="block"
        }
        else{
            postObj.style.display="none";
        }
    }
}

//functioj to check which link is clicked
document.getElementById("navigation-bar").addEventListener("click",function(e){
    var clickedLink=e.target.textContent.toLowerCase();
    var postCardList=document.querySelectorAll(".post-card");
    var navLink=document.getElementsByClassName("navLink");
    document.getElementById("post-type-filter").value=clickedLink;
    for(var i=0;i<navLink.length;i++)
    {
        var link=navLink[i];
        if(link.textContent.toLowerCase().includes(clickedLink))
        {
            link.style.textDecoration="underline";
        }
        else{
            link.style.textDecoration="none";
        }
    }

    if(clickedLink.includes("all"))
    {
        for(var i=0;i<postCardList.length;i++)
        {
            postCardList[i].style.display="block";
        }
    }
    else{
        filterPost(clickedLink,postCardList);
    }
});
//function to handle filtering process
document.getElementById("post-type-filter").addEventListener("change",function(e)
{
    var postCardList=document.querySelectorAll(".post-card");
    var navLinks=document.getElementsByClassName("navlink");
    for(var i=0;i<navLinks.length;i++)
    {
        if(navLinks[i].textContent.includes(e.target.value))
        {
            navLinks[i].style.textDecoration="underline";
        }
        else{
            navLinks[i].style.textDecoration="none";
        }
    }
    //if "all" is seleted
    if(e.target.value==="all")
    {
       document.getElementById("total-post").innerText=postCardList.length;
        for(var i=0;i<postCardList.length;i++)
        {
            postCardList[i].style.display="block";
        }
    }
    else{
        filterPost(e.target.value,postCardList);
    }
});

function loadPageContent()
{
    //loading total posts
    var postCardList=document.querySelectorAll(".post-card");
    document.getElementById("total-post").innerText=postCardList.length;
}
loadPageContent();
