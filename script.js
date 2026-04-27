// {practice_project_name, Live_site, Code, Tech}
const fmContainer = [
  ["GameStash", "https://gamestash-frontend.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/GameStash", "MERN"],
  ["Plan..Action..Repeat", "https://plan-action-repeat.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/Plan..Action..Repeat", "React.js, Shadcn UI, Tailwind"], 
  ["Pocket-Notes", "https://pocket-notes-ui.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/Pocket-Notes", "MERN"],
  ["Workout-Memo", "https://workout-memo-ui.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/Workout-Memo", "MERN"], 
  ["Meme-Page", "https://github.com/hemanth110702/practice-projects/tree/main/meme_page", "https://github.com/hemanth110702/practice-projects/tree/main/meme_page", "Flask, HTML, CSS"], 
  ["Loan-Prediction", "https://github.com/hemanth110702/practice-projects/tree/main/Loan_Prediction", "https://github.com/hemanth110702/practice-projects/tree/main/Loan_Prediction", "Python, ML"], 
  ["React-Weather-Loc", "https://react-weather-loc.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/react-weather-loc", "React.js"], ["React-Todo", "https://react-todo-pp.vercel.app", "https://github.com/hemanth110702/practice-projects/tree/main/react-todo", "React.js"], ["React-RPS", "https://react-rps-game-otvq461b9-hemanth110702s-projects.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/react-rps-game", "React.js"], ["React-Calculator", "https://react-calculator-five-orpin.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/react-calculator", "React.js"], ["Slot-Machine", "https://github.com/hemanth110702/practice-projects/tree/main/slot-machine-js", "https://github.com/hemanth110702/practice-projects/tree/main/slot-machine-js", "JS"], ["Hangman-game", "https://github.com/hemanth110702/practice-projects/tree/main/hangman-game", "https://github.com/hemanth110702/practice-projects/tree/main/hangman-game", "Python"], ["Nexus-Swaram-Landing-Page", "https://nexus-swaram-landing-page.vercel.app/", "https://github.com/hemanth110702/practice-projects/tree/main/Nexus-Swaram-Landing-Page", "React.js, HTML, CSS"], ["clone-youtube.com", "./clone-youtube.com/index.html", "https://github.com/hemanth110702/practice-projects/tree/main/clone-youtube.com", "HTML, CSS"], ["Institution-Website", "./institution-website/index.html", "https://github.com/hemanth110702/practice-projects/tree/main/institution-website", "HTML,CS, JS"], ["Bus Seat Allocation", "./bus-seat-allocation/index.html", "https://github.com/hemanth110702/practice-projects/tree/main/bus-seat-allocation", "HTML, CSS"], ["AOR", "./AOR/index.html", "https://github.com/hemanth110702/practice-projects/tree/main/AOR", "HTML, CSS"], ["Hometown", "https://github.com/hemanth110702/practice-projects/tree/main/scrimba-html-css-js/1.Hometown-html-css/index.html", "https://github.com/hemanth110702/practice-projects/tree/main/scrimba-html-css-js/1.Hometown-html-css", "HTML, CSS"]
]

const tbodyRef = document.getElementById('index').getElementsByTagName('tbody')[0];

for (let i = 0; i < fmContainer.length; i++) {
  const row = tbodyRef.insertRow();
  row.innerHTML = `<td> ${i + 1} </td>
                    <td id='cname'> ${fmContainer[i][0]} </td>
                    <td id='live'> <a target="_blank" href="${fmContainer[i][1]}"> Live </a> </td>
                    <td id='code'> <a target="_blank" href="${fmContainer[i][2]}"> Code </a> </td>
                    <td id='tech'> ${fmContainer[i][3]} </td>`
}