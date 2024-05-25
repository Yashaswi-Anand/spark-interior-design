import React from 'react'
import ImageListView from '../../widgets/ImageListView';
import images_1 from '../assets/images/realwork1.jpg';
import images_2 from '../assets/images/realwork2.jpg';
import images_3 from '../assets/images/realwork3.jpg';

function RealWorkDocument() {
  const data = [{
    image_path: images_1,
    title: 'Ceiling'
  }, {
    image_path: images_2,
    title: 'Ceiling 2'
  },
  {
    image_path: images_3,
    title: 'Ceiling 6',
  }];

  return (
    <div>
      <ImageListView data={data} />
    </div>
  )
}

export default RealWorkDocument