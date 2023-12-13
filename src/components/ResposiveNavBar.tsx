import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import TailwindButton from '../styles/button';
import ProductListNavBar from './ProductListNavBar';


export interface Subitem {
    name: string;
    text?: string;
    href?: string;
}


interface MobileNavigationItem {
    name: string;
    href?: string;
    component?: React.ReactNode;
    subitems?: Subitem[]; // Subitem, não MobileNavigationItem
    text?: string;
}

function ResponsiveNavBar() {
    const navigation = [
        { name: 'Produtos', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Conteúdos', href: '#' },
        { name: 'Quem Somos', href: '#' },
        { name: 'Assinar Agora', href: '#', icon: ShoppingCartIcon },
        { name: 'Entrar', href: '#', icon: UserIcon },
    ];
    const mobileNavigation: MobileNavigationItem[] = [
        {
            name: 'ENTRAR', component: (
                <TailwindButton buttonStyle='outlined' buttonSize='large' >
                    <>
                        <UserIcon className=" text-green-500 h-5 w-5 mr-2" />
                        ENTRAR
                    </>
                </TailwindButton>
            )
        },
        { name: 'ASSINAR AGORA ', component: (<TailwindButton buttonStyle='green' buttonSize='large'>ASSINAR AGORA</TailwindButton>) },
        {
            name: 'Produtos',
            subitems: [
                { name: 'Carteiras', href: '#', text: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido." },
                { name: 'Cursos', href: '#', text: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido." },
                { name: 'Consultoria', href: '#', text: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido." },
            ],
        },
        { name: 'Blog', href: '#' },
        { name: 'Quem Somos', href: '#' },
        { name: 'Conteúdos', href: '#' },
    ];
    const splitNavigation = () => {
        {/* Split desktop navigation items */ }
        const leftGroup = navigation.slice(0, 4);
        const rightGroup = navigation.slice(4);
        return [leftGroup, rightGroup];
    };

    const [leftNavigation, rightNavigation] = splitNavigation();
    return (
        <Disclosure as="nav" className="bg-[#131313]">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300 ease-in-out">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-6">
                                {/*Logo*/}
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="19" viewBox="0 0 101 19" fill="none">
                                        <g clipPath="url(#clip0_1_1861)">
                                            <path d="M8.35624 18.4703L0 1.39767H4.68302L10.3623 13.9029L16.3736 1.39767H20.6026L12.2395 18.4703H8.36301H8.35624Z" fill="#FAFAFA" />
                                            <path d="M18.5627 18.4703L26.9121 1.39767H30.7887L39.1517 18.4703H34.8414L28.8572 5.89594L22.8662 18.4703H18.5559H18.5627Z" fill="#FAFAFA" />
                                            <path d="M42.2625 1.39767H52.4079C53.6142 1.39767 54.6511 1.64681 55.5389 2.14508C56.4132 2.63643 57.0909 3.32155 57.5788 4.19352C58.06 5.06549 58.2972 6.05511 58.2972 7.1693C58.2972 8.34577 58.0193 9.38383 57.4636 10.2904C56.8943 11.197 56.1963 11.8475 55.3559 12.242L59.1105 18.4703H54.4884L51.249 12.9202H46.3016V18.4703H42.2692V9.26619H52.4146C52.9568 9.26619 53.4041 9.08626 53.7497 8.71947C54.0886 8.35269 54.2648 7.83366 54.2648 7.16238C54.2648 6.4911 54.0818 5.96515 53.7091 5.59837C53.3295 5.23158 52.8958 5.05165 52.4146 5.05165H42.2692V1.39767H42.2625Z" fill="#FAFAFA" />
                                            <path d="M66.4637 17.7645C64.932 16.9894 63.6986 15.9167 62.7769 14.5603C61.862 13.197 61.4011 11.6607 61.4011 9.93748C61.4011 8.2143 61.862 6.67105 62.7769 5.31464C63.6918 3.95132 64.9252 2.88558 66.4637 2.11049C68.0089 1.32156 69.7031 0.934021 71.5669 0.934021C73.4306 0.934021 75.1384 1.32156 76.6836 2.11049C78.2153 2.88558 79.4487 3.95132 80.3704 5.31464C81.2853 6.67105 81.7462 8.20738 81.7462 9.93748C81.7462 11.6676 81.2853 13.197 80.3704 14.5603C79.4555 15.9167 78.222 16.9894 76.6836 17.7645C75.1384 18.5396 73.4441 18.934 71.5669 18.934C69.6896 18.934 68.0089 18.5465 66.4637 17.7645ZM74.603 14.3942C75.5315 13.9928 76.277 13.4184 76.853 12.671C77.4156 11.9167 77.707 11.0032 77.707 9.93748C77.707 8.87174 77.4156 7.95132 76.853 7.20392C76.277 6.44959 75.5247 5.86828 74.603 5.47381C73.6678 5.07243 72.658 4.87174 71.5669 4.87174C70.4757 4.87174 69.4795 5.07243 68.5443 5.48073C67.609 5.88212 66.8567 6.45651 66.2875 7.21084C65.725 7.96516 65.4335 8.87174 65.4335 9.93056C65.4335 10.9894 65.725 11.8821 66.2875 12.6434C66.85 13.4046 67.6022 13.979 68.5443 14.3873C69.4795 14.7887 70.4893 14.9894 71.5669 14.9894C72.6444 14.9894 73.6678 14.7887 74.603 14.3873V14.3942Z" fill="#FAFAFA" />
                                            <path d="M89.2213 18.4704C88.1641 18.1659 87.2221 17.7783 86.4224 17.2801C85.6091 16.7887 84.9179 16.2005 84.3418 15.5153L86.8765 12.6711C87.2492 13.0932 87.6965 13.4807 88.2251 13.8614C88.7537 14.242 89.3908 14.5672 90.1363 14.851C90.875 15.1347 91.7221 15.28 92.6574 15.28C93.5452 15.28 94.3313 15.1416 95.0362 14.8717C95.7274 14.6088 96.2696 14.3043 96.6491 13.9444C97.0286 13.5845 97.2252 13.28 97.2252 13.0171C97.2252 12.7126 97.0625 12.4842 96.744 12.325C96.4255 12.1659 95.9646 12.0551 95.3547 11.979C94.7447 11.9029 94.067 11.8406 93.308 11.7991C92.576 11.7576 91.8238 11.7022 91.058 11.6191C90.2854 11.5361 89.5331 11.3977 88.8012 11.2108C88.0828 11.024 87.4254 10.7403 86.8222 10.3596C86.2191 9.97901 85.7514 9.47382 85.399 8.83714C85.0398 8.20739 84.8636 7.40462 84.8636 6.44268C84.8636 5.48074 85.1822 4.58109 85.8192 3.74372C86.4563 2.90635 87.3509 2.22815 88.5165 1.71604C89.689 1.20392 91.0715 0.940948 92.6709 0.940948C93.8976 0.940948 94.9955 1.07936 95.9511 1.34925C96.9067 1.63299 97.7538 1.99285 98.4654 2.44268C99.1838 2.88559 99.8344 3.4323 100.431 4.06898L97.8622 6.69873C97.3878 6.25583 96.927 5.90289 96.4729 5.60531C96.0324 5.31465 95.5173 5.07244 94.9209 4.89251C94.3246 4.70565 93.6062 4.62261 92.7387 4.62261C91.6476 4.62261 90.6717 4.8233 89.8245 5.23161C88.9706 5.63991 88.5504 6.04821 88.5504 6.4496C88.5504 6.80946 88.7334 7.0932 89.0926 7.28697C89.4653 7.48766 89.9872 7.64683 90.6581 7.75064C91.3291 7.85444 92.0745 7.93749 92.9014 8.01361C93.8095 8.09666 94.7312 8.20046 95.6596 8.35271C96.5949 8.49804 97.4624 8.73334 98.2621 9.0586C99.0618 9.38386 99.726 9.86828 100.241 10.498C100.756 11.1278 101 11.9721 101 13.0309C101 14.0897 100.668 15.0378 100.011 15.9444C99.3397 16.851 98.3976 17.5707 97.1506 18.1313C95.9036 18.678 94.4127 18.9479 92.6777 18.9479C91.4307 18.9479 90.2786 18.7887 89.2213 18.4842V18.4704Z" fill="#FAFAFA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1861">
                                                <rect width="101" height="18" fill="white" transform="translate(0 0.934021)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                {/*Left Desktop Items*/}
                                <div className="hidden md:flex items-baseline space-x-4">
                                    {leftNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-gray-300 hover:text-white px-1 py-2 rounded-md text-sm font-medium flex items-center"
                                        >
                                            {item.icon && <item.icon className="h-5 w-5 mr-2" />}
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/*Right Desktop Items*/}
                            <div className="hidden md:flex items-baseline space-x-4">
                                {rightNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:text-white px-1 py-2 rounded-md text-sm font-medium flex items-center"
                                    >
                                        {item.icon && <item.icon className="h-5 w-5 mr-2  text-green-500" />}
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/* Mobile menu button */}
                            <div className="-mr-2 flex md:hidden">

                                <Disclosure.Button className="bg-[#131313] p-2 inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none transition-transform duration-300 ease-in-out transform">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Transition
                        show={open}
                        enter="transition-opacity duration-300 ease-in-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300 ease-in-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Disclosure.Panel className="md:hidden">
                            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                                {mobileNavigation.map((item) => (
                                    <div key={item.name} className='py-2'>
                                        {item.component ? (
                                            item.component
                                        ) : (
                                            <>
                                                {item.name !== 'Produtos' && (
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-300 hover:text-white block px-3 py-2  text-base font-medium border-b"
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                                {/* Check if the current item is 'Produtos' and render ProductListNavBar */}
                                                {item.name === 'Produtos' && item.subitems && (
                                                    <ProductListNavBar name={item.name} subitems={item.subitems} />
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );

}

export default ResponsiveNavBar;