export interface iBaseTypographyProps {
    className?: string;
    children?: React.ReactNode;
    tag: 'h2' | 'p';
    fontWeight?: number;
    fontColor?: string;
    responsiveFontSize?: string;
    textColor?: 'light' | 'dark';
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
        default:
            textClass = '';
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