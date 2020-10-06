import React from 'react';
import HomeDetails from './HomeDetails';


const Information= [
{
    name:"Animal shelter",
    img:"animalShelter.png"
},
{
    name:"Baby sitter",
    img:"babySit.png"
},
{
    name:" Bird house",
    img:"birdHouse.png"
},
{
    name:" child Support",
    img:"childSupport.png"
},
{
    name:"clean Water",
    img:"cleanWater.png"
},
{
    name:" Clean Park",
    img:"clearnPark.png"
},
{
    name:" Cloth Swap",
    img:"clothSwap.png"
},
{
    name:"Drive safety",
    img:"driveSafety.png"
},
{
    name:" extra volunteer",
    img:"extraVolunteer.png"
},
{
    name:"food charity",
    img:"foodCharity.png"
},
{
    name:"good education",
    img:"goodEducation.png"
},
{
    name:"IT help",
    img:"ITHelp.png"
},
{
    name:"library books",
    img:"libraryBooks.png"
},
{
    name:"music lesson",
    img:"musicLessons.png"
},
{
    name:"new books",
    img:"newBooks.png"
},
{
    name:"refuse shelter",
    img:"refuseShelter.png"
},
{
    name:"river clean",
    img:"riverClean.png"
},
{
    name:" school suffiles",
    img:"schoolSuffiles.png"
},
{
    name:" group study",
    img:"studyGroup.png"
},
{
    name:" stuffed animals",
    img:"stuffedAnimals.png"
},
{
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