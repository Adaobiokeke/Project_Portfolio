import scheduller from '../Assets/scheduler.png'
import mdk from '../Assets/mdkpalace.png'
import naco from '../Assets/naco.png'
import food from '../Assets/foodapp.png'
import timer from '../Assets/timmer.png'
import robo from '../Assets/robo.png'
import blogger from '../Assets/blogger.png'

export const Divdatas = [
    {
        title:"Scheduler App",
        image:scheduller,
        link:"https://appointment-scheduler-app-lhl.netlify.app",
        content:'Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.Appointment days (Monday to Friday) are displayed and colour-specified depending on availability.The days show the number of slots available on each day of the week.A user can switch between days and see detailed information.Booked and available slots are clearly differentiated.A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers.A user can change the details of an existing interview by pressing the edit icon.A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview.Days display currently remaining spots and capture updates after each modification'
    },
    {
        title:"Food Recipe App",
        image:food,
        link:"https://food-recipee-app.netlify.app/",
        content:"The Food Recipe App is a SPA (Single Page Application) for sourcing ingredients and calorie counts for Intercontinental dishes and drinks,built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to search out recipe's in real time.The application communicates with an API server over HTTP, using the JSON format."
    },
    {
        title:"Robo Friends App",
        image:robo,
        link:"https://metalic-robo-friends.netlify.app",
        content:''
    },
    {
        title:"Naco Water",
        image:naco,
        link:"https://naco-water.netlify.app",
        content:''
    },
    {
        title:"Mdk-Palace App",
        image:mdk,
        link:"https://mdk-palace.netlify.app",
        content:''
    },
    {
        title:"Countdown-Timer App",
        image:timer,
        link:"https://my-count-down-timer.netlify.app",
        content:''
    },
    {
        title:"Blogger Static Page",
        image:blogger,
        link:"https://blogger-page.netlify.app",
        content:'The Blogger page is a static react page. Material-UI components were used in putting it all together. This colourful website is also responsive on all screen sizes '
    },
]