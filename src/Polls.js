import './Polls.css';
let root = document.documentElement;
const Polls = () => {
    updateVotes('ans1', 100);
    setTimeout(() => { updateVotes('ans1', 20); }, 2000);

    return (
        <div class='bar bar-transition ans1'></div>
    );

    function updateVotes(ans, votes) {
        root.style.setProperty('--width-'+ans, votes+'%');
    }
}
 
export default Polls;