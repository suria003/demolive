import logo from "../Assets/logo.png";
export default function Logo(){
    return(
        <div className="h-auto w-auto cursor-pointer" onClick={ () => window.location.href = "/" }>
            <img src={logo} alt="logo" className="h-[50px] w-auto object-fill" />
        </div>
    );
}