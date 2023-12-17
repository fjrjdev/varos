import Typography from "../styles/Typography";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
    return (
        <section className="max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 bg-[#131313] flex flex-col sm:flex-row sm:justify-between gap-10 items-center sm:items-start">

            <div className="flex flex-1 flex-col gap-2 text-center sm:text-start ">
                <Typography tag="h2" textColor="light" responsiveFontSize="text-[30px] sm:text-[38px]">
                    Cadastre-se para receber mais informações.
                </Typography>
                <Typography tag="p" textColor="light" responsiveFontSize="text-[18px]">Fique ligado no que tem de melhor no Mercado Financeiro.</Typography>
            </div>
            <div className="flex-1 w-full"><ContactForm /></div>

        </section>
    );
}

export default ContactContainer;