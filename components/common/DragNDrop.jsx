import React from "react";
import { Form, Header, Icon, Segment, Image } from "semantic-ui-react";

const DragNDrop = ({
  inputRef,
  handleChange,
  preview,
  addImage,
  submitImages,
}) => {
  return (
    <>
      <Form.Field style={{ width: "20vw", marginRight: "-9vw", marginLeft: "1vw", zIndex: "5" }}>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="pictures"
            ref={inputRef}
          />
          <div
            style={{ cursor: "pointer" }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragLeave={(e) => {
              e.preventDefault();
            }}
            onDrop={(e) => {
              e.preventDefault();
              // console.log(e.dataTransfer.files);
              const droppedFile = e.dataTransfer.files[0];
              setMedia(droppedFile);
              setPreview(URL.createObjectURL(droppedFile));
            }}
            onClick={() => inputRef.current.click()}
          >
            {preview === null ? (
              <>
                <Segment placeholder basic>
                  <Header icon>
                    <Icon name="file image outline" />
                    Drag N Drop image here to upload
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <>
                  <Segment placeholder basic>
                    <Image
                      src={preview}
                      size="medium"
                      centered
                      style={{ cursor: "pointer" }}
                    />
                  </Segment>
                </>
              </>
            )}
          </div>
        </Segment>
        <div className="imageButtons" style={{display: "inline-flex"}}>
        <button className="uploadImages" onClick={(e) => addImage(e)}>
          Upload Image?
        </button>
        <button className="submitImages" onClick={(e) => submitImages(e)}>
          Submit Images?
        </button>
        </div>
      </Form.Field>
    </>
  );
};

export default DragNDrop;
