import React from 'react';
import HomeDetails from './HomeDetails';


const Information= [
{   id: 1,
    name:"Animal shelter",
    img:"animalShelter.png"
},
{   id:2,
    name:"Baby sitter",
    img:"babySit.png"
},
{   id:3,
    name:" Bird house",
    img:"birdHouse.png"
},
{   id:4,
    name:" child Support",
    img:"childSupport.png"
},
{   id:5,
    name:"clean Water",
    img:"cleanWater.png"
},
{   id:6,
    name:" Clean Park",
    img:"clearnPark.png"
},
{   id:7,
    name:" Cloth Swap",
    img:"clothSwap.png"
},
{    id:8,
    name:"Drive safety",
    img:"driveSafety.png"
},
{    id:9,
    name:" extra volunteer",
    img:"extraVolunteer.png"
},
{    id:11,
    name:"food charity",
    img:"foodCharity.png"
},
{  id:12,
    name:"good education",
    img:"goodEducation.png"
},
{   id:13,
    name:"IT help",
    img:"ITHelp.png"
},
{  id:14,
    name:"library books",
    img:"libraryBooks.png"
},
{   id:15,
    name:"music lesson",
    img:"musicLessons.png"
},
{   id:16,
    name:"new books",
    img:"newBooks.png"
},
{    id:17,
    name:"refuse shelter",
    img:"refuseShelter.png"
},
{    id:18,
    name:"river clean",
    img:"riverClean.png"
},
{   id:19,
    name:" school suffiles",
    img:"schoolSuffiles.png"
},
{  id:20,
    name:" group study",
    img:"studyGroup.png"
},
{   id:22,
    name:" stuffed animals",
    img:"stuffedAnimals.png"
},
{    id:23,
    name:"vote register",
    img:"voteRegister.png"
},

]

const Home = () => {
   
    return (
        <div className="row">
           {
            Information.map(x=> <HomeDetails item={x}></HomeDetails> )
            }
        </div>
    );
};

export default Home;