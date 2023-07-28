type LayoutProps = {
    children?: any
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={`w-full h-full`}>
            {children}
        </div>
    )
}