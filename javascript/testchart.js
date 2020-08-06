var submission = { 
    "survey":{
        "survey_name":"Primer cuestionario",
        "question_groups" : [
            {
                "question_group_name": "Innovacion",
                "questions":[
                    {
                        "id":"1",
                        "question_text":"¿que tanto innovas? del 1 al 10",
                        "answer":"5"
                    }
                ]
            },
            {
                "question_group_name": "Liderazgo",
                "questions":[
                    {
                        "id":"2",
                        "question_text":"¿Que tanto haces micromanagement? 1 poco y 10 mucho",
                        "answer":"8"
                    }
                ]
            },
            {
                "question_group_name": "Resiliencia",
                "questions":[
                    {
                        "id":"3",
                        "question_text":"¿En cuanto tiempo te recuperas de una perdida? 1 dia a 10 dias",
                        "answer":"3"
                    }
                ]
            }
        ]
    }
};

var categories = [];
var answers = [];

for (var i = 0; i < submission["survey"].question_groups.length; i++) {
    for (var j = 0; j < submission["survey"].question_groups[i].questions.length; j++) {
        answers.push(submission["survey"].question_groups[i].questions[j].answer);
    }
  categories.push(submission["survey"].question_groups[i].question_group_name);
}


var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
        // The data for our dataset
        data: {
            labels: categories,
            datasets: [{
                label: 'Radiografia de Fernando sandoval',
                backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgb(0, 0, 255)',
                data: answers
            }]
        },
    
        // Configuration options go here
        options: {}
    });

var element = document.getElementById('myChart');
//var worker = html2pdf().from(element).save();