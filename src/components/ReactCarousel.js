import { Carousel } from 'react-responsive-carousel';

export default function ReactCarousel() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1421757381940-5d269570b21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
        />
      </div>
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1ODI4NjB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1421757381940-5d269570b21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
        />
      </div>
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div>
        <img
          alt="item"
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1ODI4NjB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </Carousel>
  );
}
