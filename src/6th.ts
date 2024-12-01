{
    
    interface Profile {
        name:string,
        age:number,
        email:string
    }
  const updateProfile=(profile: Profile, updates: Partial<Profile>):Profile=>({
...profile,
...updates
  })
    const myProfile :Profile={
        name:"Alice",
        age:25,
        email:"alice@example.com"
    }
    console.log(updateProfile(myProfile, { age: 26 }));
   
}