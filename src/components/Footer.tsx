import Typography from "../styles/Typography";

const Footer = () => {
    return (<footer className="max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:gap-20 min-h-[500px]">

        <div className="flex flex-col justify-start gap-4 sm:justify-between">
            <div className="flex flex-col gap-4">
                <img width="74px" height="74px" src="/logo.svg" alt="logo varos" />
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="14" viewBox="0 0 74 14" fill="none">
                    <g clipPath="url(#clip0_373_331)">
                        <path d="M6.12239 13.2652L0 0.934937H3.43112L7.59216 9.96646L11.9965 0.934937H15.0949L8.96759 13.2652H6.12736H6.12239Z" fill="#E2E5EB" />
                        <path d="M13.6004 13.2652L19.7178 0.934937H22.558L28.6854 13.2652H25.5274L21.1429 4.18369L16.7534 13.2652H13.5954H13.6004Z" fill="#E2E5EB" />
                        <path d="M30.9645 0.934937H38.3977C39.2816 0.934937 40.0413 1.11487 40.6918 1.47473C41.3323 1.82959 41.8289 2.3244 42.1864 2.95416C42.5389 3.58392 42.7127 4.29864 42.7127 5.10333C42.7127 5.95301 42.5091 6.70272 42.102 7.35747C41.6849 8.01221 41.1734 8.48203 40.5577 8.76692L43.3086 13.2652H39.9221L37.5487 9.25673H33.9239V13.2652H30.9694V6.61775H38.4027C38.7999 6.61775 39.1277 6.4878 39.3809 6.2229C39.6292 5.958 39.7583 5.58315 39.7583 5.09833C39.7583 4.61352 39.6242 4.23367 39.3511 3.96877C39.073 3.70387 38.7553 3.57392 38.4027 3.57392H30.9694V0.934937H30.9645Z" fill="#E2E5EB" />
                        <path d="M48.6961 12.7554C47.5739 12.1956 46.6702 11.4209 45.9949 10.4413C45.3246 9.45669 44.9869 8.34712 44.9869 7.1026C44.9869 5.85808 45.3246 4.7435 45.9949 3.76388C46.6653 2.77926 47.569 2.00956 48.6961 1.44977C49.8282 0.87999 51.0696 0.600098 52.4351 0.600098C53.8006 0.600098 55.0519 0.87999 56.184 1.44977C57.3062 2.00956 58.2099 2.77926 58.8852 3.76388C59.5556 4.7435 59.8932 5.85308 59.8932 7.1026C59.8932 8.35212 59.5556 9.45669 58.8852 10.4413C58.2149 11.4209 57.3112 12.1956 56.184 12.7554C55.0519 13.3152 53.8105 13.6001 52.4351 13.6001C51.0597 13.6001 49.8282 13.3202 48.6961 12.7554ZM54.6596 10.3214C55.3399 10.0315 55.8861 9.61663 56.3082 9.07684C56.7203 8.53205 56.9338 7.8723 56.9338 7.1026C56.9338 6.33289 56.7203 5.66815 56.3082 5.12836C55.8861 4.58357 55.3349 4.16373 54.6596 3.87884C53.9744 3.58895 53.2345 3.444 52.4351 3.444C51.6357 3.444 50.9057 3.58895 50.2205 3.88383C49.5353 4.17372 48.9841 4.58856 48.567 5.13335C48.1549 5.67814 47.9414 6.33289 47.9414 7.0976C47.9414 7.8623 48.1549 8.50706 48.567 9.05685C48.9792 9.60663 49.5303 10.0215 50.2205 10.3164C50.9057 10.6062 51.6456 10.7512 52.4351 10.7512C53.2246 10.7512 53.9744 10.6062 54.6596 10.3164V10.3214Z" fill="#E2E5EB" />
                        <path d="M65.37 13.2652C64.5954 13.0453 63.9052 12.7654 63.3193 12.4056C62.7235 12.0507 62.217 11.6259 61.7949 11.1311L63.652 9.07684C63.9251 9.38173 64.2528 9.66162 64.6401 9.93651C65.0274 10.2114 65.4942 10.4463 66.0404 10.6512C66.5816 10.8562 67.2023 10.9611 67.8875 10.9611C68.538 10.9611 69.114 10.8612 69.6304 10.6662C70.1369 10.4763 70.5341 10.2564 70.8122 9.99649C71.0902 9.73659 71.2342 9.51667 71.2342 9.32675C71.2342 9.10683 71.1151 8.9419 70.8817 8.82694C70.6483 8.71198 70.3107 8.63202 69.8638 8.57704C69.4169 8.52206 68.9203 8.47708 68.3642 8.44709C67.8279 8.4171 67.2768 8.37711 66.7157 8.31714C66.1496 8.25716 65.5985 8.1572 65.0622 8.02225C64.5358 7.8873 64.0542 7.68238 63.6123 7.40749C63.1704 7.13259 62.8277 6.76773 62.5695 6.30791C62.3064 5.85308 62.1773 5.27331 62.1773 4.57857C62.1773 3.88384 62.4106 3.23409 62.8774 2.62932C63.3441 2.02456 63.9996 1.53475 64.8536 1.16489C65.7127 0.79503 66.7256 0.605103 67.8975 0.605103C68.7962 0.605103 69.6006 0.705064 70.3007 0.899989C71.0009 1.10491 71.6215 1.36481 72.1429 1.68969C72.6692 2.00956 73.1459 2.40441 73.5829 2.86423L71.701 4.7635C71.3534 4.44363 71.0158 4.18872 70.6831 3.97381C70.3603 3.76389 69.9829 3.58895 69.546 3.459C69.109 3.32406 68.5827 3.26408 67.9471 3.26408C67.1477 3.26408 66.4326 3.40902 65.812 3.70391C65.1863 3.9988 64.8785 4.29368 64.8785 4.58357C64.8785 4.84347 65.0125 5.04839 65.2757 5.18834C65.5488 5.33328 65.9311 5.44824 66.4227 5.52321C66.9143 5.59818 67.4605 5.65816 68.0663 5.71314C68.7316 5.77311 69.4069 5.84809 70.0872 5.95804C70.7724 6.063 71.408 6.23294 71.9939 6.46785C72.5799 6.70276 73.0665 7.05262 73.4439 7.50745C73.8212 7.96227 74 8.57204 74 9.33674C74 10.1015 73.7567 10.7862 73.275 11.4409C72.7835 12.0957 72.0933 12.6155 71.1796 13.0203C70.266 13.4152 69.1736 13.6101 67.9024 13.6101C66.9888 13.6101 66.1446 13.4951 65.37 13.2752V13.2652Z" fill="#E2E5EB" />
                    </g>
                    <defs>
                        <clipPath id="clip0_373_331">
                            <rect width="74" height="13" fill="white" transform="translate(0 0.600098)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div>
                <Typography tag="p" textColor="light" responsiveFontSize="text-[14px]">VAROS 2023</Typography>
                <Typography tag="p" textColor="light" responsiveFontSize="text-[14px]">Todos os direitos reservados</Typography>
            </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-row py-4 sm:py-0 gap-0 sm:gap-4">
            <div className="w-1/2 sm:w-full flex flex-col gap-4 py-4">
                <Typography tag="h2" responsiveFontSize="text-[20px]" >Cursos</Typography>
                <Typography tag="p" >Valuation do Zero ao Avançado 2.0</Typography>
                <Typography tag="p" >Código.py</Typography>
                <Typography tag="p" >Minicurso Reels</Typography>
                <Typography tag="p" >Enciclopédia de FII</Typography>
            </div>
            <div className="w-1/2 sm:w-full flex flex-col gap-4 py-4">
                <Typography tag="h2" responsiveFontSize="text-[20px]" >Carteiras</Typography>
                <Typography tag="p" >Carteira FATOR</Typography>
                <Typography tag="p" >Carteira Seleção</Typography>
                <Typography tag="p" >Carteira Small Caps</Typography>
                <Typography tag="p" >Carteira Dividendos</Typography>
                <Typography tag="p" >Carteira de FIIs</Typography>
            </div>
            <div className="w-1/2 sm:w-full flex flex-col gap-4 py-4">
                <Typography tag="h2" responsiveFontSize="text-[20px]" >Sobre</Typography>
                <Typography tag="p" >Quem somos</Typography>
            </div>
            <div className="w-1/2 sm:w-full flex flex-col gap-4 py-4">
                <Typography tag="h2" responsiveFontSize="text-[20px]" >Redes Sociais</Typography>
                <Typography tag="p" >Instagram</Typography>
                <Typography tag="p" >Twitter</Typography>
                <Typography tag="p" >Youtube</Typography>
            </div>
        </div>

    </footer>);
}

export default Footer;