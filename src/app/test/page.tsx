
import React from 'react';
import Card from '../(components)/Card';

const Home: React.FC = () => {
 

  return (
    <div className="flex h-screen">
      <div className=" w-1/2 top-0 left-0">
        <Card
          header={"Cards 1"}
          body={'The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.'}
          headerColor={"text-green-700"}
          bodyColor={'bg-green-100'}
        />
      </div>
      <div className="absolute w-1/2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card
                   header={"Cards 1"}
                   body={'The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.'}
                   headerColor={"text-green-700"}
                   bodyColor={'bg-green-100'}
        />
      </div>
      <div className="absolute w-1/2 bottom-0 right-0">
        <Card
                   header={"Cards 1"}
                   body={'The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.'}
                   headerColor={"text-green-700"}
                   bodyColor={'bg-green-100'}
        />
      </div>
    </div>
  );
};

export default Home;
