const testHouse = new House({
  id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
  name: 'Ravenclaw',
  houseColours: 'Blue and bronze',
  founder: 'Rowena Ravenclaw',
  animal: 'Eagle',
  element: 'Air',
  ghost: 'Grey Lady',
  commonRoom: 'Ravenclaw Tower',
  heads: [
    {
      id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
      firstName: 'Filius',
      lastName: 'Flitwick',
    },
    {
      id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
      firstName: 'Rowena',
      lastName: 'Ravenclaw',
    },
  ],
  traits: [
    { id: '08a54d21-6137-4eda-9c32-004706650b44', name: 'Learning' },
    { id: '5056effc-b92b-4f86-96fd-978b26a849da', name: 'Acceptance' },
    { id: '78db6224-33d1-490d-a553-9bbbedb3282a', name: 'Inteligence' },
    { id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a', name: 'Wisdom' },
    { id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3', name: 'Wit' },
    { id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a', name: 'Creativity' },
  ],
});

testHouse.save().then((doc) => console.log(doc));
