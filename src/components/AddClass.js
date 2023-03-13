const AddClass = () => {

    return (
        <>
        <div className="container">
            <form>
                <label>Enter Class Name:</label><br />
                <input type="text" id="classid" className="form-control" placeholder="Enter Class Name" required /><br />
                <label>Enter Class Description:</label><br />
                <input type="text" id="classdescriptionid" className="form-control" placeholder="Enter Class Description" required /><br />
                <label>Enter Class Notes:</label><br />
                <input type="text" id="classnotesid" className="form-control" placeholder="Enter Class Notes" required /><br />
                <center><button type="button" className="btn btn-success">Submit</button></center>
            </form>
        </div>
        </>
    );
}

export default AddClass