import { Galleria } from 'primereact/galleria';

function Gallery({ showThumbs = false, images, className, width, height, radius, showIndicators, showItemNavigators}) {  
    const itemTemplate = (item) => {
     const cor = item.color;
      
        return (
        <div className={`${className} ${item.title ? "px-24" : "px-0 relative"}`}>
            {item.title && (
                <div className="gallery-text-content">
                    <p className="gallery-subtitle">{item.subtitle}</p>
                    <h2 className="gallery-title">{item.title}</h2>
                    <p className="gallery-description">{item.description}</p>
                    <button className="gallery-button">{item.buttonLabel}</button>
                </div>
            )}
                {showThumbs ? (
                  <div className={`gallery-image-content w-full`}  style={!item.title ? { backgroundColor: cor } : {}}>
                    <img src={item.image} alt={item.alt} 
                    style={{height: height, paddingBlock: "160px"}}
                    />
                  </div>
                ) : (
                  <div className={`gallery-image-content`}>
                    <img src={item.image} alt={item.alt} 
                    style={item.title ? {} : {width: width, height: height}}
                    />
                  </div>
                )}
        </div>
        );
    };

  return (
    <div>  
      <Galleria 
        value={images}
        showThumbnailNavigators={false}
        showItemNavigators={showItemNavigators}
        showIndicators={showIndicators}
        item={itemTemplate}
        numVisible={5} 
        showThumbnails={showThumbs}
        thumbnail={item => {
          const cor = item.color;
          return (
            <div style={!item.title ? { backgroundColor: cor, paddingBlock: "27px" } : {}}>
              <img className={`rounded-[${radius}] w-[117px]`} src={item.imageThumb || item.itemImageSrc} alt="" />
            </div>
          )
        }
      }
        style={showThumbs ? {width: width, height: height} : ""}
      />
    </div>
  )
}

export default Gallery
