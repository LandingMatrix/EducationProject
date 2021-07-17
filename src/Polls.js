import './Polls.css';

const Polls = () => {
    const options = []
    const answers = [6, 19, 4, 0, 3];
    updateVotes(answers);

    return (
        <div class="poll-bg">
            <div class='bar bar-transition ans1'></div>
            <div class='bar bar-transition ans2'></div>
            <div class='bar bar-transition ans3'></div>
            <div class='bar bar-transition ans4'></div>
            <div class='bar bar-transition ans5'></div>
        </div>
    );

    function updateVotes(answers) {
        var totalVotes = answers.reduce(function(a,b) { return a + b; }, 0);

        for (let i = 0; i < answers.length; i++) {
            var votePercent = 100 * answers[i] / totalVotes;
            document.documentElement.style.setProperty('--width-ans'+parseInt(i+1), votePercent+'%');
        }
    }
}
 
export default Polls;