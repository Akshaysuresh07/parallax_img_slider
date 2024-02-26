import SimpleImageSlider from "react-simple-image-slider";




    const slides = [
      

            { url: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80" },
            { url: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { url: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80" },
            { url: "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
             { url: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
          
    ]

    const Slider = () => {
        return (
          <div className=" d-flex justify-content-center mt-5">
            <SimpleImageSlider
              width={1400}
              height={400}
              images={slides}
              showBullets={true}
              showNavs={false}
            />
         
          </div>
        );
  
   
}
export default Slider;