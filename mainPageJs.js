let coursesListObj = [
    {
        'courseName': 'iOS Development',
        'CourseImg': '/Images/iOS Development.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'React',
        'CourseImg': '/Images/React.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'Intro to Python',
        'CourseImg': '/Images/PythonIntro.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'Advanced Python',
        'CourseImg': '/Images/PythonAdvanced.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'Advanced Cybersecurity Course',
        'CourseImg': '/Images/CybersecurityAdvanced.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'ToT - Training of Trainers',
        'CourseImg': '/Images/ToT.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'Blockchain',
        'CourseImg': '/Images/Blockchain.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'DevOps',
        'CourseImg': '/Images/DevOps.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
    {
        'courseName': 'Information Security Governance',
        'CourseImg': '/Images/InformationSecurityGovernance.webp',
        'courseStatus': 'რეგისტრაცია დასრულებულია',
    },
]

function addCourses(Obj, elmAddr){
    for(let course of Obj){
        elmAddr.innerHTML+=createCourse(course.courseName,course.CourseImg,course.courseStatus)
    }
}
function createCourse(name,imgSrc,courseStatus){
    const elm = `<div class="listsDiv">
    <div id="CourseImg">
        <img src="${imgSrc}" alt="Course Photo" width="100%">
    </div>
    <div class="courseAboutDiv">
        <div class="courseName"><h5>${name}</h5></div>
        <div class="courseStatus"><p>${courseStatus}</p></div>
        <div class="courseMoreDetailed">
            <div class="arrow">
                <svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/>
                </svg>
            </div>
            <div class="buttonForMoreDetails">
                <a href="#">
                    <span>კურსის დეტალები</span>
                </a>
            </div>
        </div>
    </div>
</div>`
    return elm;
}
addCourses(coursesListObj, document.getElementById('coursesList'))