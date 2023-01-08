function Layout (props){
    return (
        <>

        <Navbar />
        <h1> Hello from Layout</h1>
        {props.children}
        </>

    )
}