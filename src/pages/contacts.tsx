import React from "react";

function Contatti() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-5xl text-pink-600 font-bold my-5">
                Contatti {process.env.NEXT_PUBLIC_CUSTOM_KEY}
            </h1>
        </div>
    );
}

export default Contatti;