
const Bookmarks = ({markRead,cre,prices}) => {
    // console.log(markRead);
    let remain = 100 - cre;
    

    return (
        <div >
            <div className="bg-white p-4 rounded-xl">
                <div className="mt-4 font-bold text-1xl mb-4 text-blue-700">Credit Our Remaianing : {remain} hr</div>
                <hr className="mb-4 mt-4" />
                <h1 className="bont-bold text-xl text-center text-purple-600">Course Name</h1>
            {
                markRead.map((m,idx) => <li key={idx}>{m}</li> )
            }
            <hr className="mb-4 mt-4" />
            <h3 className="text-xl font-bold mb-">
                Total Credit hour : {cre}
            </h3>
            <hr className="mb-4 mt-4" />
            <h3 className="text-xl font-medium-mb-4">Total Price : {prices} USD </h3>
            </div>
        </div>
    );
};

export default Bookmarks;