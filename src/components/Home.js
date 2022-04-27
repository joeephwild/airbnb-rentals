import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Smallcard from './Smallcard';
import jess from "../assests/jess.jpg";
import nathan from "../assests/nathan.jpg";
import jonathan from "../assests/jonathan.jpg";
import house from "../assests/house.jpg";
import kimberly from "../assests/kimberly.jpg";
import houseblock from "../assests/houseblock.jpg";
import forest from "../assests/forest.JPG";
import airbnb from "../assests/airbnb.JPG";
import frontpagebg from "../assests/frontpagebg.png";


function Home() {
    return (
        <div>
          <div>
             <Banner />
          </div>
           
            <h1 className="text-black font-bold text-5xl capitalize">explore nearby</h1>
            <div className="ml-5 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              
            <Smallcard
                image="https://airbnb-wheat.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fkji&w=1080&q=75"
                location="Manchester"
                distance="4.5-minute drive"
            />
            <Smallcard
                image="https://airbnb-wheat.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F1to&w=1080&q=75"
                location="York"
                distance="4-hour drive"
            />
            <Smallcard
                image="https://airbnb-wheat.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1080&q=75"
                location="London"
                distance="45-minute drive"
            />
            <Smallcard
                image="https://airbnb-wheat.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fmsp&w=1080&q=75"
                location="Birkenhead"
                distance="4.5-hour drive"
            />
            <Smallcard
                image="https://airbnb-wheat.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F40m&w=1080&q=75"
                location="Newquay"
                distance="6-hour drive"
            />
            <Smallcard
                image="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=240"
                location="Hove"
                distance="4-hour drive"
            />
            <Smallcard
                image="https://a0.muscache.com/im/pictures/1bbded7d-51fe-49b8-b85d-e458b3e218bf.jpg?im_w=240"
                location="Lagos"
                distance="6-hour drive"
            />
            <Smallcard
                image="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240"
                location="Ekiti"
                distance="8-hour drive"
            />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 m-12 gap-6 w-11/12">
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
             <Card
                src={airbnb}
                title="Adventures"
                description="Comfortable travel and smooth adventure." 
            />
             <Card
                src={frontpagebg}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <Card
                src={kimberly}
                title="Nature Frienly"
                description="Grassland, flowers a whole lot of experience."
            />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 m-12 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-11/12">
            <Card
                src={jess}
                title="Experiences"
                description="Playful activities we can do together, led by a world of hosts."
            />
            <Card
                src={jonathan}
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src={nathan}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
             <Card
                src={forest}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
             <Card
                src={houseblock}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            /> <Card
                src={house}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className="ml-60 relative overflow-hidden shadow-lg">
            <img src="https://a0.muscache.com/im/pictures/204eea7c-fd71-4316-b056-7e2cc664351d.jpg?im_w=720" alt="" className="object-cover w-max h-96"/>
            
            <div className="absolute top-0 left-0 px-6 py-4">
                <h1 className="ml-2 font-black text-5xl text-black">shop airbnb</h1>
                <h1 className="font-black text-5xl text-black">gift cards</h1>
                <button className="bg-rose-500 text-white p-3 rounded-lg">learn more</button>
            </div>
              
            </div>
            
        </div>
    )
}

export default Home