const AddSubject = () => {

    return (
        <>
        <div className="container">
            <form>
                <label>Enter Subject Name:</label><br />
                <input type="text" id="subjectid" className="form-control" placeholder="Enter Subject Name" required /><br />
                <label>Enter Subject Description:</label><br />
                <input type="text" id="subjectdescriptionid" className="form-control" placeholder="Enter Subject Description" required /><br />
                <center><button type="button" className="btn btn-success">Submit</button></center>
            </form>
        </div>
        </>
    );
}

export default AddSubject