const AddSchool = () => {

    return (
        <>
        <div className="container">
            <form>
                <label>Enter User Name:</label><br />
                <input type="text" id="usernameid" className="form-control" placeholder="Enter User Name" required /><br />
                <label>Enter Password:</label><br />
                <input type="password" id="passwordid" className="form-control" placeholder="Enter your password" required /><br />
                <label>Enter School Name:</label><br />
                <input type="text" id="schoolnameid" className="form-control" placeholder="Enter School Name" required /><br />
                <label>Enter Principal Name:</label><br />
                <input type="text" id="principalnameid" className="form-control" placeholder="Enter Principal Name" required /><br />
                <label>Enter School Address:</label><br />
                <input type="text" id="schooladdressid" className="form-control" placeholder="Enter School Address" required /><br />
                <label>Enter City:</label><br />
                <input type="text" id="cityid" className="form-control" placeholder="Enter City" required /><br />
                <label>Enter State:</label><br />
                <input type="text" id="stateid" className="form-control" placeholder="Enter State" required /><br />
                <label>Enter Country:</label><br />
                <input type="text" id="countryid" className="form-control" placeholder="Enter Country" required /><br />
                <label>Enter Pincode:</label><br />
                <input type="text" id="pincodeid" className="form-control" placeholder="Enter Pincode" required /><br />
                <label>Enter School Email: </label><br />
                <input type="text" id="schoolemailid" className="form-control" placeholder="Enter School Email ID" required /><br />
                <label>Enter School Website:</label><br />
                <input type="text" id="websiteid" className="form-control" placeholder="Enter School Website" required /><br />
                <label>Enter Contact Number:</label><br />
                <input type="text" id="contactid" className="form-control" placeholder="Enter Contact Number" required /><br />
                

                <center><button type="button" className="btn btn-success">Login</button></center>
            </form>
        </div>
        </>
    )

}

export default AddSchool