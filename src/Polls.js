import './Polls.css';

const Polls = () => {
    updateVotes('ans1', 100);
    setTimeout(() => { updateVotes('ans2', 20); }, 2000);

    return (
        <div class='bar bar-transition ans1'></div>
    );

    function updateVotes(ans, votes) {
        document.querySelector('div').style.setProperty('--width-'+ans, votes+'%');
    }
}
 
export default Polls;