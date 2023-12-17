export interface iBaseTypographyProps {
    className?: string;
    children?: React.ReactNode;
    tag: 'h2' | 'p';
    fontWeight?: number;
    fontColor?: string;
    responsiveFontSize?: string;
    textColor?: 'light' | 'dark' | 'green' | 'grey' | 'greyDarker';
}

const Typography = ({ className, children, tag, fontWeight, fontColor, responsiveFontSize, textColor }: iBaseTypographyProps) => {
    let textClass = '';
    switch (textColor) {
        case 'light':
            textClass = 'text-[#F2F4F8]';
            break;
        case 'dark':
            textClass = 'text-[#B0B7BE]';
            break;
        case 'green':
            textClass = 'text-[#19C819]';
            break;
        case 'grey':
            textClass = 'text-[#FAFAFA]';
            break;
        case 'greyDarker':
            textClass = 'text-[#C6CAD2]';
            break;
        default:
            textClass = 'text-[#F2F4F8]';
    }
    const dynamicClasses = `${textClass}  ${fontWeight ? `font-${fontWeight}` : ''} ${fontColor ? `text-${fontColor}` : ''} ${responsiveFontSize || ''}`;
    const Tag = tag;
    return (
        <Tag className={`${className} ${dynamicClasses}`}>
            {children}
        </Tag>
    );
};

export default Typography;