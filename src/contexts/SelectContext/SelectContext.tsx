import { createContext, useState, ReactNode } from 'react';
import { Option } from '../../components/SelectContainer';
interface SelectContextProps {
    selectedOption: Option | null;
    onSelectOption: (option: Option) => void;
    onCloseMenu: () => void;
}

export const SelectContext = createContext({} as SelectContextProps);

interface ISelectProviderProps {
    children: ReactNode
}
export const SelectProvider = ({ children }: ISelectProviderProps) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>({
        id: 1, name: 'Carteira Seleção', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M22 0H0V4.71127H17.4539C18.5483 2.86139 20.1068 1.25226 22 0Z" fill="#4D5358" />
            <path d="M15.9394 8.65177H0V13.363H15.9394C15.7879 12.5965 15.7049 11.8109 15.7049 11.0063C15.7049 10.2018 15.7879 9.41622 15.9394 8.64966V8.65177Z" fill="#19C819" />
            <path d="M17.4466 17.2887H0V22H21.9805C20.0922 20.7456 18.5385 19.1365 17.4466 17.2887Z" fill="#B0B7BE" />
        </svg>
    });
    const onSelectOption = (option: Option) => {
        setSelectedOption(option);
    };

    const onCloseMenu = () => {
        setSelectedOption(null);
    };

    return (
        <SelectContext.Provider value={{ selectedOption, onSelectOption, onCloseMenu }}>
            {children}
        </SelectContext.Provider>
    );
};