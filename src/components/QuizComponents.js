import './quiz.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return(
      <content className='quiz-content'>
        <div id='question-pannel'>
            <div>
                <h1>Question</h1>
            </div>
            <div id='number'>1 of 15</div>
            <div>
                <h2>Which is the mammal that can jump?</h2></div>
            <div id='input'>
                <input type="button" value="Dog" className='options'/>
                <input type="button" value="Elephant" className='options'/>
                <input type="button" value="Goat" className='options'/>
                <input type="button" value="Lion" className='options'/>
            </div>
            <div id='buttons'>
                <button className='oprations' id='previous'>Previous</button>
                <button className='oprations' id='next'> Next</button>
                <button className='oprations' id='quit'>Quit</button>
            </div>
        </div>
      </content>
    )
}