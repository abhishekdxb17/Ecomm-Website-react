import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://underarmour.scene7.com/is/image/Underarmour/SS21_ACC_IsoChillLaunchHat_Site_5_4_M_3_?qlt=75&fmt=jpg&wid=608&op_sharpen=1&',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://www.outdoorresearch.com/media/catalog/category/S23_header_mens_jackets_and_shells.jpg',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.etsystatic.com/23981860/r/il/c69c08/3623431783/il_570xN.3623431783_c7of.jpg',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://images.ctfassets.net/t0pm5m7uku03/2cBF2zO4XSyQAueIsmEkmO/c70308fe241bea4b0ed4b6986f5aa97b/image_0__11_.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://www.oreilly.com/api/v2/epubs/9780134433233/files/graphics/07fig00.jpg',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
