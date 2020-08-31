console.log('jquery connected')

// const baseUrl = "https://s3-us-west-2.amazonaws.com/json.biancalyngonzalez.com/expenses.json";

// const $state = $("state")


$(() => {

//Title

    let $expenseReport = $('<button>Download Your Expense Report</button>').css('background-color', 'green').attr('id', 'expense')
    $('body').append($expenseReport)

    $expenseReport.on('click', (event) => {
        event.preventDefault();

        $.ajax({

            url:"https://s3-us-west-2.amazonaws.com/json.biancalyngonzalez.com/expenses.json"
        }).then(
            (data)=>{
                $('<state>').html(data.alabama);
                $expenseReport.append($state)
            },
            ()=>{
                console.log('bad request');
            }
        );

    })
    

    let $welcome = $('<h1>').text("Quaran Tasks")
    $('body').append($welcome)
    
    let $about = $('<p>').css('font-size', 'small')
    $about.text("Keeping track of state licenses for COVID-19 healthcare providers, so that they treat patients in all 50 states")
    $welcome.append($about)

    const $rowContainer = $('<div>').attr('id', 'row-container');
    $welcome.append($rowContainer);

    const $container = $('<div>').attr('id', 'container');
    $('body').append($container);
    


//Conents of Table - Task Status

    //task labels

    const tasks = ['State Name', 'Application', 'Background Check & Fingerprints', 'Transcript (undergrad)', 'Transcript (grad)', 'Certfication', 'License Verification', 'Notary', 'Money Order', 'Employer Form', 'Other']
   
    const $taskLabels = []


    for (let i = 0; i <= tasks.length-1; i++){
        let $rowLabel = $('<div>');
        $rowLabel.text(tasks[i]);
        $rowLabel.attr('id', i);
        $rowLabel.addClass('task-row');
        $taskLabels.push($rowLabel)
    }

    $rowContainer.append($taskLabels)
    
    

    //state labels

    const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


    const $stateLabels = [];
    
    for (let i = 0; i <= states.length - 1; i++){
        let $columnLabel = $('<div>');
        $columnLabel.text(states[i]);
        $columnLabel.attr('id', i);
        $columnLabel.addClass('label');
        $stateLabels.push($columnLabel);
    }
    
    $container.append($stateLabels)

    //status boxes

    let $boxes = [];
    
    for (let i = 0; i < 500; i++) {
        let $square = $('<button>');    
        $square.attr('id', 'box ' + i);
        $square.addClass('square');
        $container.append($square);
        $boxes.push($square);

        let status = $square.on('click', ()=>{
                        $square.text($square.text() == 'Pending' ? 'Complete' : 'Pending')
        
        $square.attr('span', status)
        })
    }

    
})