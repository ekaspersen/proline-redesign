export default function Navigation() {
    return (
        <div className="px-4 lg:px-16 py-8 bg-clrDarkGray sticky top-0 z-40 flex items-center justify-between">
            <img src="./logo.png" className=" h-12" alt="" />
            <div className="flex w-14 flex-col gap-2">
                <div className="w-full h-1 bg-clrPrimary"></div>
                <div className="w-full h-1 bg-clrPrimary"></div>
                <div className="w-3/4 h-1 bg-clrPrimary"></div>
            </div>
        </div>
    );
}
