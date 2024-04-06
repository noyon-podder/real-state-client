const PropertyImageGallery = () => {
  return (
    <div className="lg:mt-7 mt-5">
      <div className="grid lg:grid-cols-12 lg:gap-10 gap-5">
        <div className="lg:col-span-8">
          <div className="w-full max-h-[450px]">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg"
              alt=""
              className="w-full lg:h-[450px] h-[300px] rounded-[8px]  object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 lg:gap-10 gap-5">
            <div className="    ">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg"
                alt=""
                className="h-[205px] object-cover rounded-[8px] w-full"
              />
            </div>
            <div className="    ">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg"
                alt=""
                className="h-[205px] object-cover rounded-[8px] w-full"
              />
            </div>
            <div className="    ">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
                alt=""
                className="h-[205px] object-cover rounded-[8px] w-full"
              />
            </div>
            <div className="    ">
              <img
                src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg"
                alt=""
                className="h-[205px] object-cover rounded-[8px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyImageGallery;
