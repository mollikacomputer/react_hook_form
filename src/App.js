import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  // register and handleSubmit got from useForm function
  const {register, handleSubmit} = useForm();
  // only
  const onSubmit = data => {
    console.log(data);
    
  }
  return (
    <div className="container flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="card w-96 bg-base-100 shadow-xl my-16">
        <div className="card-body">
          <h2 class="card-title">Register Now</h2>
          <input {...register("fName")} placeholder="Type here" class="input w-full max-w-xs input-bordered" />
          <input {...register("lName")} placeholder="Type here" class="input w-full max-w-xs input-bordered" />
          <input type="submit" value="Register" class="input w-full max-w-xs btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default App;
