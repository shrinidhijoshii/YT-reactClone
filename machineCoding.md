Other Discussion:

- What is higher order component ?
  component which takes component as argument and returns component , it is is higher order component
  - practical used case : let say you have <Videcard/> component and you want to use same video card with some modification
  - using the higher order component we can use <Videcard/> with some modification like this
  
  - const NewVideoCard = async (VideoCard) => {
        return (
          <div className="bg-green border">
              <VideoCard info={item} />
          </div>
        );
      };
      
  - NewVideoCard taking VideoCard as a argument and returning modified form of it(that is also component)
  - here we have created <NewVideoCard/> component which has all properties of <Videcard/> and <NewVideoCard/> has some extra properties added newly
    they are "bg-green border"



1.when interviwer asks to build any web app
- do not start coding
- ask these questions for requirement clarification
  - discuss about features you are planning to build
  - discuss about tech stack and explain the need of them [5 min]
    - tailwind for styling
    - redux for the data layer management
    - react-routing-dom for routing
    - about which bundler you are using
  - ask you can use google search or not

- planning the things [10 min]
 - do low level design
  - how to structure the components and name each component properly
  - how data will flow
  - plan UI design on paper or on screen discuss with person

-  Implementation
 - use ```npx create-react-app app_name`` for the first time in the interest of time
 - before using above command explain how we can use react in existing project as a web-pack and do the rest things manually