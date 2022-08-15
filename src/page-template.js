//Generated HTML page contents from emparr array object
const generatePage = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Roster</title>
    </head>

    <header>
    <h1>My Team</h1>
    </header>
    
    <body>
    <main class="container">
    <div class="row">
    ${data.filter(emp=>emp.role ==="Manager") //filter Manager data
    .map(({ role,empname, empid, empemail, empno }) => { 
             return `
             <div class="card">
              <h4 class="card-header text-center">${empname}</h4>
              <h4 class="card-header text-center"><i class='fas fa-mug-hot' style='font-size:25px'></i> ${role}</h4>
              <div class="card-body">             
              <p class="card-text">ID: ${empid}</p>
              <address>Email: <a href=mailto:${empemail} class="card-text">${empemail}</a></address>
              <p class="card-text">Office-no: ${empno}</p>
            </div>
          </div>
        `;
        })
        .join('')}
      
        ${data.filter(emp=>emp.role ==="Engineer") //filter engineer data
        .map(({ role,empname, empid, empemail, empgitname }) => { 
                 return `
                 <div class="card">
                <h4 class="card-header text-center">${empname}</h4>
                <h4 class="card-header text-center"><i class='fas fa-glasses' style='font-size:25px'></i> ${role}</h4>
                <div class="card-body">             
                  <p class="card-text">ID: ${empid}</p>
                  <address>Email: <a href=mailto:${empemail} class="card-text">${empemail}</a></address>
                  <address>Github: <a href=https://github.com/${empgitname} class="card-text" target = "_blank">${empgitname}</a></address>
                </div>
              </div>
            `;
            })
            .join('')}  

            ${data.filter(emp=>emp.role ==="Intern") //filter Intern data
            .map(({ role,empname, empid, empemail, empschool }) => { 
                     return `
                     <div class="card">
                    <h4 class="card-header text-center">${empname}</h4>
                    <h4 class="card-header text-center"><i class='fas fa-user-graduate' style='font-size:25px'></i> ${role}</h4>
                    <div class="card-body">             
                      <p class="card-text">ID: ${empid}</p>
                      <address>Email: <a href=mailto:${empemail} class="card-text">${empemail}</a></address>
                      <p class="card-text">School: ${empschool}</p>
                    </div>
                  </div>
                `;
                })
                .join('')} 
    </div>
    </main>
    <script src="https://kit.fontawesome.com/92ae2a3c2c.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;    
    
    };
    
    module.exports = generatePage;