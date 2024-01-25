function LandingSpesialiteter() {
    return (
        <section className="lg:mx-16 mt-8 flex flex-col">
            <div className=" flex flex-col w-full items-center  gap-8 bg-clrWhite text-clrDark py-16 border-roundedTop32">
                <h2 className="font-bold text-5xl">Våre spesialiteter</h2>
                <div className="flex flex-col gap-4"></div>
                <p className="text-lg max-w-full">
                    Våre produkter er mobile og fleksible, og løser daglige
                    utfordringer innen butikk, restaurant, kontor, logistikk og
                    lager.
                </p>
                <p className="text-lg font-bold max-w-full">
                    Hvilke funksjoner har din arbeidsplass behov for? Vi finner
                    de rette produktene til dere.
                </p>
            </div>
            <div className="flex bg-clrPrimary">
                <div className="flex-1"></div>
            </div>
        </section>
    );
}

export default LandingSpesialiteter;
