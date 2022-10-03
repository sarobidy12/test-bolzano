import img from './Asset/pencil.gif';
import Card from './Card';
import "./style.css";


const Step3 = () => {
    return (
        <div className="step3">

            <div className="titleStep3">

                <img
                    src={img}
                    alt="Bissness problems we' ve solved"
                />

                <h2
                    className="titleh2"
                >
                    Bissness problems we've solved
                </h2>

            </div>

            <div className="containerRow">

                <div className="containerCol">
                    <Card to="/" text="Can a love story double as a hearing test ?" />
                </div>

                <div className="containerCol">
                    <Card to="/" text="How close to an AFL Player can you get ?" />
                </div>
                
            </div>

            <div className='viewOur'>
                View our work
            </div>

        </div>
    );
}

export default Step3;