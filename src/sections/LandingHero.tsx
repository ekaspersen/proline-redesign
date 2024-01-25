import { ButtonGhost, ButtonPrimary } from "../components/buttons";
import prorings from "../assets/prorings.svg";
export default function LandingHero() {
    return (
        <div className="px-4 relative lg:px-16 py-32 lg:py-52 gap-8 flex flex-col">
            <img
                className="absolute bottom-0 right-0 max-h-[40%] md:max-h-[80%] lg:max-h-full"
                src={prorings}
                alt=""
            />
            <div className="flex flex-col">
                <h1 className="text-3xl font-semibold lg:text-5xl">
                    Proline AS
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light">
                    360 Business Solutions
                </h2>
            </div>
            <p className="opacity-70">
                ProLine leverer komplette IT løsninger for bedrifter, kjeder &
                grupperinger. CRM, finans, datakasser, betalingsløsninger,
                webshop og mobile løsninger.
            </p>
            <div className="flex flex-col gap-8 sm:flex-row ">
                <ButtonPrimary text="Kontakt oss" />
                <ButtonGhost text="Les mer" />
            </div>
        </div>
    );
}
