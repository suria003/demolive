import Index from "../Pages/Index";
import HMEContact from "../Pages/HMEContact";
import TPS from "../Pages/TPS";
import Story from "../Pages/Story";
import Portfolio from "../Pages/Portfolio";
import Branch from "../Pages/Branch";
import Secure from "../Pages/Secure";
import CoreValue from "../Pages/CoreValue";

export default function Main(){
    return(
        <main className="h-auto w-[100%] bg-white">
            <Index />
            <TPS />
            <Story />
            <Portfolio />
            <Branch />
            <Secure />
            <CoreValue />
            <HMEContact />
        </main>
    );
}