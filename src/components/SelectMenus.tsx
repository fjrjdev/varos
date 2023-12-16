import { Disclosure } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import { Option } from './SelectContainer';
import { SelectContext } from '../contexts/SelectContext/SelectContext';


interface SubMenuProps {
    isOpen: boolean;
    onClick: () => void;
    menuName: string;
}
const SubMenu: React.FC<SubMenuProps> = ({ isOpen, onClick, menuName }) => (
    <Disclosure.Button
        onClick={onClick}
        className={isOpen ? "w-full text-white bg-[#222729] px-2 py-3 h-10 font-inter font-semibold flex  items-center border-2 transition duration-300  border-[#222729] rounded-[48px] justify-center gap-4" : "text-white px-5 py-3 h-10 font-inter font-semibold flex items-center border-2 transition duration-300 border-[#222729] rounded-[48px] justify-center gap-4 w-full sm:w-[266px] "}
    >
        {menuName}
        {
            isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M13.25 6.875L9 12.1875L4.75 6.875L13.25 6.875Z" fill="#F2F4F8" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path d="M6.375 4.75L11.6875 9L6.375 13.25L6.375 4.75Z" fill="#F2F4F8" />
                </svg>
            )
        }
    </Disclosure.Button >
);

interface SubMenuOptionsProps {
    options: Option[];
}
const SubMenuOptions: React.FC<SubMenuOptionsProps> = ({ options }) => {
    const { selectedOption, onSelectOption } = useContext(SelectContext);
    return (
        <div className='flex flex-col gap-6'>
            {options.map((option) => (
                <div key={option.name} className="flex items-center">
                    <input
                        type="radio"
                        id={`option-${option.id}`}
                        name="options"
                        className="appearance-none"
                        onChange={() => onSelectOption(option)}
                    />
                    <label
                        htmlFor={`option-${option.id}`}
                        className={
                            `flex items-center 
                            text-white 
                            whitespace-nowrap
                            cursor-pointer
                            rounded-[32px]
                            p-4 
                            ${selectedOption?.name == option.name ? 'bg-[#22272980] ' : 'bg-[#131516]'}`
                        }
                    >
                        <span className="mr-2">{option.icon}</span>
                        <span>{option.name}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}
interface MenuProps {
    menuName: string;
    options: Option[];
}
const Menu: React.FC<MenuProps> = ({ menuName, options }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Disclosure>
            {({ open }) => (
                <div className='flex flex-col items-center gap-4'>
                    <SubMenu isOpen={open} onClick={() => setIsOpen(!isOpen)} menuName={menuName} />
                    <Disclosure.Panel className="bg-[#131516] p-8 rounded-[48px] border border-[#222729] w-full">
                        <SubMenuOptions
                            options={options}
                        />
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>)
}
interface SelectMenusProps {
    options: { menu: string; options: Option[] }[];
}

const SelectMenus: React.FC<SelectMenusProps> = ({
    options,
}) => {
    return (
        <div className='flex flex-col gap-4 '>
            {options.map(({ menu, options }) => (
                <Menu
                    key={menu}
                    menuName={menu}
                    options={options}
                />
            ))}
        </div>
    );
}

export default SelectMenus;
