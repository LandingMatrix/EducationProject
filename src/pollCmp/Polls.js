import './Polls.css';
let root = document.documentElement;
const Polls = () => {

    const options = ["19", "21", "22", "26", "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf"];
    const answers = [6, 5, 4, 2, 10];

    //colour and populate each poll bar
    const colourList = ['#70AE98', '#ECBE7A', '#E58B88', '#9DABDD', '#9C8CDB'];
    for (let i = 0; i < answers.length; i++) {
        styleChange('--bg-ans'+parseInt(i+1), colourList[i]);
        styleChange('--ans'+parseInt(i+1), JSON.stringify(options[i]));
    }

    updateVotes(answers);

    setTimeout(() => {  updateVotes([3, 7, 4, 2, 0]); }, 3000);

    setTimeout(() => {  markCorrect('21', options); }, 8000);

    return (
        <div className="poll-bg">
            <div className='bar bar-transition ans1'></div>
            <div className='bar bar-transition ans2'></div>
            <div className='bar bar-transition ans3'></div>
            <div className='bar bar-transition ans4'></div>
            <div className='bar bar-transition ans5'></div>
        </div>
    );

    function styleChange(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }

    function updateVotes(answers) {
        var totalVotes = answers.reduce(function(a,b) { return a + b; }, 0);

        for (let i = 0; i < answers.length; i++) {
            var votePercent = 100 * answers[i] / totalVotes;
            styleChange('--width-ans'+parseInt(i+1), votePercent+'%');
        }
    }

    function markCorrect(answer, options) {
        for (let i = 0; i < answers.length; i++) {
            if (options[i] === answer) {
                styleChange('--bg-ans'+parseInt(i+1), '#77dd77');
            } else {
                styleChange('--bg-ans'+parseInt(i+1), '#878787');
            }
        }
    }
}
 
export default Polls;