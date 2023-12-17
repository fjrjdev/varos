import SelectContainer from "./SelectContainer";

const ContentsContainer = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 bg-[#131313] flex flex-col gap-10">
            <div className="max-w-xl flex flex-col gap-4">
                <h2 className="text-[#F2F4F8] text-[24px] sm:text-[38px] leading-tight text-center sm:text-start">Simplifique seus investimentos e alcance seus objetivos </h2>
                <p className="text-[#B0B7BE] text-base text-center sm:text-start">Conteúdos preparados para trazer mais segurança, independente do seu nível.</p>
            </div>
            <SelectContainer />
        </section>
    );
}

export default ContentsContainer;