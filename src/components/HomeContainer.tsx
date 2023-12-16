import TailwindButton from "../styles/button";
import CardList from "./CardsList";
import HomeCarrousel from "./HomeCarrousel";

const HomeContainer = () => {
    return (
        <main className="max-w-7xl mx-auto  px-4 py-4 sm:px-6 lg:px-8 bg-[#131313]">
            <div className="flex ">
                <div className="flex flex-1 flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[#F2F4F8] text-custom-mobile sm:text-custom-tablet lg:text-custom-desktop leading-tight">
                            Investir de forma mais inteligente passa por aqui.
                        </h1>
                        <p className="text-[#E2E5EB] text-base">Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.</p>
                        <TailwindButton buttonStyle={"greenRounded"} buttonSize="medium">Comprar Agora <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 4L12.9 5.1L18.9 11.2H2V12.8H18.9L12.9 18.9L14 20L22 12L14 4Z" fill="#00F700" />
                        </svg></TailwindButton>
                    </div>
                    <HomeCarrousel />
                </div>
                <div className="hidden sm:flex flex-1 items-center justify-center">
                    <CardList />
                </div>
            </div>
        </main>
    );
}

export default HomeContainer;