import Typography from "../styles/Typography";
import EducationalCarrousel from "./EducationalCarrousel";

const EducationalContainer = () => {
    return (
        <section className="max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 bg-[#131313] block sm:flex  sm:justify-between">
            <div className="flex flex-col gap-20 items-center sm:items-start">
                <div className="flex flex-col gap-2 text-center sm:text-start">
                    <Typography tag="h2" textColor="light" responsiveFontSize="text-[30px] sm:text-[38px]">
                        Didática de verdade
                    </Typography>
                    <Typography tag="p" textColor="light" responsiveFontSize="text-[18px]">Garantindo seu aprendizado</Typography>
                </div>
                <EducationalCarrousel />
            </div>
            <div className="flex flex-col gap-10">
                <img src="/Image-2.svg" alt="Imagem Varos" width={550} height={550} />
                <div style={
                    {
                        border: "1px solid #4D5358",
                        borderRadius: "24px",
                        borderImageSlice: 1,
                        clipPath: 'polygon(0px 0px, 94% 2px, 96% 99%, 15px 100%, 0px 100px)'
                    }
                } className="flex justify-around p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Typography tag="p" textColor="greyDarker" responsiveFontSize="text-[14px]">+ 1000</Typography>
                        <Typography tag="p" textColor="grey" responsiveFontSize="text-[14px]">Alunos</Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <Typography tag="p" textColor="green" responsiveFontSize="text-[14px]">4,8/5</Typography>
                        <Typography tag="p" textColor="grey" responsiveFontSize="text-[14px]">Nota média</Typography>
                        <Typography tag="p" textColor="grey" responsiveFontSize="text-[14px]">geral das aulas</Typography>
                    </div>
                    <div className="flex flex-col items-center  text-center">
                        <Typography tag="p" textColor="greyDarker" responsiveFontSize="text-[14px]">10k +</Typography>
                        <Typography tag="p" textColor="grey" responsiveFontSize="text-[14px]">Comunidade</Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationalContainer;