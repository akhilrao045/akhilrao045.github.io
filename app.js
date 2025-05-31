const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

// sidebar elements//

const sideBar = document.querySelector(".sidebar") // sidebar
const menu = document.querySelector(".menu-icon") // menu icon
const close = document.querySelector(".close-icon") // close icon
const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})

// sidebar elements//

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})


// contact button scroll//
document.getElementById("contactScrollBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


// scroll to bottom//
 function scrollToSection() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

//scroll up//
  document.getElementById('scrollUpBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

// resume link//
document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/my_resume.pdf'; // yahan apna file path daalo
    link.download = 'My_Resume.pdf';  // download hone wali file ka naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

