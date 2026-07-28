import { useState } from "react";


function Profile() {


  const [editMode, setEditMode] = useState(false);



  const [profile, setProfile] = useState({

    name: "Shivani Patel",
    email: "shivani@example.com",
    department: "IT Support",
    role: "Employee",
    location: "India",
    designation: "Software Developer"

  });




  const handleChange = (e)=>{

    setProfile({

      ...profile,
      [e.target.name]: e.target.value

    });

  };




  const handleSave = ()=>{

    setEditMode(false);

    alert("✅ Profile Updated Successfully!");

  };




  return (

    <div className="p-4">


      <h2 className="mb-4">
        User Profile
      </h2>




      <div className="card shadow-sm p-4">



        <div className="text-center">


          <div
            className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
            style={{
              width:"100px",
              height:"100px",
              fontSize:"40px"
            }}
          >

            SP

          </div>




          {
            editMode ?

            <input
              className="form-control mt-3"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />

            :

            <h3 className="mt-3">
              {profile.name}
            </h3>

          }



          {
            editMode ?

            <input
              className="form-control mt-2"
              name="designation"
              value={profile.designation}
              onChange={handleChange}
            />

            :

            <p>
              {profile.designation}
            </p>

          }


        </div>




        <hr />



        <div className="row">



          <div className="col-md-6 mb-3">

            <h6>Email</h6>


            {
              editMode ?

              <input
                className="form-control"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />

              :

              <p>{profile.email}</p>

            }


          </div>





          <div className="col-md-6 mb-3">

            <h6>Department</h6>


            {
              editMode ?

              <input
                className="form-control"
                name="department"
                value={profile.department}
                onChange={handleChange}
              />

              :

              <p>{profile.department}</p>

            }


          </div>







          <div className="col-md-6 mb-3">

            <h6>Role</h6>


            {
              editMode ?

              <input
                className="form-control"
                name="role"
                value={profile.role}
                onChange={handleChange}
              />

              :

              <p>{profile.role}</p>

            }


          </div>






          <div className="col-md-6 mb-3">

            <h6>Location</h6>


            {
              editMode ?

              <input
                className="form-control"
                name="location"
                value={profile.location}
                onChange={handleChange}
              />

              :

              <p>{profile.location}</p>

            }


          </div>



        </div>






        {

        editMode ?

        <button
          className="btn btn-success mt-3"
          onClick={handleSave}
        >

          Save Changes

        </button>


        :

        <button
          className="btn btn-primary mt-3"
          onClick={()=>setEditMode(true)}
        >

          Edit Profile

        </button>


        }



      </div>


    </div>

  );

}


export default Profile;