Other Discussion:

1. What is higher order component ?
  component which takes component as argument and returns component , it is is higher order component
  - practical used case : let say you have <Videcard/> component and you want to use same video card with some modification
  - using the higher order component we can use <Videcard/> with some modification like this
  ```
    const NewVideoCard = async (VideoCard) => {
         return (
          <div className="bg-green border">
              <VideoCard info={item} />
          </div>
        );
      };
  ```
  
      
  - NewVideoCard taking VideoCard as a argument and returning modified form of it(that is also component)
  - here we have created <NewVideoCard/> component which has all properties of <Videcard/> and <NewVideoCard/> has some extra properties added newly
    they are "bg-green border"

2. About YT Search and Suggestions 
  - Internally it uses ```debouncing```
   - while slow typing, generally gap between each key stroke will be around 200ms
   - while fast typing, generally gap between each key stroke will be around 30-50ms
   - what is the meaning of ```debouncing with 200ms``` (company to company this time differs)
     - if diff bw two key stroke is < 200ms , then ```Decline``` api call
     - if diff bw two key stroke is >= 200ms , then ```Do``` api call (it means user may have stopped typing after 200ms, now give suggestions)
    
   - performace with debouncing:
     - if 1000 peoples are searching Iphone pro max (14 letters)
       - without debouncing if we implement suggestions then , 14x1000 = 14000 api calls
       - with debouncing if we implement suggestions then , 3x1000 = 3000 api calls (high performant as less api calls)

3. How can I further optimise api calls in debouncing 
   - it can be achieved using caching (we are using redux store for caching)
     - when we type anything , suggestions results can be stored in the redux store 
     - if we type same keyword or same search word in the future or the next time we can avoid api calls and give the already existing result.

   - LRU (least recently used) cache - it is used to avoid cache bloating
     - it is implemented using queue , we need to define threshold point as a size
     - once queue size reaches threshold point , queue removes first added item [FIFO]
     - it makes sures queue contains always defined threshold

4. How can I show live data in my web app (eg : YT live chat)
   - all live data handling web apps internally uses: 
    1. web-sockets [ UI(data layer) <-----> Server ]
    2. API polling [ UI(data layer) ------ Server ]

    web-sockets:
      - web-socket is a bi-directional handshake connection bw Server & data layer of the UI
      - bi-drectional means handshake connection is able to send data from data layer of the UI to Server & Server to data layer of the UI
      - as soon as we start our app , two way handshake will be established after that data flows bw both ends very fastly
      - eg: Trading apps , Live chats

    API polling:
      - API polling is uni-directional , after regular interval of time polling is done to check any data is available to display or to use
      - if data is available , again this poling cycle will repeat
      - eg : Gmail, YT live chat

Machine coding Tips

1.When interviwer asks to build any web app
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


 Important Docs 

 1. https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 2. https://mui.com/material-ui/react-autocomplete/#search-as-you-type
 3. https://styled-components.com/docs/basics
 4. https://tailwindcss.com/
 5. https://redux-toolkit.js.org/introduction/getting-started#purpose
 6. https://testing-library.com/docs/react-testing-library/intro/
 7. https://jestjs.io/docs/getting-started
 8. https://testing-library.com/docs/queries/bytestid/
 9. https://react.dev/reference/react
 10. https://github.com/chetannada/Namaste-React
