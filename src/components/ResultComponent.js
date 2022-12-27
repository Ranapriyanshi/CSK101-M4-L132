import './result.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return(
      <content className='result-content'>
        <h1 id='result'>Result</h1>
        <div id='display'>
            <h2 id='comment'>You need more practise!</h2>
            <h1 id='score'>Your score is 20% </h1>
            <div id='result-description'>
                <div className='score-card'>
                    Total number of question 
                    <div>15</div>
                </div>
                <div className='score-card'>
                    Number of attempted questions 
                    <div>9</div>
                </div>
                <div className='score-card'>
                    Number of correct answers 
                    <div>3</div>
                </div>
                <div className='score-card'>
                    Number of uncorrect answers 
                    <div>6</div>
                </div>
            </div>
        </div>
        <div id='user-actions'>
            <button className='press' id='replay'>Play Again</button>
            <button className='press' id='home'>Back to Home</button>
        </div>
      </content>
    )
}