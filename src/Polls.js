import './Polls.css';

const Polls = () => {
    var votes = 10;
    document.querySelector('div').style.setProperty('--width', votes+'%');
    setTimeout(() => {  votes = 50; document.querySelector('div').style.setProperty('--width', votes+'%'); }, 2000);

    return (
        <div class='bar bar-transition'></div>
    );

}
 
export default Polls;