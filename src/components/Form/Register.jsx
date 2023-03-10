import React from 'react'
import "./Form.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Register() {
    //const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
    //const [error, setError] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const fullName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, fullName);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', (error) => {
                console.log(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then(async (downloadURL) => {
                await updateProfile(res.user,{
                    fullName,
                    photoURL: downloadURL,
                })
            });
        })}
        catch(error){
            console.log(error)
            alert("email already in use, try another")
        }
    }

    return (
      <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-box'>
              <div>
                  <h2>AskApp Chat</h2>
                  <p>Register</p>
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="text" placeholder='Full Name' />
                  {/* {errors.name && <span>The minimum lenght is 10 and fill out this field is necessary</span>} */}
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="email" placeholder='Email' />
                  {/* {errors.email && <span>The minimum lenght is 10 and fill out this field is necessary</span>} */}
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="password" placeholder='Password' />
                  {/* {errors.password && <span>The minimum lenght is 6 and fill out this field is necessary</span>} */}
              </div>
              <div className='form-piece'>                 
              <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <AddPhotoAlternateIcon style={{fontSize: "26px", cursor: "pointer"}}/>
                    <span className='file-description'>Send a picture</span>
                </label>
              </div>
              <div className='form-piece'>
                  <input className='form-button' type="submit" value="Sign up"/>
                  {/* {error && <span>Something went wrong</span>} */}
              </div>
          </div>
      </form>
    )
}
