import image1 from "../assets/Rectangle-509.png"
import image2 from "../assets/Rectangle 507.png"
import image3 from "../assets/Rectangle 515.png"
import image4 from "../assets/Rectangle 514.png"
import image5 from "../assets/Rectangle 510.png"
import image6 from "../assets/Rectangle 516.png"
function Center(){
    return(
       <div className="container">
        <div className="upperHeading">
            <h1><b> We are offers <span> most trusted </span> <br /> matrimonial services</b></h1>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the </h3>
            <button>GET THE APP</button>
            <div className="wrapper">
                <img className="outer-img" src={image1} alt="" />
                <div className="center-wrapper">
                <img src={image2} alt="" />
                <img src={image3} alt="" />  
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                </div>
                <img className="outer-img" src={image6} alt="" />
            </div>
        </div>
       </div>
       
       
    )
}
export default Center