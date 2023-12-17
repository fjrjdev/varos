import React from "react";
import { Subitem } from "./ResponsiveNavBar";
import Typography from "../styles/Typography";

interface ProductListNavBarProps {
    name: string;
    subitems: Subitem[];
}

const ProductListNavBar: React.FC<ProductListNavBarProps> = ({ name, subitems }) => {
    return (
        <div className="bg-[#222729] px-4 py-1 rounded-lg">
            <div className="py-4 border-b mb-4 ">
                <Typography tag="h2" className="text-[#FAFAFA] text-base leading-normal" >{name}</Typography>
            </div>
            <div className="cursor-pointer">
                {subitems.map((subitem) => (
                    <div key={subitem.name} className="mb-4">
                        <div className="flex justify-between">
                            <Typography tag="h3" className="text-[#FAFAFA] text-base leading-normal" >{subitem.name}</Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M11.8352 2.24L10.9147 3.04L15.8856 7.44H1.89331V8.56H15.8856L10.9147 12.96L11.8352 13.76L18.4632 8L11.8352 2.24Z" fill="#FAFAFA" />
                            </svg>
                        </div >
                        <div>
                            <Typography tag="p" className="text-[#B0B7BE] text-xs">
                                {subitem.text}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div >);
}

export default ProductListNavBar;