import { useUser } from '@clerk/clerk-react'
import React from 'react'
import {BarLoader} from "react-spinners"
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {


  const {user , isLoaded} = useUser()

  if(!isLoaded){
    return <BarLoader className='mb-4'  width = {"100%"} colors = "#36d7b7"/>
  }

const navigate = useNavigate()


const navigateUser=(currRole)=>{
  if(currRole == "recruiter"? "/PostJob" : "/Job")
}
  const handleRoleSelection = async ()=>{
    await user 
    .update({unsafeMetadata:{role}})
    .then(()=>{
      console.log(`role updated to ${role}`)
      navigateUser(role)

    })
    .catch((err)=>{
      console.log("error updating role ",err)
    })

  }


  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'> I am a ....

      </h2>
      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40 '>
        <Button
        variant = "blue"
        className = "h-36 text-2xl"
        onClick = {()=>handleRoleSelection("Candidate")}>
          Candidate
        </Button>
        <Button 
        variant ="destructive"
        className = "h-36 text-2xl"
        onClick = {()=>handleRoleSelection("Recruiter")}>
          Recruiter
        </Button>
      </div>
      </div>
    
  )
}

export default Onboarding