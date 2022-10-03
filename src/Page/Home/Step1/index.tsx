import Header from "../../../Component/Header";
import "./style.css";

const Step1 = () => {
    return (
        <>
            <div className="home">
                <Header />
                <video
                    src="/Video/video.mp4"
                    loop={true}
                    muted={true}
                    autoPlay={true}
                ></video>
                <div className="content">

                    <h1 className="titleHome">
                        We make poeple<br />
                        more valuable to brands
                    </h1>
                </div>
            </div>
            <div className="btnDwm">
                <a href="#down">
                    Down
                </a>
            </div>
        </>

    );
}

export default Step1;