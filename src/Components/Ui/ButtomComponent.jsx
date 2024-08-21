export default function ButtonComponent({ children, textOnly, className, ...props }) {
    const cssClasses = textOnly ? 'text-button' : 'button';
    
    const combinedClasses = `${cssClasses} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
