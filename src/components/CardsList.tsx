import React from "react";
interface ICard {
    name: string;
    icon: React.ReactNode
}
const Card = ({ name, icon }: ICard) => {
    return (
        <div className="inline-flex px-8 py-2 md:px-4 items-center gap-4 border border-[#4D5358] rounded-lg bg-[#131313] shadow-md-right">
            <div className="border px-4 py-3 rounded-lg border-[#4D5358]">{icon}</div>
            <span className="text-white z-10">{name}</span>
        </div>
    );
}
const CardList = () => {
    const cardsData = [
        {
            name: "Carteira FATOR", icon: <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M22 11.3813C22 13.3476 21.5363 15.1414 20.615 16.7563C19.7028 18.3617 18.444 19.641 16.8614 20.5909C15.2726 21.5329 13.4863 22 11.4962 22C9.50612 22 7.75928 21.5329 6.16904 20.5909C4.58792 19.641 3.32911 18.3617 2.3926 16.7563C1.46369 15.1414 1 13.3476 1 11.3813C1 9.38955 1.46369 7.58783 2.3926 5.97293C3.32911 4.36754 4.58792 3.08828 6.16904 2.16368C7.08123 1.63171 8.04966 1.2454 9.08043 1.02533V5.31114C6.99609 6.25317 5.53964 8.42536 5.53964 10.9395C5.53964 14.3324 8.18345 17.0841 11.4399 17.0841C14.698 17.0841 17.3403 14.3308 17.3403 10.9395C17.3403 8.42378 15.8853 6.25317 13.7995 5.31114V1C14.8698 1.22165 15.8762 1.60638 16.8203 2.16368C18.409 3.08987 19.6678 4.36754 20.5968 5.97293C21.5257 7.58625 21.997 9.38955 21.997 11.3813H22Z" fill="url(#paint0_linear_1_732)" stroke="#00F0C9" strokeWidth="0.5" strokeMiterlimit="10" />
                <path d="M9.08057 5.28581C9.08057 5.28581 11.4416 4.52903 13.8011 5.28581V10.6086H9.08057V5.28581Z" fill="url(#paint1_linear_1_732)" stroke="#00F0C9" strokeWidth="0.5" strokeMiterlimit="10" />
                <defs>
                    <linearGradient id="paint0_linear_1_732" x1="1" y1="12.9583" x2="22" y2="12.9583" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#222729" />
                        <stop offset="1" stopColor="#1CB799" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_732" x1="13.8334" y1="6.54167" x2="7.70839" y2="6.54167" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#12D8B2" />
                        <stop offset="1" stopColor="#131516" />
                    </linearGradient>
                </defs>
            </svg>
        },
        {
            name: "Carteira de Dividendos", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <g clipPath="url(#clip0_1_739)">
                    <path d="M6.719 4.41504H2.73059V19.4743H6.719V4.41504Z" fill="#19C819" />
                    <path d="M14.0416 1.41907H10.0532V19.4744H14.0416V1.41907Z" fill="#19C819" />
                    <path d="M21.3516 0H17.3632V19.4743H21.3516V0Z" fill="#19C819" />
                    <path d="M0 19.4744H24" stroke="#19C819" strokeWidth="2" strokeMiterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_1_739">
                        <rect width="24" height="19.7904" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        },
        {
            name: "Código.py", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                <g clipPath="url(#clip0_240_403)">
                    <path d="M10.972 0V5.4812C10.3387 5.37032 9.68431 5.32426 8.99647 5.32426C8.2752 5.32426 7.58736 5.37714 6.9259 5.49485V0H10.972Z" fill="#00F0C9" />
                    <path d="M18 13.7601C18 15.3296 17.6025 16.7626 16.8126 18.0506C16.0298 19.3318 14.9514 20.3519 13.595 21.1111C12.2334 21.8634 10.7012 22.2353 8.99477 22.2353C7.28836 22.2353 5.79129 21.8617 4.42968 21.1111C3.07335 20.3519 1.99497 19.3318 1.19278 18.0506C0.397627 16.7626 -0.00170898 15.3296 -0.00170898 13.7601C-0.00170898 12.1907 0.395867 10.7321 1.19278 9.4441C1.99497 8.16294 3.07511 7.14278 4.42968 6.4024C5.21252 5.97762 6.0411 5.67055 6.92421 5.49313V8.91355C5.13688 9.66587 3.88961 11.3991 3.88961 13.407C3.88961 16.1143 6.15544 18.3116 8.94727 18.3116C11.7391 18.3116 14.0049 16.1143 14.0049 13.407C14.0049 11.3991 12.7577 9.66587 10.9703 8.91355V5.47437C11.8869 5.65178 12.7506 5.95885 13.5599 6.4024C14.9215 7.14107 16.0016 8.16123 16.7968 9.4441C17.5919 10.7321 17.9965 12.1719 17.9965 13.7601H18Z" fill="#00F0C9" />
                </g>
                <defs>
                    <clipPath id="clip0_240_403">
                        <rect width="18" height="22.2353" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        },
    ];

    return (
        <div className="flex flex-col gap-14 max-w-[300px]">
            {cardsData.map((card, index) => (
                <div key={card.name} className={`${index === 1 ? 'ml-4' : ''}`}>
                    <Card name={card.name} icon={card.icon} />
                </div>
            ))}
        </div>
    );
}

export default CardList;