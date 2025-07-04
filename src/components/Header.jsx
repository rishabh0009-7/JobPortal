import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Briefcase, Heart, PenBox } from 'lucide-react';
import { SignIn } from "@clerk/clerk-react";


const Header = () => {


// if kisi ne search mai signin end point hit kiya to sign n page ajaya isliye 
  const [ShowSignIn , setShowSignIn]= useState(false)

  const[Search, setSearch] = useSearchParams()

  useEffect(()=>{
    if(Search.get("sign-in")){
      setShowSignIn(true)
    }
  }, [Search])



  const handleoverlayClick=(e)=>{

    if(e.target === e.currentTarget){
      setShowSignIn(false)
      setSearch({})

    }

  }
  return (
    <>
      <nav className="py-4 px-8 flex justify-between items-center">
        <Link>
          <img src="./logo.png" alt="logo" className="h-20" />
        </Link>
        {/* 
       <Button variant="outline">Login</Button> */}
<div className='flex gap-8'>

        <SignedOut>
          <Button variant= "outline" onClick ={()=>setShowSignIn(true)}>
           Login
          </Button>
        </SignedOut>
        <SignedIn>

          {/* condn here coz only recruiter can post a job */}
          <Link to = "/post-job">
          <Button variant ="destructive" className="rounded-full">
            <PenBox size = {20} className='mr-2'/>
            Post a Job

          </Button>
          </Link>
         <UserButton
         appearance={{
          elements: {
            avatarBox :"w-10 h-10"
          }
         }}
         
         >

           <UserButton.MenuItems>

            <UserButton.Link
            label='My Jobs'
            labelIcon = {<Briefcase size ={15}/>}
            href='/MyJob'


            
            
            
            
            />
            <UserButton.Link
            label='Saved-Jobs'
            labelIcon ={<Heart sieze = {15}/>}
            href='/SaveJob'
            
            
            />


            <UserButton.Action label='manageAccount'/>

  
           
           </UserButton.MenuItems>



         </UserButton>

       
        </SignedIn>
</div>
      </nav>

      {ShowSignIn&& (
        <div 
        className=' fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50  '
    onClick={handleoverlayClick}>

          <SignIn
          signUpForceRedirectUrl="/onboarding"
          FallbackRedirectUrl="/onboarding"

          
          
          
          />



        </div>
      )}
    </>
  );
}

export default Header