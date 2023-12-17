import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typography from '../styles/Typography';


const EducationalCarrousel = () => {
    const text = [
        "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
        "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
        "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe."
    ]
    return (
        <div className='w-full sm:max-w-[180px] md:max-w-[240px] lg:max-w-[360px]'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {text.map((item, index) => (
                    <SwiperSlide key={index} className='bg-[#131516] border border-[#222729] rounded-[24px] p-4 flex items-center justify-center'>
                        <div className="max-w-[300px] max-h-[300px] overflow-hidden flex flex-col gap-4">
                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.67 13.78C2.67 13.78 0.93 11.41 0.93 8.83C0.93 6.22 2.76 2.44 7.02 0.339998L8.46 2.62C6.75 3.58 5.43 4.78 4.83 6.4C5.01 6.22 5.28 6.1 5.88 6.1C8.19 6.1 10.02 7.78 10.02 9.94C10.02 12.1 8.19 13.78 5.67 13.78ZM15.69 13.78C12.69 13.78 10.95 11.41 10.95 8.83C10.95 6.22 12.78 2.44 17.04 0.339998L18.48 2.62C16.77 3.58 15.45 4.78 14.85 6.4C15.03 6.22 15.3 6.1 15.9 6.1C18.21 6.1 20.04 7.78 20.04 9.94C20.04 12.1 18.21 13.78 15.69 13.78Z" fill="#19C819" />
                            </svg>
                            <Typography tag='p' textColor='light' responsiveFontSize="text-[18px]">{item}</Typography>
                            <Typography tag='p' textColor='light' className='italic' responsiveFontSize="text-[14px]">Assinante VAROS</Typography>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </div>

    );
}

export default EducationalCarrousel;