import Typography from "../styles/Typography";

const EducationalContainer = () => {
    return (
        <section className="max-w-7xl mx-auto bg-[#131313] flex  flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex flex-col">
                <Typography tag="h2" textColor="light" responsiveFontSize="text-[30px] sm:text-['30px']">
                    Didática de verdade
                </Typography>
                <Typography tag="p" textColor="light" responsiveFontSize="text-[18px]">Garantindo seu aprendizado</Typography>
            </div>

        </section>
    );
}

export default EducationalContainer;