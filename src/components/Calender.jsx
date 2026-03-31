function Calender () {
    
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <p>Current Year: {currentYear}</p>
        </div>
    )

}

export default Calender