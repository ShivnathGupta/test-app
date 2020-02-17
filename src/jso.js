import React, { Component } from 'react'
const database=[{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    
                    "Los Angeles Kings",
                    
                    "Golden State Warriros",
                    
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}]
class Jso extends Component{
    loadData=()=>{
        let myRow=[];
        database.map(function(item){
            let row=<table border="2px" width="100%">
            <tr>
            <td>{item.quiz.sport.q1.question}</td>
            <td>{item.quiz.sport.q1.options.reduce((r,a)=>r.concat("Option: ",a,<br />),[])} </td>
            <td>{item.quiz.sport.q1.answer}</td>
            </tr>
           
            </table>
            myRow.push(row)
        });
        return myRow;

    }
    loadData1=()=>{
        let myRow=[];
        database.map(function(item){
            let row=<table border="2px" width="100%">
            <tr>
            <td>{item.quiz.maths.q1.question}</td>
            <td>{item.quiz.maths.q1.options.reduce((r,a)=>r.concat("Option: ",a,<br />),[])} </td>
            <td>{item.quiz.maths.q1.answer}</td>
            </tr>
            <tr>
            <td>{item.quiz.maths.q2.question}</td>
            <td>{item.quiz.maths.q2.options.reduce((r,a)=>r.concat("Option: ",a,<br />),[])} </td>
            <td>{item.quiz.maths.q2.answer}</td></tr>

            </table>
            myRow.push(row)
        });
        return myRow;

    }
    render(){
        return(
            <table border="2px" width="100%">
                <thead>
                    <tr >
                        <td colspan="2">Quiz</td>
                        
                    </tr>
                </thead>
            <tr>
                <td>Sport</td>
                <td>Maths</td>
            </tr>
            <tr>
            <td>{this.loadData()}</td>
            <td>{this.loadData1()}</td>
            </tr>
            
            </table>);
    }
}

 export default Jso;
